import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/" }, { withCredentials: true });

export const registerUser = (user) => API.post("auth/register", user);
export const loginUser = ({email,password}) => API.post("auth/login", {email,password});