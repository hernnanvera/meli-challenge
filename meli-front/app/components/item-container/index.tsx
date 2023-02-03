import { Price } from "~/utils/interfaces/items"

interface ItemContainerProps {
    title: string,
    description: string,
    image: string,
    condition: string,
    soldQuantity: string,
    price: Price
}

const TRANSLATION = {
    new : "Nuevo"
}

export default function ItemContainer({ title, description, image, condition, soldQuantity, price }: ItemContainerProps): JSX.Element {
    
    const subtitleText = `${TRANSLATION[condition]} | ${soldQuantity} vendidos`
    
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
                    <p>{price?.amount}</p>
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