import { LoaderFunction } from "react-router";
import { json, MetaFunction } from "@remix-run/node";
import { getSiteConfig } from "~/utils/config/index.server";

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
  const canonicalUrl = getSiteConfig('canonicalBaseUrl');
  const title = getSiteConfig('title')
  return json(
    {
      canonicalUrl,
      title,
    }
  )
}

export default function Index(): JSX.Element {
  return (
    <>
    </>
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