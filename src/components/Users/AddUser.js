import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = { username: enteredUsername, age: enteredAge };

    props.onSaveUserData(userData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" onChange={ageChangeHandler} value={enteredAge} />
        </div>
        <Button buttonText="Add User" />
      </form>
    </Card>
  );
};

export default AddUser;
