import styles from "./Button.module.scss";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: ButtonType;
}

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
