import axios from 'axios';

const baseURL = 'https://accounts.zoho.in';

async function createContact(data) {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.post(`${baseURL}/crm/v2/Contacts`, data, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
}

export default createContact;
