import {axiosInstance} from "./axios.api.service";
import {authUrls} from "../Urls/urls";
import {IAuthUser} from "../Models/IAuthUser";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {tokenKey} from "../constants/constants";

const authService = {
    authUser: async (usersFormdata: IAuthUser) => {
        const response = await axiosInstance.post<ITokenObtainPair>(authUrls.auth, usersFormdata)
        localStorage.setItem(tokenKey, JSON.stringify(response.data))
    }
}

export {
    authService
}