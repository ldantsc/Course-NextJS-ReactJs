export default function Title(props) {

    if (props.description === 'Hello') {
        return (
            <>
                <h1>{props.description} Word!</h1>
            </>
        )
    } else
        return (
            <>
                <h1>{props.description}</h1>
            </>
        )
}