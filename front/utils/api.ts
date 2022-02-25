import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://hacku-backend.japaneast.cloudapp.azure.com",
});

export { axiosInstance };
