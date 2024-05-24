import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreServices = create(immer((set) => ({
    isDetail: false,
    activeServices: 0,
    sliderServices: 0,
    changeActiveServices: (numberIndustry, rowIndustry) => set((state) => { 
        if (numberIndustry === state.activeServices) {
            state.isDetail = false;
        } else {
            state.activeServices = numberIndustry;
            state.activeRow = rowIndustry;
            state.isDetail = true;
        }
    }),
    getSliderServices: (index) => set((state) => {
        state.sliderIndusrty = index;
    }),
    getActiveRow: (index) => set((state) => {
        state.activeRow = index;
    }),
})));

export default useStoreServices;
