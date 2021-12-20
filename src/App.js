import React, { useState } from "react";

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
    <div>
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UsersList items={users} />
    </div>
  );
}

export default App;
