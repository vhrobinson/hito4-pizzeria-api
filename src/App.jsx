import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './pages/components/Pizza'
//import Home from './pages/Home'
//import Cart from './pages/components/Cart'
//import Home from './pages/Home'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
         <div className='flex-grow'>
        {/*}  <Home />*/}
        <Pizza/>
        </div>  
        {/*<Cart/>*/}
        <Footer />
      </div>
    </>
  )
}
export default App
