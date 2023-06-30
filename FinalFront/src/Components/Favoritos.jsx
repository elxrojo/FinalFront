import { OdontoContext } from "../Contexts/OdontoContext"
import CardList from "./CardList"
import { useContext} from "react"

export default function Favoritos(){
    const {favsOdontosLS} = useContext(OdontoContext)

    return( 
        <>
            {favsOdontosLS.length > 0 ?
            <CardList odontos={favsOdontosLS}/>
            :
            <h1>Aun no has agregado a tus odontologos favoritos!</h1>
            }
        </>
    )
}