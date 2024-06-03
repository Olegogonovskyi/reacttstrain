import React, {FC, useEffect} from 'react';
import {carsService} from "../../services/cars.api.service";


const CarsComponent: FC = () => {


    useEffect(() => {
        carsService.getAllCars().then(value => console.log(value))
    }, []);


    return (
        <div>
            CarsComponent
        </div>
    );
};

export default CarsComponent;