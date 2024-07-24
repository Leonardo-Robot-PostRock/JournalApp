import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal/journalSlice';
import { temporaryImagesSlice } from './temporalImages/temporalImagesSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		journal: journalSlice.reducer,
		temporaryImages: temporaryImagesSlice.reducer
	},
	devTools: false,
});
