import CardCategory from './CardCategory'
import './cardCategory.css'

const categories = [
    {
        id: 1,
        name: 'Viento'
    },
    {
        id: 2,
        name: 'Guitarras Clásicas'
    },
    {
        id: 3,
        name: 'Guitarras Eléctricas'
    },
    {
        id: 4,
        name: 'Guitarras Acústicas'
    },
    {
        id: 5,
        name: 'Bajos'
    },
    {
        id: 6,
        name: 'Percusión'
    },
    {
        id: 7,
        name: 'Parlantes'
    },
]

const CardCategories = () => {


    return (
        <>
            <h2>Categorias</h2>
            <div className="container-categories--card">
                { categories.map(
                        category => (
                            <CardCategory key={category.id} category={category.name} />
                        )
                    )   
                }
            </div>
        </>
    )
}

export default CardCategories