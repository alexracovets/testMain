import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useActiveModel = create(immer((set) => ({
    activeModel: -1,
    setActiveModel: (number) => set((state) => {
        state.activeModel = number;
    })
})));

export default useActiveModel;
