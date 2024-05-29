import axios from "axios";
import {authUrls, baseUrl} from "../Urls/urls";
import {tokenKey} from "../constants/constants";
import {localStorhelper} from "../helpers/localStorhelper";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";

const axiosInstance = axios.create({baseURL: baseUrl})

axiosInstance.interceptors.request.use( (request) => {
       if (localStorage.getItem(tokenKey) && request.url !== authUrls.authRefr)
           request.headers.set('Authorization', 'Bearer ' + localStorhelper<ITokenObtainPair>(tokenKey).access)
    return request
})

export {
    axiosInstance
}