import { create } from "zustand";

type State = {
    isExpanded: boolean;
};

type Action = {
    open: () => void;
    close: () => void;
    setIsExpanded: (state: boolean) => void;
};

type UseSidebarIsExpanded = State & Action;

export const useSidebarIsExpanded = create<UseSidebarIsExpanded>((set) => ({
    isExpanded: false,
    open: () => set({ isExpanded: false }),
    close: () => set({ isExpanded: true }),
    setIsExpanded: (state) => set({ isExpanded: state }),
}));
