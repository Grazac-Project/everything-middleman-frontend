const Button = (props) => {
    return (
        <button className={["button", props.color, props.extraStyle].join(" ")}>{ props.children}</button>
    )
}

export default Button