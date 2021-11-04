  import { useState,useEffect } from "react";
  import axios from "axios";
  import { Link } from "react-router-dom";
  import User from "../../pages/user/User";
  
  import "./lastTransaction.css";
  
  export default function LastTransaction() {
    
    const [costumer,setCustomer]= useState([]);
    const [userData,setUserData]= useState([]); 
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
  
    userList=[...costumer]
    let lastUsers = userList.slice(-5)
    //console.log("last users :" ,lastUsers);
    // const renderTable = () => {
    //   return lastUsers.map(client => {
    //     return (
    //       <tr className="trclass">
    //             <td className="tdclass1"><img src={client.avatar}/></td>
    //             <td className="tdclass2">{client.name}</td>
    //             <td className="tdclass7"><input className="btn" type={'button'} value={'Display'} /></td>
    //       </tr>
    //     )})
    //   }
  
    return (
  
      <table id="users">
      {
      // <thead className="tableHead">
      //     <tr className="trclass2">
      //         <th className="thclaa1">Pictur</th>
      //         <th className="thclaa2">Name</th>
      //         <th className="thclaa3">Display</th>
      //     </tr>
      // </thead>
      // <tbody className="showTableContent">{renderTable()}</tbody>
      }
  </table>

    )
  }



















//   const Button = ({ type }) => {
//     return <button className={"widgetLgButton " + type}>{type}</button>;
//   };
//   return (
//     <div className="widgetLg">
//       <h3 className="widgetLgTitle">Latest transactions</h3>
//       <table className="widgetLgTable">
//         <tr className="widgetLgTr">
//           <th className="widgetLgTh">Customer</th>
//           <th className="widgetLgTh">Date</th>
//           <th className="widgetLgTh">Amount</th>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src=""
//               alt="missing photo"
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Maya Diab</span>
//           </td>
//           <td className="widgetLgDate">2 nov 2021</td>
//           <td className="widgetLgAmount">$100.00</td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src=""
//               alt="missing photo"
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Maya Diab</span>
//           </td>
//           <td className="widgetLgDate">2 nov 2021</td>
//           <td className="widgetLgAmount">$100.00</td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src=""
//               alt="missing photo"
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Maya Diab</span>
//           </td>
//           <td className="widgetLgDate">2 nov 2021</td>
//           <td className="widgetLgAmount">$100.00</td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src=""
//               alt="missing photo"
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Maya Diab</span>
//           </td>
//           <td className="widgetLgDate">2 nov 2021</td>
//           <td className="widgetLgAmount">$100.00</td>
//         </tr>
//       </table>
//     </div>
//   );
// }
