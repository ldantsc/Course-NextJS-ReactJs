
export default function Titulo(props) {
    
    console.log(props)
    
       return props.tiny ? (
        <>
        <p>{props.mainText}</p>
        <p>{props.description}</p>
        </>
      ) : (
            <>
            <h1>{props.mainText}</h1>
            <h2>{props.description}</h2>
            </>
       )

    }