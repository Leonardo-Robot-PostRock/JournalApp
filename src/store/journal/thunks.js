import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';

import { FirebaseDB } from '../../firebase/config';

import {
	addNewEmptyNote,
	deleteImage,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotosToActiveNote,
	setSaving,
	updateNote,
} from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';

const baseUrl = import.meta.env.VITE_BASE_URL;

console.log(baseUrl)

export const startNewNote = () => {
	return async (dispatch, getState) => {
		dispatch(savingNewNote());

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

		const noteToFireStore = { ...note };
		delete noteToFireStore.id;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
		await setDoc(docRef, noteToFireStore, { merge: true });

		dispatch(updateNote(note));
	};
};

export const startUploadingFiles = (files = []) => {
	return async (dispatch) => {
		dispatch(setSaving());

		// await fileUpload(files[0]);
		try {
			const fileUploadPromises = [];
			for (const file of files) {
				fileUploadPromises.push(fileUpload(file));
			}

			//Disparar Promesas
			const photosUrls = await Promise.all(fileUploadPromises);

			dispatch(setPhotosToActiveNote(photosUrls));
		} catch (error) {
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

		try {

			const publicIds = imageUrls.map(url => extractPublicIdFromUrl(url));
			await fetch(`${baseUrl}/images/delete`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ publicIds })
			});

			// Update Firestore
			const updatedImageUrls = note.imageUrls.filter(url => !imageUrls.includes(url));
			const noteToFireStore = { ...note, imageUrls: updatedImageUrls };
			const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
			await setDoc(docRef, noteToFireStore, { merge: true });

			// Update Redux state
			dispatch(deleteImage(imageUrls));
			dispatch(setActiveNote({ ...note, imageUrls: updatedImageUrls }))
		} catch (error) {
			console.error('Error deleting images:', error);
		}
	};
};

const extractPublicIdFromUrl = (url) => {
	const parts = url.split('/');
	const publicIdWithExtension = parts[parts.length - 1];
	const publicId = publicIdWithExtension.split('.')[0];
	return publicId;
};
