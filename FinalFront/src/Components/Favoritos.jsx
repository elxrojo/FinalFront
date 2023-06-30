import CardList from "./CardList"

export default function Favoritos(){
    const odontosLikeados = JSON.parse(localStorage.getItem('odontos'))

    return(<CardList odontos={odontosLikeados}/>)
}