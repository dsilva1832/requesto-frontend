
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landingpage from './Pages/Landingpage'
import Lend from './Pages/Lend'
import Request from './Pages/Request'
import Pagenotfound from './Pages/Pagenotfound'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/lend' element={<Lend/>}></Route>
        <Route path='/request' element={<Request/>}></Route>
        <Route path='/*' element={<Pagenotfound/>}></Route>

      </Routes>
    <Footer/>
    </>
  )
}

export default App
