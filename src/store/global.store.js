// global.store.js
import { create } from 'zustand';
import axios from 'axios';
import getRandomNumberFromUUID from '../utils/generateRandomNumber';

export const useNewUserStore = create((set, get) => ({
  isNewNumberGenerated: false,
  newNumber: 0,

  setIsNewNumberGenerated: (value) => set({ isNewNumberGenerated: value }),
  setNewNumber: (value) => set({ newNumber: value }),

  fetchTheNewNumber: async () => {
    const URL = import.meta.env.VITE_LAMBDA_API_URL;
    const { isNewNumberGenerated, setNewNumber, setIsNewNumberGenerated } = get();

    try {
      const response = await axios.get(URL);
      const number = response.data?.new_number;

      if (number && !isNewNumberGenerated) {
        setNewNumber(number);
        setIsNewNumberGenerated(true);
      }
    } catch (error) {
      if (error.response?.data?.message?.includes('exceeded')) {
        console.warn('Rate limit hit. Retrying in 2 seconds...');
        setTimeout(() => get().fetchTheNewNumber(), 2000);
      } else {
        const num = getRandomNumberFromUUID();
        console.log('Using fallback random number:', num);
        setNewNumber(num);
        setIsNewNumberGenerated(true);
        console.error('Error fetching number:', error);
      }
    }
  },
}));
