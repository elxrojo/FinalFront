export default function Aviso({msg, isSucces}){
    let tipo
    isSucces? tipo='error' : tipo='success'

    return (<div className={tipo}>{msg}</div>)
}