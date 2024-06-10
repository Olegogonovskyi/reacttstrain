import axios from "axios";
import {baseUrl} from "../constants/Urls";

export const axiosInstance = axios.create({
    baseURL: baseUrl
})