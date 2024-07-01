import { create } from "zustand";
import { FilterType } from "../const";

interface initialState {
    filterType: FilterType,
    setFilter: (filter: FilterType) => void
}

export const useFilters = create<initialState>((set) => ({
    filterType: FilterType.All,

    setFilter: (filter: FilterType) => {
        set({ filterType: filter })
    }
}))