const Text = (props) => {
  return (
    <p className={["sm-text", props.color, props.extraStyle].join(" ")}>
      {props.children}
    </p>
  );
};

export default Text;
