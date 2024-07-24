import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';

import { FirebaseDB } from '../../firebase/config';

import {
	addNewEmptyNote,
	deleteImage,
	deleteNoteById,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
} from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';
import { clearTemporaryImages, removeTemporaryImage, setTemporaryImages } from '../temporalImages/temporalImagesSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const startNewNote = () => {
	return async (dispatch, getState) => {
		dispatch(setSaving());

		const { uid } = getState().auth;
		const newNote = {
			title: '',
			body: '',
			imageUrls: [],
			date: new Date().getTime(),
		};

		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		dispatch(addNewEmptyNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};

export const startLoadingNotes = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error('El UID del usuario no existe');

		const notes = await loadNotes(uid);

		dispatch(setNotes(notes));
	};
};

export const startSaveNote = () => {
	return async (dispatch, getState) => {
		dispatch(setSaving());

		const { uid } = getState().auth;
		const { active: note } = getState().journal;
		const { imageUrls: temporaryImageUrls } = getState().temporaryImages;

		const fileUploadPromises = temporaryImageUrls.map(async (url) => {
			const response = await fetch(url);
			const blob = await response.blob();
			return await fileUpload(blob);
		})

		const uploadedImageUrls = await Promise.all(fileUploadPromises);

		const noteToFireStore = {
			...note,
			imageUrls: [...note.imageUrls, ...uploadedImageUrls]
		};

		delete noteToFireStore.id;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
		await setDoc(docRef, noteToFireStore, { merge: true });

		dispatch(updateNote({ ...note, imageUrls: noteToFireStore.imageUrls }));
		dispatch(setActiveNote({ ...note, imageUrls: noteToFireStore.imageUrls }));
		dispatch(clearTemporaryImages());
	};
};

export const startUploadingFiles = (files = []) => {
	return async (dispatch) => {
		try {
			const temporaryUrls = [];
			for (const file of files) {
				const tempUrl = URL.createObjectURL(file);
				temporaryUrls.push(tempUrl);
			}

			dispatch(setTemporaryImages(temporaryUrls));
		} catch (error) {
			console.error("Error inside thunk: ", error)
			throw new Error('Error al intentar subir las imagenes');
		}
	};
};

export const startDeletingNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
		await deleteDoc(docRef);
		dispatch(deleteNoteById(note.id));
	};
};

export const startDeletingImages = (imageUrls) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		dispatch(setSaving());

		const urlsToDelete = Array.isArray(imageUrls) ? imageUrls : [imageUrls];

		await dispatch(startDeletingTemporaryImages(urlsToDelete))

		try {
			const publicIds = imageUrls.map(url => extractPublicIdFromUrl(url));
			await fetch(`${baseUrl}/images/delete`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ publicIds })
			});

			const updatedImageUrls = note.imageUrls.filter(url => !imageUrls.includes(url));
			const noteToFireStore = { ...note, imageUrls: updatedImageUrls };
			const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
			await setDoc(docRef, noteToFireStore, { merge: true });

			dispatch(deleteImage(urlsToDelete));
			dispatch(setActiveNote({ ...note, imageUrls: updatedImageUrls }))
		} catch (error) {
			console.error('Error deleting images:', error);
			throw new Error(error.message || 'Error al eliminar las imágenes');		}
	};
};

export const startDeletingTemporaryImages = (imageUrls) => {
	return async (dispatch) => {
		dispatch(setSaving());

		const urlsToDelete = Array.isArray(imageUrls) ? imageUrls : [imageUrls];
		dispatch(removeTemporaryImage(urlsToDelete));
	};
};

const extractPublicIdFromUrl = (url) => {
	const parts = url.split('/');
	const publicIdWithExtension = parts[parts.length - 1];
	const publicId = publicIdWithExtension.split('.')[0];
	return publicId;
};
