import { Link } from "react-router-dom";

export default function Card({userDetail,likeFunct,id}){
    return (
        <Link to={`details/${id}`}>
            <img src="./src/asset/user.png" alt="imagen usuario" />
            <h2>{userDetail.name}</h2>
            <h3>{userDetail.email}</h3>
            <p>{userDetail.company.name}</p>
            <button onClick={()=>likeFunct(id)}>Guardar</button>
        </Link>
    )
}