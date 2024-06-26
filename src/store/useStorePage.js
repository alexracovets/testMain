import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStorePage = create(immer((set) => ({
    activePage: -1,
    changeActivePage: (newPage) => set((state) => {
        state.activePage = newPage;
    })
})));

export default useStorePage;
