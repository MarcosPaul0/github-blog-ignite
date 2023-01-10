import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});
