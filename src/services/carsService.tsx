import {axiosInstance} from "./axios.api.service";
import {carsUrls} from "../Urls/urls";
import {ICarPaginated} from "../Models/ICarPaginated";
import {AxiosError} from "axios";
import {localStorhelper} from "../helpers/localStorhelper";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {tokenKey} from "../constants/constants";
import {authService} from "./authService";

const CarsService = {
    getAllCars: async (): Promise<ICarPaginated | null> => {
        try {
            const response = await axiosInstance.get<ICarPaginated>(carsUrls.cars)
            return response.data
        } catch (e) {
            let axiosError = e as AxiosError
            if (axiosError?.response?.status === 401) {
                const refToken = localStorhelper<ITokenObtainPair>(tokenKey).refresh
                await authService.authRef(refToken)
                return CarsService.getAllCars()
            }
        }
        return null
    }
}


export {
    CarsService
}