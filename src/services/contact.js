import axios from 'axios';
import { api } from '../utils/api';

const baseUrl = 'http://localhost:3000';

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
  // createContact: async (data) => {
  //   try {
  //     const response = await axios.post(`${baseUrl}/api/create-contact`, data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     return response.data;
  //   } catch (error) {
  //     console.error('Error Occurred:', error.response?.data || error.message);
  //     throw error;
  //   }
  // },
};

export default contactService;
