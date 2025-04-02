import { create } from "zustand";

const useFormStore = create((set) => ({
  number: 3687,
  setWaitinglistNumber: (number) => {
    set(() => ({
      number: number,
    }));
  },
}));

export default useFormStore;
