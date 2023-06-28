import { createContext, useEffect, useState } from "react";

export const OdontoContext = createContext()

export default function OdontoProvider(props){
    const [odontos, setOdontos] = useState([])
    const [favsOdontos, setFavsOdontos] = useState([])

    async function fetching() {
        const odontosFetch = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        setOdontos(odontosFetch)
        console.log(odontosFetch);
    }

    useEffect(()=>{
        fetching()
    },[])


    function like(id){
        if(favsOdontos.includes((odonto)=> odonto.id === id)){
/* ------------------ si ya esta en favsOdontos, lo elimina  >:D/----------------- */
            setFavsOdontos(favsOdontos.filter((odonto)=> odonto.id !== id))
        } else{
/* ---------------- Si no esta en favsOdontos, lo busca y lo agrega :D/ ---------------- */
            const odontoEncontrao = odontos.find((odonto)=> odonto.id === id)
            setFavsOdontos([...favsOdontos, odontoEncontrao])
        }
    }

    const value ={
        odontos,
        favsOdontos,
        like
    }

    return(
        <OdontoContext.Provider value={value}>
            {props.children}
        </OdontoContext.Provider>
    )

}