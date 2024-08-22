import './navbar.css'

const Navbar = ({ logged = false }) => {
    return (
        <header>
            <div className='container-logo'>
                <img src="../../public/assets/LogoSinfonia.png" alt="Logo Sinfonia" />
            </div>
            

            {
                logged ?
                    <nav className={logged && 'nav-logged'}>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Admin</li>
                        </ul>
                    </nav>

                    :

                    <nav>
                        <ul>
                            <li><button className='btn'>Crear cuenta</button></li>
                            <li><button className='btn'>Iniciar Sesión</button></li>
                        </ul>
                    </nav>
            }
        </header>
    )
}

export default Navbar