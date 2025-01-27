import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
// Components
import Navbar from './components/Navbar/Navbar'
import MainLayout from './components/MainLayout/MainLayout'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Prices from './components/Prices/Prices'
import Process from './components/Process/Process'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainLayout /> } />
          <Route path='*' element={<NotFound /> } />
          <Route path='/precios' element={<Prices /> } />
          <Route path='/proceso' element={<Process /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
