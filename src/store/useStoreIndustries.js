import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreIndustries = create(immer((set) => ({
    isDetail: false,
    activeIndustry: -1,
    activeRow: -1,
    changeActiveIndusry: (data) => set((state) => {
        const numberIndustry = data.numberIndustry;
        const rowIndustry = data.rowIndustry;
        if (numberIndustry === state.activeIndustry) {
            state.activeIndustry = -1;
            state.activeRow = -1;
            state.isDetail = false;
        } else {
            state.activeIndustry = numberIndustry;
            state.activeRow = rowIndustry;
            state.isDetail = true;
        }
    })
})));

export default useStoreIndustries;
