import { Footer, Navbar, Search } from './components'


function App() {

  return (
    <>
      <Navbar logged={true} />
      <Search />
      <Footer />
    </>
  )
}

export default App
