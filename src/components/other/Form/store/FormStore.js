import { create } from "zustand";

const useFormStore = create((set) => ({
<<<<<<< HEAD
  number: Math.floor(Math.random() * 10000),
=======
  number: Math.floor(Math.random() * 15000),
>>>>>>> testing
  setWaitinglistNumber: (number) => {
    set(() => ({
      number: number,
    }));
  },
}));

export default useFormStore;
