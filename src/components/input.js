const Input = (props) => {
  let inputClasses = ["form-input"];
  if (props.blur && !props.isValid) {
    inputClasses.push("form-invalid");
  } else if (props.isValid && props.blur) {
    inputClasses.push("form-valid");
  }
  let inputElement;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onBlur={props.onblur}
          id={props.label}
          className={inputClasses.join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
          disabled={props.disabled}
          required
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onBlur={props.onblur}
          id={props.label}
          {...props.config}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
          rows="4"
          className={inputClasses.join(" ")}
          required
          style={{
            maxWidth: "100%",
            maxHeight: "135px",
            minHeight: "135px",
            minWidth: "100%",
          }}
        ></textarea>
      );
      break;
    default:
      inputElement = (
        <input
          onBlur={props.onblur}
          id={props.label}
          {...props.config}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
          className="form-input"
          required
        />
      );
      break;
  }

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.label}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;
