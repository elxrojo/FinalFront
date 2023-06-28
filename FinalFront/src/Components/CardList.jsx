import { useContext } from "react"
import { OdontoContext } from "../Contexts/OdontoContext"
import Card from "./Card"

export default function CardList(){

    const {odontos, like} = useContext(OdontoContext)

    return (
        odontos.map((odonto)=> {
            return( 
                <Card userDetail={odonto} likeFunct={like} id={odonto.id} key={odonto.id}/>
            )
        })
    )
}