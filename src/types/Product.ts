import type {MainImageModel} from "./MainImageModel.ts";

export type Product = {
    listing_id: number,
    url: string,
    MainImage?: MainImageModel,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}