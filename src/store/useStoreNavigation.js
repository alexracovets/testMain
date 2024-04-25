import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreNavigation = create(immer((set) => ({
    isBurger: false,
    setBurger: (action) => set((state) => {
        state.isBurger = action;
    })
})));

export default useStoreNavigation;
