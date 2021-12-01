import { useState, useEffect } from "react";
import "./App.css";
import {db} from "./firebase-config";
import {collection, getDocs, addDoc} from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import { async } from "@firebase/util";
import Santa from "./Components/Santa";
import Flysanta from "./Components/Flysanta";
import RightSanta from "./Components/RightSanta";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toppart from "./Components/Toppart";
import Form1 from "./Components/Form1";



function App() {

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const creatUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: newAge});

  };


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers (data.docs.map((doc) => ({...doc.data(), id: doc.id })));

    };

    getUsers();

  }, []);

  return (
    <div className="cont">


  <div class="snowflake">
        
  ❅
  </div>
  <div class="snowflake">
        
        ❅
        </div>
        <div class="snowflake">
        
        ❅
        </div>

      <div className="left">
        <Santa />
       
      </div>
      
      <div className="topmid">
        <Toppart />
        
      
      </div>

      <div class="snowflake">
        
        ❅
        </div>

        <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>

      <div className="botmid">
      <RightSanta />
     
      </div>




      <div className="right">

      <div className="p1">
      <p>S<span className="P2">ECRET</span> S<span className="P2">ANTA</span> S<span className="P2">IGN-UP</span>
        </p> 


      </div>

      <Form1 />
     
      
     

        
      </div>


    </div>
   
      

    


     
      

      
          
     
      

    
        
   

      

     
    

    
  )
}

export default App;
