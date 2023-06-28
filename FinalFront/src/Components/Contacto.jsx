import { useState } from "react"
import Aviso from "./Aviso"

export default function Contacto(){
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')

    const [ERRnombre, setERRnombre] = useState(false)
    const [ERRcorreo, setERRcorreo] = useState(false)
    const [todoJoia, setTodoJoia] = useState(false)

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function ceckealoWei() {        

        if(nombre.length < 5){
            setERRnombre(true)
        }else{
            setERRnombre(false)
        }
        
        if(!regex.test(correo)){
            setERRcorreo(true)
        }else{
            setERRcorreo(false)
        }
        if((ERRcorreo && ERRnombre)){
            setTodoJoia(true)

            setTimeout(() => {
                setCorreo('')
                setNombre('')
                setTodoJoia(false)
            }, 5000);
        }
// ! Corregir error de renderizado del to joia 
    }


    return (
        <form onSubmit={(e) => e.preventDefault()} noValidate>
            <label>Nombre</label>
            <input type="text"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value )}
            />

            <label>Email</label>
            <input type="email"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value) }
            />

            <button onClick={()=>ceckealoWei()}>Enviar datita</button>

            {ERRnombre? <Aviso msg={'❌ Nombre inválido. Debe tener al menos 6 letras'} isSucces={false}/> : undefined}
            {ERRcorreo? <Aviso msg={'❌ Correo inválido. Intente con uno válido :v'} isSucces={false}/> : undefined}
            {todoJoia? <Aviso msg={'✔️ Correo enviado correctamente!'} isSucces={false}/> : undefined}

        </form>
    )
}
