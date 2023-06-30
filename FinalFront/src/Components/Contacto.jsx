import { useContext, useEffect, useState } from "react"
import { toast } from 'sonner'
import styles from '../Styles/ComponentStyles/Contacto.module.css'
import { ThemeContext } from "../Contexts/ThemeContext";

export default function Contacto(){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [errores, setErrores] = useState([])
    const [validado, setValidado] = useState(false);

    const {theme} = useContext(ThemeContext)


    function nombreEstaBien() {
        setErrores(prevErrores => {
        if (nombre.length < 6) {
            return [...prevErrores, 'Nombre inválido. Debe tener al menos 6 letras'];
        }
            return prevErrores;
        });
    }

    function correoEstaBien(){
        setErrores(prevErrores => {
            if ((!regex.test(correo) || correo.length <= 0)) {
                return [...prevErrores, 'Correo inválido. Intente con uno válido'];
            }
            return prevErrores;
        });
    }

    function mostrarErrores(){
        setErrores([])
        correoEstaBien()
        nombreEstaBien()         
        setValidado(true);
    }

    useEffect(() => {
        errores.map((error) => {
            toast.error(error);
        });
    
        if (!errores.some((error) => error) && validado) {
            toast.success('Datos enviados correctamente');
        }
    }, [errores, validado]);

    return (
        <div className={styles.contenedor}>
            <form onSubmit={(e) => e.preventDefault()} noValidate className={styles.form} style={{background:theme.color1, color:theme.colorLetra}}>
                <h1>Contacta con nosotros!</h1>
                    <div className={styles.inputs}>
                        <div className={styles.input}>
                            <div className={styles.cajita}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='black' className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>
                            </div>
                            <input type="text"
                            value={nombre}
                            onChange={(e)=> setNombre(e.target.value)}
                            placeholder="Nombre"
                            />
                        </div>

                        <div className={styles.input}>
                            <div className={styles.cajita}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                            </div>
                            <input type="email"
                            value={correo}
                            onChange={(e)=> setCorreo(e.target.value)}
                            placeholder="Correo"
                            />
                        </div>
                </div>

                <button onClick={mostrarErrores}>Enviar datos</button>
            </form>
        </div>
    )
}
