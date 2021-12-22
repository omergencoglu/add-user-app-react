import React, { Fragment } from "react";

import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ErrorModal;
