import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useScrollPageNavigation = create(immer((set) => ({
    isNavigateStart: false,
    isScrollImageShown: true,
    isScrollAllowed: true,
    setNavigateStart: (value) => set((state) => {
        state.isNavigateStart = value;
    }),
    setIsScrollImageShown: (value) => set((state) => {
        state.isScrollImageShown = value;
    }),
    setIsScrollAllowed: (value) => set((state) => {
        state.isScrollAllowed = value;
    })
})));

export default useScrollPageNavigation;
