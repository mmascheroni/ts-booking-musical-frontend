import CardProduct from './CardProduct'
import './cardProduct.css'

const products = [
    {
        id: 1,
        name: 'Guitarra Clasica'
    },
    {
        id: 2,
        name: 'Bajo'
    },
    {
        id: 3,
        name: 'Luces Artificuales'
    },
    {
        id: 4,
        name: 'Trompeta'
    },
    {
        id: 5,
        name: 'Saxofon'
    },
    {
        id: 6,
        name: 'Tambor'
    },
]

const CardProducts = () => {
    return (
        <>
            <h2>Productos Aleatorios</h2>
            <div className='container-products--card'>
                {
                    products.map(
                        product => (
                            <CardProduct key={ product.id } product={product.name} />
                        )
                    )
                }
            </div>
        </>
    )
}

export default CardProducts