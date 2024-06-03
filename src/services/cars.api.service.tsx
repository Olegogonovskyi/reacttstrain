import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "../constants/Urls";
import {AxiosResponse} from "axios";
import {ICarPaginated} from "../models/ICarPaginated";

const carsService = {
    getAllCars: async (): Promise<AxiosResponse<ICarPaginated>> => {
        const carsResponse = await axiosInstance.get(carsUrls.getAllcars)
        return carsResponse.data
    }
}

export {
    carsService
}