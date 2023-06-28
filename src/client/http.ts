import axios from "axios";

const http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use((res) => res.data);

export default http;
