import { Price } from "./interfaces/items"


export const TRANSLATION = {
    new: "Nuevo",
    used: "Usado"
}

export const getPriceText = (price: Price): string => {
    //should take from congig
    return `$${price.amount.toLocaleString('es-AR')}`
}