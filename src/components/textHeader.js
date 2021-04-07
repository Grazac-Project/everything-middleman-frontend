const TextHeader = (props) => {
    return (
        <h1 className="bg-text" style={{marginBottom: "1rem"}}>{ props.children}</h1>
    )
}

export default TextHeader