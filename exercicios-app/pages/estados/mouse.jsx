import { useState } from "react"

export default function mouse() {

    const [EixoX, setEixoX] = useState(0)
    const [EixoY, setEixoY] = useState(0)


    const styled = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#222",
        color: "#fff",
        fontSize: "32px",
        height: "100vh"
    }

    function quandoMover(event) {
        setEixoX(event.clientX)
        setEixoY(event.clientY)
    }

    return (
        <div style={styled} onMouseMove={quandoMover}>
            <span>Eixo X: {EixoX}</span>
            <span>Eixo Y: {EixoY}</span>
       </div>
    )
} 