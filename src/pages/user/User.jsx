import React from "react";
import { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import axios from "axios";
import UserList from "../userList/UserList";
import "./user.css";

const User =()=> {

  //const [userData,setUserData]= useState([]);
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
  let location=useLocation();

  useEffect( ()=>{
    getdata();

  },[])

  const getdata = ()  =>{
    const res = axios.get('https://617e8b952ff7e600174bd827.mockapi.io/customers')
    .then((res) => {
        console.log(" Customers : ",res.data)
        setCustomer(res.data)
    })
  }

  const userHandler = (e) => {
    if ((e.target.name)=== "userName"){
      setUserName(e.target.value);
    console.log(e.target.value);}
    if ((e.target.name) === "name"){
      setName(e.target.value);
    console.log(e.target.value);  }
    if ((e.target.name) === "email") {
      setEmail(e.target.value);
      console.log(e.target.value);
    }

    if ((e.target.name) === "phone") {
      setPhone(e.target.value);
      console.log(e.target.value)
    }
    if ((e.target.name) === "country") {
      setCountry(e.target.value);
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

  const updateHandler = async (e) => {
    e.preventDefault()
    console.log("seraersf");

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
    console.log(request);
    console.log("update id",location.state.client.id);

    const res = await axios.put('https://617e8b952ff7e600174bd827.mockapi.io/customers/'+location.state.client.id,request);
    console.log("put :", res)

    window.location="/users"
}

  return (
    <div className="user">
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src=""
              alt="NoImage"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{location.state && location.state.client.name}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle"> {location.state && location.state.client.name} </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{location.state && location.state.client.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{location.state && location.state.client.phone}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{location.state && location.state.client.mail}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{location.state && location.state.client.country}</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={updateHandler}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>

                <input className="userUpdateInput" type="text" name="userName" placeholder="User name" onChange={(e) => userHandler(e)} /> 
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input className="userUpdateInput" type="text" name="name" placeholder="Full name" onChange={(e) => userHandler(e)} /> 
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input className="userUpdateInput" type="text" name="email" placeholder="Email" onChange={(e) => userHandler(e)} /> 
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input className="userUpdateInput" type="text" name="phone" placeholder="phone" onChange={(e) => userHandler(e)} /> 
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input className="userUpdateInput" type="text" name="country" placeholder="Address" onChange={(e) => userHandler(e)} /> 
              </div>
              <div className="userUpdateItem">
              <label>Active</label>
              <input className="userUpdateInput" type="text" name="isActive" placeholder="True/False" onChange={(e) => userHandler(e)} /> 
            </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="" alt="image" name="avatar"/>                
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button type="submit" className="userUpdateButton" >Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User