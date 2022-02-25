import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "http://localhost:8080",
});

export { axiosInstance };
