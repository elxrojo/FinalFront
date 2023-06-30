import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import styles from "../Styles/ComponentStyles/Card.module.css";

export default function Card({userDetail,likeFunct,id}){
    const {theme} = useContext(ThemeContext)
    const odontosLikeados = JSON.parse(localStorage.getItem('odontos')).some((odonto)=> odonto.id === id)

    // useEffect(()=>{
    //     odontosLikeados
    // },[])

    return (
        <div className={styles.card} style={{background: theme.color1, color: theme.colorLetra}}>
            <Link to={`/details/${id}`} style={{color: theme.colorLetra}}>
                <div className={styles.fondoCard}></div>
                <img src="./src/asset/user.png" alt="imagen usuario" />
                <div className={styles.texto}>
                    <h2>{userDetail.name}</h2>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme.colorLetra} className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        {userDetail.email}
                    </h3>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme.colorLetra} className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                        </svg>  
                        {userDetail.company.name}
                    </p>
                </div>
            </Link>
                <button  style={{background:theme.color2, color: theme.colorLetra}} onClick={()=>{
                    likeFunct(id)
                }}>{odontosLikeados? 'Quitar' : 'Guardar'}</button>
        </div>
    )
}