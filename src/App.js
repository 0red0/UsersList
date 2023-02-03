import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
   const [usersArr, setUsersArr] = useState([]);

   const addUserHandler = (a, b) => {
      setUsersArr((prevUser) => [
         ...prevUser,
         { name: a, age: b, id: Date.now() },
      ]);
   };

   return (
      <div>
         <AddUser onAddUser={addUserHandler} />
         <UsersList users={usersArr} />
      </div>
   );
}

export default App;
