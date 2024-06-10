import {axiosInstance} from "./axios.api.service";
import {postsUrls} from "../constants/Urls";
import {IPostModel} from "../Models/IPostModel";

export const postsApiService = {
    getAll: async (): Promise<IPostModel[]> => {
        const response = await axiosInstance.get<IPostModel[]>(postsUrls.posts)
        return response.data
    }
}