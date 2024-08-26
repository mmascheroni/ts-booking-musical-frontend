import { Footer, Navbar } from './components'
import { HomePage } from './sinfonia/pages'


function App() {

  return (
    <>
      <Navbar logged={true} />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
