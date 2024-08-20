import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useScrollPageNavigation = create(immer((set) => ({
    isNavigateStart: false,
    isScrollImageShown: true,
    isScrollOnPage: false,
    isTopScroll: false,
    isBottomScroll: false,
    isScrollAllowed: true,
    setNavigateStart: (value) => set((state) => {
        state.isNavigateStart = value;
    }),
    setIsScrollImageShown: (value) => set((state) => {
        state.isScrollImageShown = value;
    }),
    setIsScrollAllowed: (value) => set((state) => {
        state.isScrollAllowed = value;
    }),
    setIsScrollOnPage: (value) => set((state) => {
        state.isScrollOnPage = value;
    }),
    setIsTopScroll: (value) => set((state) => {
        state.isTopScroll = value;
    }),
    setIsBottomScroll: (value) => set((state) => {
        state.isBottomScroll = value;
    })
})));

export default useScrollPageNavigation;
