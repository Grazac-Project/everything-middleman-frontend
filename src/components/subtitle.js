const Subtitle = (props) => {
  return <h3 className={["subtitle", props.extraStyle, props.size].join(" ")}>{props.children}</h3>;
};

export default Subtitle;
