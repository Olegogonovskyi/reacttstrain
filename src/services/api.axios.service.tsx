import axios from "axios";
import {authUrls, baseUrl} from "../constants/Urls";
import {tokenKey} from "../constants/costants";
import {LocalStorHelper} from "../helpers/localStorHelper";
import {ITokenRefresh} from "../models/ITokenRefresh";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.request.use(request => {
    if(localStorage.getItem(tokenKey) && request.url !== authUrls.refresh)
        request.headers.set('Authorization', 'Bearer ' + LocalStorHelper<ITokenRefresh>(tokenKey).access)

    return request
})

export {
    axiosInstance
}