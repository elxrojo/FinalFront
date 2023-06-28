import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contacto from './Components/Contacto'
import Detalle from './Components/Detalle'
import Favoritos from './Components/Favoritos'

function App() {
  return (
    <>


    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/contact'>CONTACTO</Link>
      <Link to='/fav'>GUARDADOS</Link>
    </nav>

    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacto/>}/>
        <Route path='/details/:id' element={<Detalle/>}/>
        <Route path='/fav' element={<Favoritos/>}/>
      </Routes>
    </div>


    </>
  )
}

export default App
