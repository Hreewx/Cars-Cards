import { BounceLoader } from "react-spinners";
import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <BounceLoader size={80} speedMultiplier={1.5} color="#34d399" />
    </div>
  );
}

export default Spinner;
