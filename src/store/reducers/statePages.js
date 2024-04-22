import { createSlice } from '@reduxjs/toolkit';

const statePages = createSlice({
    name: 'statePages',
    initialState: {
        activePage: -1
    },
    reducers: {
        changeActivePage: (state, action) => {
            state.activePage = action.payload
        },
    }
});

export const { changeActivePage } = statePages.actions;

export default statePages.reducer;