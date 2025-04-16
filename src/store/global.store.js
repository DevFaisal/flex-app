import { create } from 'zustand';
import getRandomNumberFromUUID from '../utils/generateRandomNumber';
import invokeLambda from '../utils/invokeLambda';

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
      const response = await invokeLambda();
      const number = response?.new_number;

      if (number) {
        setNewNumber(number);
        setIsNewNumberGenerated(true);
      }
    } catch (error) {
      if (error.message?.includes('exceeded')) {
        console.warn('Rate limit hit. Retrying in 2 seconds...');
        setTimeout(() => get().fetchTheNewNumber(), 2000);
      } else {
        const fallback = getRandomNumberFromUUID();
        setNewNumber(fallback);
        setIsNewNumberGenerated(true);
        console.error('Error fetching number:', error);
      }
    }
  },
}));

