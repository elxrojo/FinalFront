import './Styles/index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contacto from './Components/Contacto'
import Detalle from './Components/Detalle'
import Favoritos from './Components/Favoritos'
import { useState } from 'react'
import { ThemeContext, themes } from './Contexts/ThemeContext'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [theme, setTheme] = useState(themes.light)
  
  function themeHandler() {
    if(theme === themes.dark) setTheme(themes.light)
    if(theme === themes.light) setTheme(themes.dark)
  }
  
  /* -------------------------------------------------------------------------- */
  /*     La funcion de  guardar el tema en local storage fallo exitosamente!    */
  /* -------------------------------------------------------------------------- */

  //   useEffect(() => {
  //     const storedTheme = JSON.parse(localStorage.getItem('theme'));
  
  //     console.log(Object.keys(theme).length === 0 && Object.keys(storedTheme).length === 0);
  
  //     if (storedTheme) {
  //       setTheme(storedTheme);
  //     } else if (Object.keys(theme).length === 0 && Object.keys(storedTheme).length === 0){
  //       setTheme(themes.light);
  //     }
  //   }, []);

  // useEffect(() => {
  //   console.log("asd");
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);

  

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
