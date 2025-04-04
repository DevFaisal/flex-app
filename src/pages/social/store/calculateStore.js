import { create } from "zustand";

const initialState = {
  balance: "",
  minimum: "",
  apr: "",
  spending: "",
};

const useCalculateStore = create((set) => ({
  form: { ...initialState },
  setForm: (form) => set({ form }),
  resetForm: () => set({ form: { ...initialState } }),
}));

const useTakeQuizStore = create((set) => ({
  currentStep: 0,
  handleNextStep: (num) => {
    set((state) => ({
      currentStep: state.currentStep + 1 || num,
    }));
  },
  handleNextStepWithScroll: () => {
    window.scrollTo({
      top: document.getElementById("quiz").offsetTop,
      behavior: "smooth",
    });
    set((state) => ({
      currentStep: (state.currentStep = 1),
    }));
  },
  resetQuiz: () => {
    set((state) => ({
      currentStep: (state.currentStep = 0),
    }));
  },
}));

export { useCalculateStore, useTakeQuizStore };
