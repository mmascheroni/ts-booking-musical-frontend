import { CardCategories, CardProducts, Footer, Navbar, Search } from './components'


function App() {

  return (
    <>
      <Navbar logged={true} />
      <Search />
      <CardCategories />
      <CardProducts />
      <Footer />
    </>
  )
}

export default App
