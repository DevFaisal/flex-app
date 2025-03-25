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

export default useCalculateStore;
