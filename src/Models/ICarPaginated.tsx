import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginated {
    total_items: number,
    total_pages: number,
    prev: string,
    next: string,
    items: ICarWithAuth []
}