import './cardProduct.css'

const CardProduct = ({ product = "Guitarra" }) => {
    return (
        <div className="card-product">
            <img src="data:image/jpeg;base64,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" alt={ product } />
            <h3>{ product }</h3>
        </div>
    )
}

export default CardProduct