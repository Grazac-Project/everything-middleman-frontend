const Input = (props) => {
    let inputClasses = ["form-input"];
    if (
      (props.blur && !props.isValid) 
    ) {
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
          //   className={}
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
          cols="7"
          rows="4"
          className={inputClasses.join(" ")}
          // className="form-input form-textarea"
          required
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          onBlur={props.onblur}
          id={props.label}
          value={props.value}
          onChange={props.onchange}
          className="form-input"
        >
          {props.config.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
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
      {/* <span
        style={{
          color: "red",
          display: "inline-block",
          textAlign: "start",
          fontSize: "12px",
          width: "100%",
        }}
      >
        {(!props.isValid && props.blur) ||
        (!props.isValid && !props.formIsValid && props.clicked)
          ? props.message
          : ""}
      </span> */}
    </div>
  );
};

export default Input;
