import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tech-verse-digital-domain.vercel.app/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
