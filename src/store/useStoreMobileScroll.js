import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreMobileScroll = create(immer((set) => ({
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
    currentPercentage: 0,
    getScroll: (data) => set((state) => {
        const scrollHeight = data.scrollHeight;
        const scrollTop = data.scrollTop;
        const clientHeight = data.clientHeight;
        const currentPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        // console.log(data)
        state.scrollHeight = scrollHeight;
        state.scrollTop = scrollTop;
        state.clientHeight = clientHeight;
        state.currentPercentage = currentPercentage;
    })
})));

export default useStoreMobileScroll;
