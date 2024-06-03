import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "../constants/Urls";

import {ICarPaginated} from "../models/ICarPaginated";

const carsService = {
    getAllCars: async (): Promise<ICarPaginated | null> => {
        const carsResponse = await axiosInstance.get(carsUrls.getAllcars)
        console.log(carsResponse.data)
        return carsResponse.data

    }
}

export {
    carsService
}