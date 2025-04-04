import { create } from "zustand";

const useFormStore = create((set) => ({
  number: Math.floor(Math.random() * 15000),
  setWaitinglistNumber: (number) => {
    set(() => ({
      number: number,
    }));
  },
}));

export default useFormStore;
