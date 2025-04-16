import { z } from 'zod';
import ZeroBounceSDK from "@zerobounce/zero-bounce-sdk"

const API_KEY = import.meta.env.VITE_ZERBOUNCE_API_KEY;
const zeroBounce = new ZeroBounceSDK();
zeroBounce.init(API_KEY)


const emailService = {
  validateEmailPattern: (email) => {
    const emailSchema = z.string().email('Invalid email format');
    return emailSchema.safeParse(email);
  },

  validateEmailWithZerobounce: async (email) => {
    try {
      const response = await zeroBounce.validateEmail(email);
      return response;
    } catch (error) {
      console.error('Error validating email with Zerobounce:', error);
      throw error;
    }
  },
};

export default emailService;
