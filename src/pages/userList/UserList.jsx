import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "../user/User";
import "./userList.css";

//const userRows=""
export default function UserList() {

    /* setting variables and fetching database */

    const [costumer,setCustomer]= useState([]);
    const [address,setAddress] = useState("");
    const [phone , setPhone]= useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [avatar , setAvatar]= useState("")
    const [isActive,setIsActive] = useState("");
    const [isUpdate, setIsUpdate] = useState("")

    // const [updateId, setUpdateId] = useState(-1);
    // const [newCountry,setNewCountry] = useState("");
    // const [userData,setUserData]= useState([]);

    const [oneUser , setOneUser]= useState({name:name,address:address,phone:phone,email:email,isActive:isActive,avatar:avatar} )

    useEffect( ()=>{
        const res = axios.get('https://617e8b952ff7e600174bd827.mockapi.io/customers')
            .then((res) => {
                console.log(" Customers : ",res.data)
                setCustomer(res.data)
            })
    },[])

  const deleteHandler = async (id) => {
    console.log(id);
    const deleteRes = await axios.delete('https://617e8b952ff7e600174bd827.mockapi.io/customers/'+id)
    console.log(deleteRes);
    if (deleteRes.status === 200) {
        const usersList = [...costumer];
        let resultOfNonDeleted = usersList.filter((n) => {
            return n.id !== id
        })            
        setCustomer(resultOfNonDeleted)
        console.log(resultOfNonDeleted);
    }
    else{
        console.log("something went wrong , please try again later ");
    }
  };// }
  // const onEditBtnClicked=(id)=>
  // {
  //   let tempClient=costumer.find(client=>client.id===parseInt(id))
  //   setOneUser(tempClient);
  //   setIsUpdate(true);
  // }
/* ****************     show the table of users ******************** */
  const renderTable = () => {
    return costumer.map(client => {
      return (
        <tr className="trclass">
              <td className="tdclass"><img src={client.avatar}/></td>
              <td className="tdclass">{client.name}</td>
              <td className="tdclass">{client.phone}</td>
              <td className="tdclass">{client.email}</td>
              <td className="tdclass">{client.country}</td> 
              <td className="tdclass">{client.isActive?"true":"false"}</td> 
              <td className="tdclass"><input className="btndelete" type={'button'} value={'Delete'} onClick={() => {deleteHandler(client.id)}} /></td>
              <td className="tdclass">
              {
              // <Link to={"/user/"+client.id}>
              //     <input className="btn" type={'button'} value={'Edit'} />
              // </Link>
              }
              <Link to={{
                pathname: "/user/"+client.id,
                state: { client: client }
              }
            }>
              <input className="btnEdite" type={'button'} value={'Edit'} />
          </Link>
              </td>
        </tr>
      )
    })
  }
    return <div className="wrapper">
   
    {!isUpdate ? <div className="showlist">
    <h1 className="ActiveWorker"> Our Customers </h1> 
        <div className="container">
                <table id="users">
                    <thead className="tableHead">
                        <tr className="trclass2">
                            <th className="thclaa1">Pictur</th>
                            <th className="thclaa2">Name</th>
                            <th className="thclaa3">Phone</th>
                            <th className="thclaa4">Email</th>
                            <th className="thclaa5">Address</th>
                            <th className="thclaa6">Active</th>                            
                            <th className="thclaa8">Delete</th>
                            <th className="thclaa7">Update</th>
                        </tr>
                    </thead>
                    <tbody className="showTableContent">{renderTable()}</tbody>
                </table>
            </div>
            <div className="updatUser">
        </div>
  </div>:<User />}
    </div>
  }
