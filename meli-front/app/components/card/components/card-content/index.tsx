import { Price } from "~/utils/interfaces/items"
import { getPriceText } from "~/utils/locale"

interface CardContentProps {
    title: string,
    price: Price,
    condition: string
}

export default function CardContent({ title, price }: CardContentProps): JSX.Element {
    const priceText = getPriceText(price);
    return (
        <>
            <div className="card-content">
                <p className="card-content__price">{priceText}</p>
                <div className="card-content__title">
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    )
}