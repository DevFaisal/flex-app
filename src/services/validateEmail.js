import axios from 'axios';
import { z } from 'zod';

const URL = 'api.zerobounce.net/v2/validate';
const API_KEY = '8623420e8463426eab3fb9daebed0c3b';
const API_URL = `https://${URL}?api_key=${API_KEY}&email=`;

const emailService = {
  validateEmailPattern: (email) => {
    const emailSchema = z.string().email('Invalid email format');
    return emailSchema.safeParse(email);
  },

  validateEmailWithZerobounce: async (email) => {
    try {
      const response = await axios.get(`${API_URL}${email}`);
      return response.data;
    } catch (error) {
      console.error('Error validating email with Zerobounce:', error);
      throw error;
    }
  },
};

export default emailService;
