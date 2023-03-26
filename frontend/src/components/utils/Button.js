import Styles from "./Button.module.css";

export default function Button({ children, onClick, type, disabled }) {
  return (
    <button
      className={`${Styles.button} ${Styles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
