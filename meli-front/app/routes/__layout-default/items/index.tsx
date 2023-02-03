import { LoaderFunction } from "react-router";
import { useLoaderData } from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/node";
import CardContainer from "~/components/card-container";
import { getSiteConfig } from "~/utils/config/index.server";
import { ItemsAPI } from "~/loaders/items.server";

export const meta: MetaFunction = ({ data }) => {
  // As it is a challenge exercise, we defined robots noindex, nofollow
  const metaBody = {
    title: `${data.title} | Meli Challenge`,
    description: '',
    robots: 'noindex, nofollow',
  };
  return metaBody;
};

export const loader: LoaderFunction = async ({ request,
  params }) => {

  const url = new URL(request.url);
  const searchParam = url.searchParams.get('search');
  const promises = [ItemsAPI.loadItemsList(searchParam)];
  const [data] = await Promise.all(promises);
  const canonicalUrl = getSiteConfig('canonicalBaseUrl');
  const title = getSiteConfig('title')

  return json(
    {
      items: data?.items,
      canonicalUrl,
      title,
    }
  )
}

interface LoaderData {
  items: any
  canonicalUrl: string,
  title: string
}

export default function Items(): JSX.Element {
  const { items, title } = useLoaderData() as LoaderData;
  const showTitle = true;

  return (
    <div className="items-container">
      {showTitle && <h1>{title}</h1>}
      <CardContainer itemsCards={items} />
    </div>
  );
}

export function dynamicLinks({ data }: { data: any }) {
  const links = [];
  if (data?.canonicalUrl) links.push({ href: data.canonicalUrl, rel: "canonical" });
  return links;
}

export const handle = {
  dynamicLinks,
}