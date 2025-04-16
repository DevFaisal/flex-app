import { create } from 'zustand';
import getRandomNumberFromUUID from '../utils/generateRandomNumber';
import lambdaService from '../services/lamda';

export const useNewUserStore = create((set, get) => ({
  isNewNumberGenerated: false,
  newNumber: 0,

  setIsNewNumberGenerated: (value) => set({ isNewNumberGenerated: value }),
  setNewNumber: (value) => set({ newNumber: value }),

  fetchTheNewNumber: async () => {
    const { isNewNumberGenerated, setNewNumber, setIsNewNumberGenerated } = get();

    if (isNewNumberGenerated) {
      console.log('Number already generated:', get().newNumber);
      return;
    }

    try {
      const response = await lambdaService.incrementNumber()
      const number = response?.new_number;
      
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

