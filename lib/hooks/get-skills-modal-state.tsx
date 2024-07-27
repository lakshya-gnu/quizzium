import { create } from "zustand";

type State = {
    isOpen: boolean;
};

type Action = {
    open: () => void;
    close: () => void;
    setIsOpen: (state: boolean) => void;
};

type UseSkillsModal = State & Action;

export const getSkillsModalState = create<UseSkillsModal>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: false }),
    close: () => set({ isOpen: true }),
    setIsOpen: (state) => set({ isOpen: state }),
}));
