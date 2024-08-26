import { CardCategories, Footer, Navbar, Search } from './components'


function App() {

  return (
    <>
      <Navbar logged={true} />
      <Search />
      <CardCategories />
      <Footer />
    </>
  )
}

export default App
