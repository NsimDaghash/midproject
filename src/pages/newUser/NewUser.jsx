import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./newUser.css";

export default function NewUser() {
  const [userData,setUserData]= useState([]);
  const [costumer,setCustomer]= useState([]);
  const [userName,setUserName]= useState([]);
  const [country,setCountry] = useState(null);
  const [phone , setPhone]= useState([]);
  const [name,setName] = useState(null);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(null);
  const [gender,setGender] = useState(null);
  const [isActive,setIsActive] = useState("");
  const [avatar, setAvatar] = useState(-1);

  let userList =[];
  const getdata = ()  =>{
    const res = axios.get('https://617e8b952ff7e600174bd827.mockapi.io/customers')
    .then((res) => {
        console.log(" Customers : ",res.data)
        setCustomer(res.data)
    })
  }

  useEffect( ()=>{
    getdata();
  },[])

  const userHandler = (e) => {
    if ((e.target.name)=== "userName"){
      setUserName(e.target.value);
    console.log(e.target.value);}
    if ((e.target.name) === "name"){
      setName(e.target.value);
    console.log(e.target.value);
  }
    if ((e.target.name) === "email") {
      setEmail(e.target.value);
      console.log(e.target.value);
    }
    if ((e.target.name) === "password") {
      setPassword(e.target.value);
      console.log(e.target.value)
    }
    if ((e.target.name) === "phone") {
      setPhone(e.target.value);
      console.log(e.target.value)
    }
    if ((e.target.name) === "country") {
      setCountry(e.target.value);
      console.log(e.target.value)
    }
    if ((e.target.name) === "gender") {
      setGender(e.target.value);
      console.log(e.target.value)
    }
    if ((e.target.name) === "isActive") {
      setIsActive(e.target.value);
      console.log(e.target.value)
    }
    if ((e.target.name) === "avatar") {
      setAvatar(e.target.value);
      console.log(e.target.value)
    }
  };
      /* add new user to the database */
      const addUserHandler = async () => {
      let request = {
        userName:userName,
        name: name,
        email : email,
        password:password,
        phone:phone,
        country:country,
        gender:gender,
        isActive:isActive,
        avatar:avatar,
      }
      const res = await axios.post('https://617e8b952ff7e600174bd827.mockapi.io/customers', request);
      console.log("post :", res)
      let newData = res.request
      const usersList = [...userData];
      usersList.push(newData)            
      setUserData(usersList)
      console.log(setUserData);
      getdata();
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="User name" data-key="userName" name={"userName"} onChange={(e) => userHandler(e)} /> 
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Full name" data-key="name" name={"name"} onChange={(e) => userHandler(e)}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Email" data-key="email" name={"email"} onChange={(e) => userHandler(e)} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" data-key="password" name={"password"} onChange={(e) => userHandler(e)}/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="phone number" data-key={"phone"} name={"phone"} onChange={(e) => userHandler(e)}/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Address" data-key={"country"} name={"country"} onChange={(e) => userHandler(e)}/>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" data-key={"gender"} name={"gender"} onChange={(e) => userHandler(e)}/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" data-key={"gender"} name={"gender"} onChange={(e) => userHandler(e)}/>
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" >
            <option value="yes" data-key={"isActive"} name={"isActive"} onChange={(e) => userHandler(e)}>Yes</option>
            <option value="no" data-key={"isActive"} name={"isActive"} onChange={(e) => userHandler(e)}>No</option>
          </select>
        </div>
        <div className="newUserItem" >
          <label>Picture</label>
          <input type="file" id="file" data-key={"avatar"} name={"userName"} onChange={(e) => userHandler(e)}/>
          </div>      
      </form>
      <div className="buttonNewUser">
        <button className="newUserButton" onClick={()=>addUserHandler()}>Create</button>
      </div>
    </div>
  );
}
