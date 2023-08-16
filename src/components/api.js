// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://render-titol-nodeback.onrender.com/",
});

export default api;
