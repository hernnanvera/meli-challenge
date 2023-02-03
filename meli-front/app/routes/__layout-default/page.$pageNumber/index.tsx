import { LoaderFunction } from '@remix-run/node';
import IndexHome, { dynamicLinks as dynamicLinksHome, loader as LoaderHome } from '~/routes/__layout-default/index/index';

export const loader: LoaderFunction = LoaderHome;

const Index = IndexHome;

export default Index;

export const handle = {
    dynamicLinks: dynamicLinksHome
}