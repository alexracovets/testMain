import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreMobileScroll = create(immer((set) => ({
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
    currentPercentage: 0,
    headerHeight: 0,
    pageHeight: 0,
    activeModel: -1,
    getScroll: (data) => set((state) => {
        const scrollHeight = data.scrollHeight;
        const scrollTop = data.scrollTop;
        const clientHeight = data.clientHeight;
        const currentPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        state.scrollHeight = scrollHeight;
        state.scrollTop = scrollTop;
        state.clientHeight = clientHeight;
        state.currentPercentage = currentPercentage;
    }),
    getHeaderHeight: (data) => set((state) => {
        state.headerHeight = data;
    }),
    getPageHeight: (data) => set((state) => {
        state.pageHeight = data;
    }),
    setActiveModel: (data) => set((state) => {
        state.activeModel = data;
    })
})));

export default useStoreMobileScroll;
