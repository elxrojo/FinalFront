import { OdontoContext } from "../Contexts/OdontoContext"
import CardList from "./CardList"
import { useContext} from "react"
import styles from "../Styles/ComponentStyles/Favs.module.css"

export default function Favoritos(){
    const {favsOdontosLS} = useContext(OdontoContext)

    return( 
        <div className={styles.favs}>
            {favsOdontosLS.length > 0 ?
            <CardList odontos={favsOdontosLS}/>
            :
            <h1>Aun no has agregado a tus odontologos favoritos!</h1>
            }
        </div>
    )
}