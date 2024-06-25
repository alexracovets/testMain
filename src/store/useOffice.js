import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useOffice = create(immer((set) => ({
    isActive: false,
    link: 'https://test-office.netlify.app/',
    setIsActive: (value) => set((state) => {
        state.isActive = value;
    })
})));

export default useOffice;
