import create from 'zustand';

const useStore = create((set) => ({
    activePage: -1,
    changeActivePage: (newPage) => set({ activePage: newPage })
}));

export default useStore;