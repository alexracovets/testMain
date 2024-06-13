import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useUserInteracted = create(immer((set) => ({
    userInteracted: false,
    setUserInteracted: (value) => set((state) => {
        state.userInteracted = value;
    }),
})));

export default useUserInteracted;
