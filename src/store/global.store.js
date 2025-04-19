import { create } from 'zustand';
import getRandomNumberFromUUID from '../utils/generateRandomNumber';
import lambdaService from '../services/lamda';

export const useNewUserStore = create((set, get) => ({
  isNewNumberGenerated: false,
  newNumber: Math.floor(Math.random() * 1000),

  setIsNewNumberGenerated: (value) => set({ isNewNumberGenerated: value }),
  setNewNumber: (value) => set({ newNumber: value }),

  fetchTheNewNumber: async () => {
    const { isNewNumberGenerated, setNewNumber, setIsNewNumberGenerated } = get();

    if (isNewNumberGenerated) {
      return;
    }

    try {
      const response = await lambdaService.getCount()
      const number = response?.current_number;
      
      if (number) {
        setNewNumber(number);
        setIsNewNumberGenerated(true);
      } else {
        const fallback = getRandomNumberFromUUID();
        setNewNumber(fallback);
        setIsNewNumberGenerated(true);
      }

    } catch (error) {
      if (error.message?.toLowerCase().includes('exceeded')) {
        setTimeout(() => get().fetchTheNewNumber(), 2000);
      } else {
        const fallback = getRandomNumberFromUUID();
        setNewNumber(fallback);
        setIsNewNumberGenerated(true);
      }
    }
  },
}));

