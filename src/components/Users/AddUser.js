import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
   const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = React.useState("");
   const [users, setUsers] = useState([]);

   const addUserHandler = (e) => {
      e.preventDefault();
      if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
         return;
      if (+enteredAge < 1) return;
      setUsers((prevUser) => [
         { name: enteredUsername, age: enteredAge, id: Date.now() },
         ...prevUser,
      ]);
      props.onAddUser(users);
      setEnteredAge("");
      setEnteredUsername("");
   };

   const usernameChangeHandler = (e) => {
      setEnteredUsername(e.target.value);
   };

   const ageChangeHandler = (e) => {
      setEnteredAge(e.target.value);
   };

   return (
      <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
               value={enteredUsername}
               id="username"
               type="text"
               onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
               value={enteredAge}
               id="age"
               type="number"
               onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default AddUser;
