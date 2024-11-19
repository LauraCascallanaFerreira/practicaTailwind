import { useEffect } from "react"
import initGame from "./asteroidsGame/game"

export default function Ejer01(){
    //inicializar la funcion, no se puede inicializar con initGame() a secas
    useEffect(()=>{
        initGame()
    }, [])
    return <canvas id="miCanvas"/>
}