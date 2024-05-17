import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreIndustries = create(immer((set) => ({
    isDetail: false,
    activeIndustry: -1,
    activeRow: -1,
    activeItem: -1,
    sliderIndusrty: -1,
    changeActiveIndusry: (numberIndustry, rowIndustry) => set((state) => { 
        if (numberIndustry === state.activeIndustry) {
            state.activeIndustry = -1;
            state.activeRow = -1;
            state.isDetail = false;
        } else {
            state.activeIndustry = numberIndustry;
            state.activeRow = rowIndustry;
            state.isDetail = true;
        }
    }),
    getSliderIndustry: (index) => set((state) => {
        state.sliderIndusrty = index;
    }),
    getActiveRow: (index) => set((state) => {
        state.activeRow = index;
    }),
})));

export default useStoreIndustries;
