import axios from "axios";

export const api = axios.create({
  baseURL: "https://small-server.vercel.app/api/",
});
