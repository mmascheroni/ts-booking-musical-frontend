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
]

const CardCategories = () => {


    return (
        <section className='section-category'>
            <h2>Categorias</h2>
            <div className="container-categories--card">
                { categories.map(
                        category => (
                            <CardCategory key={category.id} category={category.name} />
                        )
                    )   
                }
            </div>
        </section>
    )
}

export default CardCategories