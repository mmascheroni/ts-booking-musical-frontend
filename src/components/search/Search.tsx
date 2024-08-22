import './search.css'

const Search = () => {
    return (
        <div className='container-search'>
            <h3>Busca intrumentos</h3>
            <form className='form-search'>
                <input type="text" placeholder='ej: Guitarra' />
                <button className='btn btn-search'>Buscar</button>
            </form>
        </div>
    )
}

export default Search