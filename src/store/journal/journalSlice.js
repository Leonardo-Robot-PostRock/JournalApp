import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: true,
		messageSaved: '',
		notes: [],
		active: null,
		active: {
			id: 'ABC123',
			title: '',
			body: '',
			date: 1234567,
			imageUrls: [], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
		},
	},
	reducers: {
		addNewEmptyNote: (state, action) => {},
		setActiveNote: (state, action) => {},
		setNotes: (state, action) => {},
		setSaving: (state) => {},
		updateNote: (state, action) => {},
		deeteNoteById: (state, action) => {},
	},
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deeteNoteById } = journalSlice.actions;
