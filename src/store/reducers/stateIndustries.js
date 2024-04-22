import { createSlice } from '@reduxjs/toolkit';

const stateIndustries = createSlice({
    name: 'stateIndustries',
    initialState: {
        isDetail: false,
        activeIndustry: -1,
        activeRow: -1,
    },
    reducers: {
        changeActiveIndusry: (state, action) => {
            const numberIndustry = action.payload.numberIndustry;
            const rowIndustry = action.payload.rowIndustry;
            if (numberIndustry === state.activeIndustry) {
                state.activeIndustry = -1;
                state.activeRow = -1;
                state.isDetail = false;
            } else {
                state.activeIndustry = numberIndustry;
                state.activeRow = rowIndustry;
                state.isDetail = true;
            }
        },
    }
});

export const { changeActiveIndusry } = stateIndustries.actions;

export default stateIndustries.reducer;