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
		savingNewNote: (state) => {
			state.isSaving = true;
		},
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
			//payload: note
			state.isSaving = false;
			state.notes = action.payload.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}
				return note;
			});
			//Todo: mostrar mendaje de actualización
		},
		deleteNoteById: (state, action) => {},
	},
});

export const {
	savingNewNote,
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
	deleteNoteById,
} = journalSlice.actions;
