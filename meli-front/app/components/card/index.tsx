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
    return (
        <>
            <a className="card" href={`/${id}`}>
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