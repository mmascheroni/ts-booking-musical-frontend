
const CardCategory = ({ category = "Viento"}) => {
    return (
        <div className='card-category'>
            <img src="" alt={ category } />
            <h3>{category}</h3>
        </div>
    )
}

export default CardCategory