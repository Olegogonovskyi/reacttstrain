import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "../constants/Urls";

import {ICarPaginated} from "../models/ICarPaginated";

const carsService = {
    getAllCars: async (page: string = '1'): Promise<ICarPaginated | null> => {
        const carsResponse = await axiosInstance.get(carsUrls.getAllcars, {params: {page: page}})
        console.log(carsResponse.data)
        return carsResponse.data

    }
}

export {
    carsService
}