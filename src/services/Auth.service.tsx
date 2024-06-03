import {TokenObtainPair} from "../models/IFormDataModel";
import {axiosInstance} from "./api.axios.service";
import {authUrls} from "../constants/Urls";
import {ITokenRefresh} from "../models/ITokenRefresh";
import {tokenKey} from "../constants/costants";
import {carsService} from "./cars.api.service";
import {LocalStorHelper} from "../helpers/localStorHelper";

const authService = {

    auth: async (formData: TokenObtainPair): Promise<boolean> => {

        const response = await axiosInstance.post<ITokenRefresh>(authUrls.auth, formData)
        localStorage.setItem(tokenKey, JSON.stringify(response.data))
        return !!(response.data.access && response.data.refresh)
    },
    refresh: async () => {
        const refreshToken = LocalStorHelper<ITokenRefresh>(tokenKey).refresh
        const response = await axiosInstance.post(authUrls.refresh, {refresh: refreshToken})
        localStorage.setItem(tokenKey, JSON.stringify(response.data))
    }
}

export {
    authService
}