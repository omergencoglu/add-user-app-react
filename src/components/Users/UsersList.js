import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.items.length > 0) {
    return (
      <Card className={styles.users}>
        <ul>
          {props.items.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  return <Card />;
};

export default UsersList;
