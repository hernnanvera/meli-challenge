import { getSiteConfig } from "~/utils/config/index.server"
import { Price } from "~/utils/interfaces/items"

interface CardContentProps {
    id: string
    title: string,
    price: Price,
    condition: string
}

const LOCALE_AR = {
    locale: "es-AR",
    currencySymbol: "$"
}

export default function CardContent({ id, title, price, condition }: CardContentProps): JSX.Element {
    const priceString = ` ${LOCALE_AR.currencySymbol}${price.amount.toLocaleString(LOCALE_AR.locale)}`
    return (
        <>
            <div className="card-content">
                <p className="card-content__price">{priceString}</p>
                <div className="card-content__title">
                    <h2>{title}</h2>
                </div>
                {/* <p className="card-content__condtion">{condition}</p> */}
            </div>
        </>
    )
}