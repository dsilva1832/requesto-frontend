
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landingpage from './Pages/Landingpage'
import Request from './Pages/Request'
import Pagenotfound from './Pages/Pagenotfound'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Provide from './Pages/Provide'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/provide' element={<Provide/>}></Route>
        <Route path='/request' element={<Request/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/*' element={<Pagenotfound/>}></Route>

      </Routes>
    <Footer/>
    </>
  )
}

export default App
