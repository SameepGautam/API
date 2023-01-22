import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"http://localhost:3500",
    timeout:4000,
    withCredentials:true,
   
})

export const getToken = () => axiosInstance.get("/");
export const seeToken = () => axiosInstance.get("/cookie")
