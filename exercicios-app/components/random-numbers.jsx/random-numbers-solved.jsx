export default function NumerosMega(props) {
    const style = {display:"flex", alignItems:"center", justifyContent:"center", backgroundColor: "#42c898", color: "#FFFFFF", borderRadius: "100px", width: "50px", height: "50px", fontSize:"2rem", fontWeight: "bold"}

    return(
        <div style={style}>
            <p>{props.numero}</p>
        </div>
    )
}