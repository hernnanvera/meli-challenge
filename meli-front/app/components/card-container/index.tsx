import Card from "../card";

interface CardContainerProps {
    itemsCards: any[],
}

export default function CardContainer({ itemsCards }: CardContainerProps) {
    return (
        <>
            <ul className="card-section">
                {
                    itemsCards?.map((item, index) => (
                        <li key={index}>
                            <Card
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.picture}
                                condition={item.condition}
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}