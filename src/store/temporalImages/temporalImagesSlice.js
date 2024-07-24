import { createSlice } from '@reduxjs/toolkit';

export const temporaryImagesSlice = createSlice({
    name: 'temporaryImages',
    initialState: {
        imageUrls: []
    },
    reducers: {
        setTemporaryImages: (state, action) => {
            state.imageUrls = [...state.imageUrls, ...action.payload];
        },
        removeTemporaryImage: (state, action) => {
            const urlsToRemove = Array.isArray(action.payload) ? action.payload : [action.payload];
            state.imageUrls = state.imageUrls.filter(url => !urlsToRemove.includes(url));
        },
        clearTemporaryImages: (state) => {
            state.imageUrls = [];
        },
    }
});


export const { setTemporaryImages, removeTemporaryImage, clearTemporaryImages } = temporaryImagesSlice.actions;
export default temporaryImagesSlice.reducer