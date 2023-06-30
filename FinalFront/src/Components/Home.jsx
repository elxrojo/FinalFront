import { useContext } from "react";
import CardList from "./CardList.jsx";
import { OdontoContext } from "../Contexts/OdontoContext.jsx";

export default function Home(){
    const {odontos} = useContext(OdontoContext)
    return(<CardList odontos={odontos} />)
}