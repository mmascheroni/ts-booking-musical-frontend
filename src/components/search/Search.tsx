import './search.css'

const Search = () => {
    return (
        <div className='container-search'>
            <h2>Busca intrumentos</h2>
            <form className='form-search'>
                <input type="text" placeholder='ej: Guitarra' />
                <button className='btn btn-search'>Buscar</button>
            </form>
        </div>
    )
}

export default Search