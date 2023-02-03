import { Request, Response } from "express";
import ItemService from "../services/item";


class ItemController {
    private readonly itemService = new ItemService();

    getItemById = async (request: Request, response: Response): Promise<Response> => {
        return await this.itemService.getItemById(request, response)
    }

    getItemsList = async (request: Request, response: Response): Promise<Response> => {
        return await this.itemService.getItemsList(request, response)
    }
}

export default ItemController