import {IPagepaginatedModel} from "./IPagepaginatedModel";
import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginated {
    total_items: number,
    total_pages: number,
    prev: IPagepaginatedModel | null,
    next: IPagepaginatedModel | null,
    items: ICarWithAuth[]
}