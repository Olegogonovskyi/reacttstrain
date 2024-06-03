import React, {FC, useEffect, useState} from 'react';
import {carsService} from "../../services/cars.api.service";
import {ICarPaginated} from "../../models/ICarPaginated";

import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {authService} from "../../services/Auth.service";


const CarsComponent: FC = () => {

    const [casrsRespons, setcasrsRespons] = useState<ICarPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })
    const navigate = useNavigate()
    useEffect(() => {
        const carsData = async () => {
            try {
                const response = await carsService.getAllCars()
                if (response) {
                    setcasrsRespons(response)
                }
            } catch (e) {
                const axiosError = e as AxiosError
                if (axiosError && (axiosError?.response?.status === 401 || axiosError?.response?.status === 400)) {
                    try {
                        await authService.refresh()
                    } catch (e) {
                        return navigate('/')
                    }
                }

            }


        }
        carsData()
    }, []);


    return (
        <div>
            {
                casrsRespons && casrsRespons.items
                    .map(car => <h1>{car.id} {car.brand}</h1>)
            }
        </div>
    );
};

export default CarsComponent;