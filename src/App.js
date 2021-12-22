import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState("");

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  return (
    <Fragment>
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UsersList items={users} />
    </Fragment>
  );
}

export default App;
