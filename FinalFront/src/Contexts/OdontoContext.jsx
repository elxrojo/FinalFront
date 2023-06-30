import { createContext, useEffect, useState } from "react";

export const OdontoContext = createContext()

export default function OdontoProvider(props){
    const [odontos, setOdontos] = useState([])
    const [favsOdontos, setFavsOdontos] = useState([])
    const [favsOdontosLS, setFavsOdontosLS] = useState(JSON.parse(localStorage.getItem('odontos')))


    async function fetching() {
        const odontosFetch = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        setOdontos(odontosFetch)
        console.log(odontosFetch);
    }

    useEffect(()=>{
        fetching()

        const data = localStorage.getItem('odontos');
        if (data) {
            setFavsOdontos(JSON.parse(data));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('odontos',JSON.stringify(favsOdontos))
        setFavsOdontosLS(favsOdontos)
    },[favsOdontos])



    function like(id){
        if(favsOdontos.some((odonto)=> odonto.id === id)){
            setFavsOdontos( prevOdontoFav => {
                return prevOdontoFav.filter((odonto)=> odonto.id !== id)})
        } else{
            const odontoEncontrao = odontos.find((odonto)=> odonto.id === id)
            setFavsOdontos( prevOdontoFav => {
                return [...prevOdontoFav, odontoEncontrao]
            })
        }
    }

    const value ={
        favsOdontosLS,
        odontos,
        like
    }

    return(
        <OdontoContext.Provider value={value}>
            {props.children}
        </OdontoContext.Provider>
    )

}

