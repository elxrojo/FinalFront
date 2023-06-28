import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detalle(){
    const [odontoDetails, setOdontoDetails] = useState('')
    const {id} = useParams()

    async function fetching(){
        const odontoObtenido = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
        console.log(odontoObtenido);
        setOdontoDetails(odontoObtenido)
    }

    useEffect(() => {
        fetching()
    },[])

    return(
        <div>
            <h1>{odontoDetails.name}</h1>
            <h3>{odontoDetails.website}</h3>
            <h3>{odontoDetails.email}</h3>
            <h3>{odontoDetails.phone}</h3>
            {/* <div>
                <p>Trabaja en:</p>
                <p>{odontoDetails.company.name}</p>
            </div>
            <div>
                <p>Ciudad:</p>
                <p>{odontoDetails.address.city}</p>
            </div> */}

        </div>
    )
}

// ! Resolver problema, no se puede renderizar el objeto de un objeto