import { Price } from "~/utils/interfaces/items"
import { getPriceText, TRANSLATION } from "~/utils/locale"

interface ItemContainerProps {
    title: string,
    description: string,
    image: string,
    condition: string,
    soldQuantity: string,
    price: Price
}

export default function ItemContainer({ title, description, image, condition, soldQuantity, price }: ItemContainerProps): JSX.Element {

    const subtitleText = `${TRANSLATION[condition]} | ${soldQuantity} vendidos`
    const decimalsText = price.decimals || "00"
    const priceText = getPriceText(price);

    return (
        <>
            <div className="item-section">
                <div className="item-section__col-1">
                    <div className="item-section__col-1__image-container">
                        <img src={image} alt={title}></img>
                    </div>
                    <div className="item-section__col-1__description-container">
                        <h2>Descripción del producto</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="item-section__col-2">
                    <div className="item-section__col-2__subtitle">
                        <span>{subtitleText}</span>
                    </div>
                    <h1>{title}</h1>
                    <div className="item-section__col-2__price">
                        <p className="item-section__col-2__price__amount">{priceText}</p>
                        <p className="item-section__col-2__price__decimals">{decimalsText}</p>
                    </div>
                    <div className="item-section__col-2__action-container">
                        <button>
                            <span>
                                Comprar ahora
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}