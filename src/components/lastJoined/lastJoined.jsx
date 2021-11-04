import { useState,useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "./lastJoined.css";

export default function LastJoined() {

  
  const [costumer,setCustomer]= useState([]);
  // const [userData,setUserData]= useState([]);
  // const [userName,setUserName]= useState([]);
  // const [country,setCountry] = useState(null);
  // const [phone , setPhone]= useState([]);
  // const [name,setName] = useState(null);
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState(null);
  // const [gender,setGender] = useState(null);
  // const [isActive,setIsActive] = useState("");
  // const [avatar, setAvatar] = useState(-1);

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

  userList=[...costumer]
  let lastUsers = userList.slice(-5)
  const renderTable = () => {
    return lastUsers.map(client => {
      return (
        <tr key={client.id} className="trclass">
          <td className="tdclass1"><img src={client.avatar} /></td>
          <td className="tdclass2">{client.name}</td>
          <td className="tdclass3">{client.phone}</td>
          <td className="tdclass4">{client.email}</td>
          <td className="tdclass5">{client.country}</td>
        </tr>
      )
    })
  }

  return (
    <table id="users">
      <thead className="tableHead">
        <tr className="trclass2">
          <th className="thclaa1">Pictur</th>
          <th className="thclaa2">Name</th>
          <th className="thclaa3">Phone</th>
          <th className="thclaa4">Email</th>
          <th className="thclaa5">Address</th>
        </tr>
      </thead>
      <tbody className="showTableContent">{renderTable()}</tbody>
    </table>
  );
}
