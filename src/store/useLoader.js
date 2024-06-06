import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useLoader = create(immer((set) => ({
    isLoaded: false,
    setIsLoaded: (value) => set((state) => {
        state.isLoaded = value;
    })
})));

export default useLoader;
