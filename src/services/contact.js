import { api } from '../utils/api';

const contactService = {
  createContact: async (data) => {
    try {
      const response = await api.post('', data);

      return response.data;
    } catch (error) {
      console.error('Error Occurred:', error.response?.data || error.message);
      throw error;
    }
  },
};

export default contactService;
