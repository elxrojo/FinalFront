import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import styles from "../Styles/ComponentStyles/NavBar.module.css";

export default function NavBar() {
    const {themeHandler, theme} = useContext(ThemeContext)
    const [modoOscuro, setModoOscuro]= useState(true)

    const iconBotonHandler = () => {
        if (theme.color1 === '#000000') setModoOscuro(true)
        if (theme.color1 === '#D9D9D9') setModoOscuro(false)
    }

    useEffect(() =>{
        iconBotonHandler()
    },[theme])

    return(
        <nav className={styles.nav} style={{background: theme.color1, color: theme.colorLetra}} >
            <div>
                <img width="64" height="64" src="https://img.icons8.com/cotton/64/tooth-enamel--v2.png" alt="tooth-enamel--v2"/>
            </div>

            <div className={styles.direcciones}>
                <Link to='/' style={{color: theme.colorLetra}}>HOME</Link>
                <Link to='/contact' style={{color: theme.colorLetra}}>CONTACT</Link>
                <Link to='/fav' style={{color: theme.colorLetra}}>FAVS</Link>
            </div>

            <div>
            <button onClick={()=>themeHandler()} style={{background: theme.colorLetra}}>
                {modoOscuro?
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="1.5rem" fill={theme.color1} className="bi bi-brightness-low-fill" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg> 
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="1.5rem" fill={theme.color1} className="bi bi-moon-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                </svg>
                }
            </button>
            </div>
        </nav>
    )
}