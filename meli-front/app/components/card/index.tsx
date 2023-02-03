import { getArticleID } from "~/utils/article";
import { Price } from "~/utils/interfaces/items";
import CardContent from "./components/card-content";

interface CardProps {
    id: string
    title: string,
    price: Price,
    imageUrl: string,
    condition: string
}

export default function Card({ id, title, price, imageUrl, condition }: CardProps): JSX.Element {
    const articleID = getArticleID(title) || undefined;
    return (
        <>
            <a className="card" href={`/${articleID}`}>
                <div className="card__image-wrapper">
                    <img src={imageUrl || "/images/default-image.png"} alt={title}></img>
                </div>
                <CardContent
                    id={id}
                    title={title}
                    price={price}
                    condition={condition}
                />
            </a>
        </>
    )
}