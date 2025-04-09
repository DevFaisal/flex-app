import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://1e5c6f9gpj.execute-api.eu-west-2.amazonaws.com/default/hubspot-handler',
});

// old url = https://small-server.vercel.app/api/
