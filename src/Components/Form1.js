import React from 'react'
import { useState, useEffect } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, addDoc} from "firebase/firestore";


const Form1 = () => {

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newStore, setNewStore] = useState("")
    const[newColor, setNewColor]=useState("")
    const[newHobbies, setNewHobbies] =useState("")
    const [newEmail, setNewEmail] =useState("")
  
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
  
    const creatUser = async () => {
      
      await addDoc(usersCollectionRef, {name: newName, age: newAge, Color: newColor,Store: newStore, Hobbies:newHobbies, Email: newEmail});
      
      
      
  
    }

    const onHandleSubmit = () => {
      
      setNewName("");
      setNewAge(0);
      setNewStore("");
      setNewColor("");
      setNewHobbies("")
      setNewEmail("")
    };
    


    const emailInput = React.useRef();
    const HobbiesInput = React.useRef();
    const StoreInput= React.useRef();
    const ColorInput= React.useRef();
    const AgeInput=React.useRef();
    const NameInput=React.useRef();

  const test = () => {
    emailInput.current.value = "";
    HobbiesInput.current.value = "";
    StoreInput.current.value = "";
    ColorInput.current.value= "";
    AgeInput.current.value= "";
    NameInput.current.value= "";




  }


    
  
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers (data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        console.log(data)
      };

     
  
      getUsers();


      
      
  
    }, []);
    return (
        <div className="cent">

<input placeholder=" Name..." ref={NameInput} onChange={(event) => {
           setNewName (event.target.value)}}
         />

<input placeholder="Favorite Color..." ref={ColorInput} onChange={(event) => {
           setNewColor (event.target.value)}}
         />

<input placeholder="Favorite Store..." ref={StoreInput} onChange={(event) => {
           setNewStore (event.target.value)}}
         />

<input placeholder="Hobbies..."ref={HobbiesInput} onChange={(event) => {
           setNewHobbies (event.target.value)}}
         />

<input type ="number" placeholder="Age..."ref={AgeInput} onChange={(event) =>{
          setNewAge (event.target.value)}}
         />

<input type="email"placeholder="Email..." ref={emailInput} onChange={(event) => {
           setNewEmail (event.target.value)}}
         />

         <button class="btn btn-outline-danger" onClick={() =>{creatUser(); test(); }}>Submit</button>
         {/* <button class="btn btn-outline-danger" onClick={test}>Submit</button> */}

   

            
        </div>
    )
}

export default Form1