import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useAnchorScroll = create(immer((set) => ({
    section: null,
    scrollTo: false,
    getSection: (value) => set((state) => {
        state.section = value;
    }),
    getScrollTo: (value) => set((state) => {
        state.scrollTo = value;
    })
})));

export default useAnchorScroll;
