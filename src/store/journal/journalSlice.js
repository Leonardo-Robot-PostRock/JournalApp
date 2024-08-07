import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
		messageSaved: '',
		notes: [],
		active: null,
		// active: {
		// 	id: 'ABC123',
		// 	title: '',
		// 	body: '',
		// 	date: 1234567,
		// 	imageUrls: [], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
		// },
	},
	reducers: {
		addNewEmptyNote: (state, action) => {
			state.notes.push(action.payload);
			state.isSaving = false;
		},
		setActiveNote: (state, action) => {
			state.active = action.payload;
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setSaving: (state) => {
			state.isSaving = true;
		},
		updateNote: (state, action) => {
			state.isSaving = false;
			state.notes = state.notes.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}
				return note;
			});
			state.messageSaved = `${action.payload.title}, actualizada correctamente`;
		},
		setPhotosToActiveNote: (state, action) => {
			state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
			state.isSaving = false;
		},
		clearNotesLogout: (state) => {
			state.isSaving = false;
			state.messageSaved = '';
			state.notes = [];
			state.active = null;
		},
		deleteNoteById: (state, action) => {
			state.active = null;
			state.notes = state.notes.filter((note) => note.id !== action.payload);
		},
		deleteImage: (state, action) => {
			if (state.active) {
				const urlsToDelete = Array.isArray(action.payload) ? action.payload : [action.payload];
				state.active.imageUrls = state.active.imageUrls.filter(url => !urlsToDelete.includes(url));
			}

			state.isSaving = false;
		},
	},
});

export const {
	addNewEmptyNote,
	clearNotesLogout,
	deleteImage,
	deleteNoteById,
	setActiveNote,
	setNotes,
	setPhotosToActiveNote,
	setSaving,
	updateNote,
} = journalSlice.actions;
