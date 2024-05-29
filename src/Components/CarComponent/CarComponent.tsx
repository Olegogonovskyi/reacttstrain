import React, {FC} from 'react';
import {ICarWithAuth} from "../../Models/ICarWithAuth";

const CarComponent: FC<{car: ICarWithAuth}> = ({car}) => {
    const {id, brand, price} = car
    return (
        <div>
            <h1>{id}: {brand} - {price}</h1>
        </div>
    );
};

export default CarComponent;