const ButtonComponent = props => (
  <button
    style={{
      backgroundColor: props.bgColor,
      fontSize: props.fs + "rem",
      borderRadius: props.radius + "px",
      border: props.border,
      color: props.color,
      padding: "20px",
      fontWeight: "bolder"
    }}
  >
    {props.text}
  </button>
);

export default ButtonComponent;
