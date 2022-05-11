import "./button.css";

const Button = ({ text, marginTop = 0, onClick, type = "button" }) => (
  <button
    onClick={onClick}
    style={{ marginTop: `${marginTop}px` }}
    className="button"
    type={type}
  >
    {text}
  </button>
);

export default Button;
