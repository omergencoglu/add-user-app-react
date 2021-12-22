import Button from "./Button";
import Card from "./Card";

import Wrapper from "../Helpers/Wrapper";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.header}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.content}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
