import axios from "axios";

// AQUI VAI SER A CONEXÃO COM O BACKEND
const api = axios.create({
  baseURL: "http://localhost:80", // URL do seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;