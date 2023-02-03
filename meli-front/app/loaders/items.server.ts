import { getDataRequest } from "~/actions/fetch.server";
import { getSiteConfig } from "~/utils/config/index.server";

export class ItemsAPI {
    static meliApiURL = getSiteConfig('meliApiURL')

    static async loadItemsList(searchParam: string | null) {
        const urlSearchParams = new URLSearchParams();
        if (searchParam) urlSearchParams.append('q', searchParam)
        const { data } = await ItemsAPI.getItemsList(urlSearchParams);
        return data;
    }

    static async loadItem(itemId: string) {
        console.log('urk', `${this.meliApiURL}/items/${itemId}`);
        const { data } = await ItemsAPI.getItem(itemId);
        return data;
    }

    private static getItemsList(params: URLSearchParams) {
        return getDataRequest(`${this.meliApiURL}/items?${params.toString()}`);
    }

    private static getItem(itemId: string) {
        return getDataRequest(`${this.meliApiURL}/items/${itemId}`);
    }
}