import {axiosInstance} from "./axios.api.service";
import {carsUrls} from "../Urls/urls";
import {ICarPaginated} from "../Models/ICarPaginated";

 const CarsService = {
    getAllCars: async (): Promise<ICarPaginated> => {
            const response = await axiosInstance.get<ICarPaginated>(carsUrls.cars)
            console.log(response.data)
            return response.data
    }
}




export {
    CarsService
}