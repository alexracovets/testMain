import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useModalForm = create(immer((set) => ({
    isActive: false,
    dataUser: [],
    setIsActive: (value) => set((state) => {
        state.isActive = value;
    }),
    setDataUser: (value) => set((state) => {
        state.dataUser = value;
    })
})));

export default useModalForm;
