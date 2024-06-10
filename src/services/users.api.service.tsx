import {axiosInstance} from "./axios.api.service";
import {usersUrls} from "../constants/Urls";
import {IUserModel} from "../Models/IUserModel";

export const usersApiService = {
    getAll: async ():Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>(usersUrls.users)
        return response.data
    }
}