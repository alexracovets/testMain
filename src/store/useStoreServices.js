import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreServices = create(immer((set) => ({
    activeServices: 0,
    sliderServices: 0,
    changeActiveServices: (index) => set((state) => {
        state.activeServices = index;
    }),
    getSliderServices: (index) => set((state) => {
        state.sliderServices = index;
    }),
})));

export default useStoreServices;
