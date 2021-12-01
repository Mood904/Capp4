import React from 'react'
import { useState, useEffect } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, addDoc} from "firebase/firestore";

const Form1 = () => {

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newStore, setNewStore] = useState("")
    const [newColor, setNewColor]=useState("")
    const [newHobbies, setNewHobbies] =useState("")
    const [newEmail, setNewEmail] =useState("")
  
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
  
    const creatUser = async () => {
      await addDoc(usersCollectionRef, {name: newName, age: newAge, Color: newColor,Store: newStore, Hobbies:newHobbies, Email: newEmail});
      
  
    };
  
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers (data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        console.log(data)
      };
  
      getUsers();
  
    }, []);
    return (
        <div>

<input placeholder="First and last Name..." onChange={(event) => {
           setNewName (event.target.value)}}
         />

<input placeholder="Favorite Color..." onChange={(event) => {
           setNewColor (event.target.value)}}
         />

<input placeholder="Favorite Store..." onChange={(event) => {
           setNewStore (event.target.value)}}
         />

<input placeholder="Hobbies..." onChange={(event) => {
           setNewHobbies (event.target.value)}}
         />

<input type ="number" placeholder="Age..." onChange={(event) =>{
          setNewAge (event.target.value)}}
         />

<input type="email" placeholder="Email..." onChange={(event) => {
           setNewEmail (event.target.value)}}
         />

         <button class="btn btn-outline-danger" onClick={creatUser}>Submit</button>
         

            
        </div>
    )
}

export default Form1