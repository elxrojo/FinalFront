import { useEffect, useState } from "react"
import { toast } from 'sonner'

export default function Contacto(){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [errores, setErrores] = useState([])


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

    }

    useEffect(()=>{
        errores.map((error)=>{
            toast.error(error)
        })        
        if (errores.length === 0) {
            toast.success('Si funciona crack') 
        }

    },[errores])

    return (
        <form onSubmit={(e) => e.preventDefault()} noValidate>
            <label>Nombre</label>
            <input type="text"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            />

            <label>Email</label>
            <input type="email"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}
            />

            <button onClick={mostrarErrores}>Enviar datita</button>
        </form>
    )
}
