import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
   const nameInputRef = useRef();
   const ageInputRef = useRef();

   // const [enteredUsername, setEnteredUsername] = useState("");
   // const [enteredAge, setEnteredAge] = React.useState("");
   const [error, setError] = useState();

   const addUserHandler = (event) => {
      event.preventDefault();

      const refName = nameInputRef.current.value;
      const refAge = ageInputRef.current.value;

      if (refName.trim().length === 0 || refAge.trim().length === 0) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values).",
         });
         return;
      }
      if (+refAge < 1) {
         setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0).",
         });
         return;
      }
      props.onAddUser(refName, refAge);
      // setEnteredUsername("");
      // setEnteredAge("");
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
   };

   // const usernameChangeHandler = (e) => {
   //    setEnteredUsername(e.target.value);
   // };

   // const ageChangeHandler = (e) => {
   //    setEnteredAge(e.target.value);
   // };

   const errorHandler = () => {
      setError(null);
   };

   return (
      <>
         {error && (
            <ErrorModal
               title={error.title}
               message={error.message}
               onConfirm={errorHandler}
            ></ErrorModal>
         )}
         <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
               <label htmlFor="username">Username</label>
               <input
                  // value={enteredUsername}
                  id="username"
                  type="text"
                  // onChange={usernameChangeHandler}
                  ref={nameInputRef}
               />
               <label htmlFor="age">Age (Years)</label>
               <input
                  // value={enteredAge}
                  id="age"
                  type="number"
                  // onChange={ageChangeHandler}
                  ref={ageInputRef}
               />
               <Button type="submit">Add User</Button>
            </form>
         </Card>
      </>
   );
};

export default AddUser;
