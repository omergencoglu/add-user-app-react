import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const submitHandler = () => {};

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="text" />
          </div>
          <Button buttonText="Add User" />
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
