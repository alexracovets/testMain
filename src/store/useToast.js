import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useToast = create(immer((set) => ({
    isPlay: false,
    isSuccess: false,
    text: '',
    setIsPlay: (isSuccess, text) => set((state) => {
        state.isSuccess = isSuccess;
        state.text = text;
        state.isPlay = true;
        state.isPlay = false;
    })
})));

export default useToast;
