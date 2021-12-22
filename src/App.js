import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import Wrapper from "./components/Helpers/Wrapper";

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
    <Wrapper>
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UsersList items={users} />
    </Wrapper>
  );
}

export default App;
