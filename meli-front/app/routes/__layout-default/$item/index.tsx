import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "react-router"
import ItemContainer from "~/components/item-container";
import { ItemsAPI } from "~/loaders/items.server";

export const meta: MetaFunction = ({ data }) => {
    // As it is a challenge exercise, we defined robots noindex, nofollow
    const item = data?.item;
    const metaBody = {
        title: item?.title,
        description: item?.description,
        robots: 'noindex, nofollow',
    };
    return metaBody;
};


export const loader: LoaderFunction = async ({ params, request }) => {
    const promises = [params?.item ? ItemsAPI.loadItem(params?.item) : []];
    const [data] = await Promise.all(promises);
    const canonicalUrl = `/${params?.item}`;

    return json(
        {
            item: data.item,
            canonicalUrl
        }
    )
}

interface LoaderData {
    item: any
    canonicalUrl: string
}

export default function Item(): JSX.Element {
    const { item } = useLoaderData() as LoaderData;
    return (
        <>
            <div className="item-container">
                {
                    item &&
                    <ItemContainer
                        title={item?.title}
                        description={item?.description}
                        image={item.picture}
                        condition={item.condition}
                        soldQuantity={item.sold_quantity}
                        price={item.price} />
                }
            </div>
        </>
    )
}

export function dynamicLinks({ data }: { data: any }) {
    const links = [];
    if (data?.canonicalUrl) links.push({ href: data.canonicalUrl, rel: "canonical" });
    return links;
}

export const handle = {
    dynamicLinks,
}