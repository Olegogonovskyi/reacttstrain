import React, {FC} from 'react';
import {IPagepaginatedModel} from "../../models/IPagepaginatedModel";


interface IProps {
    setQwerty: any,
    next: IPagepaginatedModel | null,
    prev: IPagepaginatedModel | null
}

const PaginationComponent: FC<IProps> = ({setQwerty, prev, next}) => {
    const setterPage = (page: string) => {
        switch (page) {
            case 'prev':
                setQwerty(prev)
                break
            case 'next':
                setQwerty(next)
                break
        }
    }

    return (
        <div>
            <button disabled={!prev} onClick={() => {
                setterPage('prev')
            }}>prev
            </button>
            <button disabled={!next} onClick={() => {
                setterPage('next')
            }}>next
            </button>

        </div>
    );
};

export default PaginationComponent;