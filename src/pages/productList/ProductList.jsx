import "./productList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function ProductList() {

    /* setting variables and fetching database */
    const [productData,setProductData]= useState([]);
    // const [sales,setSales]= useState([]);
    // const [inStock,setInStock] = useState("");
    // const [product , setProduct]= useState([]);
    // const [isActive,setIsActive] = useState("");


    useEffect( ()=>{
        const res = axios.get('https://617e8b952ff7e600174bd827.mockapi.io/customers')
            .then((res) => {
                console.log(" Customers : ",res.data)
                setProductData(res.data)
            })
    },[])

  const deleteHandler = async (id) => {
    console.log(id);
    const deleteRes = await axios.delete('https://617e8b952ff7e600174bd827.mockapi.io/customers/'+id)
    console.log(deleteRes);
    if (deleteRes.status === 200) {
        const productList = [...productData];
        let resultOfNonDeleted = productList.filter((n) => {
            return n.id !== id
        })            
        setProductData(resultOfNonDeleted)
        console.log(resultOfNonDeleted);
    }
    else{
        console.log("something went wrong , please try again later ");
    }
  };// }

const renderTable = () => {
  return productData.map(prod => {
    return (
      <tr className="trclass" key={prod.id}>
            <td className="tdclass1"><img src={prod.avatar}/></td>           
            <td className="tdclass3">{prod.product}</td>
            <td className="tdclass2">{prod.sales}</td>
            <td className="tdclass4">{prod.inStock}</td> 
            <td className="tdclass6">{prod.isActive?"true":"false"}</td> 
            <td className="tdclass7"><input className="btn" type={'button'} value={'Delete'} onClick={() => {deleteHandler(prod.id)}} /></td>
            <td className="tdclass8">
            <Link to={`/user/${prod.id}`}>
                <input className="btn" type={'button'} value={'Edit'} />
            </Link>
            </td>
      </tr>
    )
  })
}
  return <div className="wrapper">
  <h1 className="ActiveWorker"> Our Customers </h1> 
      <div className="container">
              <table id="users">
                  <thead className="tableHead">
                      <tr className="trclass2">
                          <th className="thclaa1">Pictur</th>
                          <th className="thclaa2">product</th>
                          <th className="thclaa3">sales</th>
                          <th className="thclaa4">inStock</th>
                          <th className="thclaa6">Active</th>
                          <th className="thclaa7">Update</th>
                          <th className="thclaa8">Delete</th>
                      </tr>
                  </thead>
                  <tbody className="showTableContent">{renderTable()}</tbody>
              </table>
          </div>
          <div className="updatUser">
      </div>
  </div>
}
