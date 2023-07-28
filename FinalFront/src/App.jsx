import './Styles/index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contacto from './Components/Contacto'
import Detalle from './Components/Detalle'
import Favoritos from './Components/Favoritos'
import { useEffect, useState } from 'react'
import { ThemeContext, themes } from './Contexts/ThemeContext'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [theme, setTheme] = useState({})
  
  function themeHandler() {
    console.log(Object.keys(theme));
    console.log(Object.keys(themes.dark));
    console.log(theme === themes.dark);


    if(theme.color1 === '#000000'){
      setTheme(themes.light)
      localStorage.setItem('theme',JSON.stringify(themes.light))
    } 
    if(theme.color1 === '#D9D9D9') {
      setTheme(themes.dark)
      localStorage.setItem('theme',JSON.stringify(themes.dark))
    }    
  }

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('theme'))
    console.log(savedTheme);
    if(savedTheme){
      console.log('Tengo un tema guardado');
      setTheme(savedTheme)
    }else{
      console.log('No tengo ningun tema guardado');
      setTheme(themes.light)
    }
  }, []);

  

  return (
    
    <ThemeContext.Provider value={{theme,themeHandler}}>
      <div style={{background:theme.color2, color:theme.colorLetra}}>
        <NavBar/>

        <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contacto/>}/>
            <Route path='/details/:id' element={<Detalle/>}/>
            <Route path='/fav' element={<Favoritos/>}/>
          </Routes>
        </div>

        <Footer/>
      </div>

    </ThemeContext.Provider>


    
  )
}

export default App
