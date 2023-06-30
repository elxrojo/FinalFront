import { useContext } from "react"
import { OdontoContext } from "../Contexts/OdontoContext"
import Card from "./Card"
import style from "../Styles/ComponentStyles/ListCard.module.css"

export default function CardList({odontos}){

    const {like} = useContext(OdontoContext)

    return (
        <div className={style.CardList}>
            {odontos.map((odonto)=> {
                return( 
                    <Card userDetail={odonto} likeFunct={like} id={odonto.id} key={odonto.id}/>
                )
            })}
        </div>
    )
}