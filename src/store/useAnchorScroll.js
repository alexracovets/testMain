import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useAnchorScroll = create(immer((set) => ({
    section: null,
    getSection: (value) => set((state) => {
        state.section = value;
    })
})));

export default useAnchorScroll;
