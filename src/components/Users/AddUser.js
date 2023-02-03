import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
   const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = React.useState("");
   const [error, setError] = useState();

   const addUserHandler = (e) => {
      e.preventDefault();
      if (
         enteredUsername.trim().length === 0 ||
         enteredAge.trim().length === 0
      ) {
         setError({
            title: "Invalid input",
            message: "Please enter valid username and age (no empty field).",
         });
         return;
      }
      if (+enteredAge < 1) {
         setError({
            title: "Invalid input",
            message: "Please enter valid age (no age>0).",
         });
         return;
      }

      props.onAddUser(enteredUsername, enteredAge);
      setEnteredAge("");
      setEnteredUsername("");
   };

   const usernameChangeHandler = (e) => {
      setEnteredUsername(e.target.value);
   };

   const ageChangeHandler = (e) => {
      setEnteredAge(e.target.value);
   };

   const errorHandler = () => {
      setError(null);
   };

   return (
      <div>
         {error && (
            <ErrorModal
               title={error.title}
               msg={error.message}
               onConfirm={errorHandler}
            ></ErrorModal>
         )}
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
      </div>
   );
};

export default AddUser;
