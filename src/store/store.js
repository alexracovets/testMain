import { configureStore } from '@reduxjs/toolkit';

import stateIndustriesReducer from './reducers/stateIndustries';
import statePagesReducer from './reducers/statePages';
const store = configureStore({
    reducer: {
        stateIndustries: stateIndustriesReducer,
        statePages: statePagesReducer
    },
});

export default store;