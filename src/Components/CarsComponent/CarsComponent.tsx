import React, {FC, useEffect, useState} from 'react';
import {carsService} from "../../services/cars.api.service";
import {ICarPaginated} from "../../models/ICarPaginated";

import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";
import {authService} from "../../services/Auth.service";
import PaginationComponent from "../PaginationComponent/PaginationComponent";


const CarsComponent: FC = () => {

    const [casrsRespons, setcasrsRespons] = useState<ICarPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })
    const [qwerty, setQwerty] = useSearchParams()
    const navigate = useNavigate()
    useEffect(() => {
        const carsData = async () => {
            try {
                const response = await carsService.getAllCars(qwerty.get('page') || '1')
                if (response) {
                    setcasrsRespons(response)
                }
            } catch (e) {
                const axiosError = e as AxiosError
                if (axiosError && (axiosError?.response?.status === 401 || axiosError?.response?.status === 400)) {
                    try {
                        await authService.refresh()
                        const response = await carsService.getAllCars(qwerty.get('page') || '1')
                        if (response) {
                            setcasrsRespons(response)
                        }
                    } catch (e) {
                        return navigate('/')
                    }
                }

            }
        }
        carsData()
    }, [qwerty]);


    return (
        <div>
            {
                casrsRespons && casrsRespons.items
                    .map(car => <h1>{car.id} {car.brand}</h1>)
            }
            {
                <PaginationComponent prev={casrsRespons.prev} next={casrsRespons.next} setQwerty={setQwerty} key={'1'}/>
            }
        </div>
    );
};

export default CarsComponent;