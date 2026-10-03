import { create } from "zustand";

interface ResumeState {
  showPreview: boolean;
  openResume: () => void;
  closeResume: () => void;
  toggleResume: () => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  showPreview: false,
  openResume: () => set({ showPreview: true }),
  closeResume: () => set({ showPreview: false }),
  toggleResume: () => set((state) => ({ showPreview: !state.showPreview })),
}));
