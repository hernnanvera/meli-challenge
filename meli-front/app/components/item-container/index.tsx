interface ItemContainerProps {
    title: string,
    description: string,
    image: string,
    content: string,
}

export default function ItemContainer({ title, description, image, content }: ItemContainerProps): JSX.Element {
    const showitem = !!title;
    return (
        <>
            <div className="item-section">
                {
                    showitem ?
                        <>
                            <h1>{title}</h1>
                            <h2>{description}</h2>
                            <div className="item-section__border-line"></div>
                            <img src={image} alt={title}></img>
                            <p className="item-section__content">{content}</p>
                        </> :
                        <>
                            <p className="item-section__not-found">No se ha encontrado el artículo solicitado</p>
                        </>
                }
            </div>

        </>
    )
}