import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
   const [usersArr, setUsersArr] = useState([]);

   const addUserHandler = (arr) => {
      setUsersArr(arr);
   };

   return (
      <div>
         <AddUser onAddUser={addUserHandler} />
         <UsersList users={usersArr} />
      </div>
   );
}

export default App;
