const Title = (props) => {
  return <h4 className={["title", props.extraStyle].join(" ")}>{props.children}</h4>;
};

export default Title;
