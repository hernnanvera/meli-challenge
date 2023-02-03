export interface ItemResult {
    author : Object,    
    item : Item
}

export interface Price {
    currency: String,
    amount: Number,
    decimals: Number,
}

export interface Item {
    id: String,
    title: String,
    price: Price,
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number
    description: String
}