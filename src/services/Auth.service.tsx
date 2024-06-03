import {TokenObtainPair} from "../models/IFormDataModel";
import {axiosInstance} from "./api.axios.service";
import {authUrls} from "../constants/Urls";
import {ITokenRefresh} from "../models/ITokenRefresh";
import {tokenKey} from "../constants/costants";
import {useNavigate} from "react-router-dom";

const authService = {

    auth: async (formData: TokenObtainPair): Promise<boolean> => {

        const response = await axiosInstance.post<ITokenRefresh>(authUrls.auth, formData)
        localStorage.setItem(tokenKey, JSON.stringify(response.data))
        return !!(response.data.access && response.data.refresh)

    }
}

export {
    authService
}