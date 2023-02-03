import { Request, Response } from "express";
import axios from "axios";
import { config } from "../config/config";
import { Price, Item, ItemResult } from "../interfaces/item";


//TODO: meter el mapeo dentro de un parser
//Revisar que pasa con la config
//Armar el endpoint para que funciene los breacrumbs

const DEFAULT_URL = "https://api.mercadolibre.com/"
const DEFAULT_AUTHOR = {
    name: "Hernan",
    lastName: "Vera Andino"
}
const DEFAULT_REGION = "MLA"
const DEFAULT_LIMIT = 4

class ItemService {

    apiUrl = config.meliApi.baseURL || DEFAULT_URL
    author = config.author || DEFAULT_AUTHOR
    region = config.meliApi.region || DEFAULT_REGION
    limit = config.meliApi.limit || DEFAULT_LIMIT

    api = axios.create({
        baseURL: this.apiUrl,
    })

    getItemById = async (request: Request, response: Response): Promise<Response> => {
        const { id } = request.params;
        try {
            const { data: itemData } = await this.api.get(`${this.apiUrl}/items/${id}`);
            const { data: itemDescriptionData } = await this.api.get(`${this.apiUrl}/items/${id}/description`);

            const [amount, decimals] = itemData.price.toString().split(".");

            const itemPrice: Price = {
                currency: itemData.currency_id,
                amount: parseInt(amount),
                decimals: parseInt(decimals),
            }
            const itemDetail: Item = {
                id: itemData.id,
                title: itemData.title,
                price: itemPrice,
                picture: itemData.thumbnail,
                condition: itemData.condition,
                free_shipping: itemData.free_shipping,
                sold_quantity: itemData.sold_quantity,
                description: itemDescriptionData.plain_text
            }
            const responseData: ItemResult = {
                author: this.author,
                item: itemDetail
            }
            return response.status(200).json(responseData);

        } catch (error) {
            return response.status(error.response.status).json({
                statusCode: error.response.status,
                message: `[ERROR] getItemByID with item: ${id} `,
                error: error.response.data
            });
        }
    }

    getItemsList = async (request: Request, response: Response): Promise<Response> => {
        const { q, limit } = request.query;
        try {

            if (!q)
                return response.status(404).json({
                    statusCode: 404,
                    message: `[ERROR]: ${q} is not a valid param `
                });

            const { data: searchData } = await this.api.get(`${this.apiUrl}/sites/${this.region}/search?q=${q}&limit=${limit || this.limit}`);

            const categories = searchData.filters.length
                ? searchData.filters[0]?.values[0].path_from_root.map((item: { name: any; }) => item.name)
                : []

            const items = searchData.results.length ?
                searchData.results.map((item: { id: string; title: string; price: Number; currency_id: string; thumbnail: string; condition: string; shipping: any; }) => {
                    const [amount, decimals] = item.price.toString().split(".");
                    return {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: parseInt(amount),
                            decimals: parseInt(decimals),
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping
                    }
                })
                : []


            const responseData = {
                author: this.author,
                categories: categories,
                items: items,
            }

            return response.status(200).json(responseData);

        } catch (error) {
            return response.status(error.response?.status || 500).json({
                statusCode: error.response?.status || 500,
                message: `[ERROR]: getItemByName with query: ${q} `,
                error: error.response?.data
            });
        }
    }

}

export default ItemService