import React, {FC, useEffect, useState} from 'react';
import {ICarWithAuth} from "../../Models/ICarWithAuth";
import {CarsService} from "../../services/carsService";
import CarComponent from "../CarComponent/CarComponent";

const CarsComponnt: FC = () => {
    const [cars, setCars] = useState<ICarWithAuth []>([])
    useEffect(() => {
        CarsService.getAllCars().then(value => {
            if (value) setCars(value.items)
        })
    }, []);
    return (
        <div>
            {
                cars && cars.map((car, index) => <CarComponent car={car} key={index}/> )
            }
        </div>
    );
};

export default CarsComponnt;