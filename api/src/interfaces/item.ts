export interface ItemResult {
    author : Object,    
    item : Item
}

export interface Currency {
    currency: String,
    amount: Number,
    decimals: Number,
}

export interface Item {
    id: String,
    title: String,
    price: Currency,
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number
    description: String
}