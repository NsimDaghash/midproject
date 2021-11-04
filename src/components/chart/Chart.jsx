import React from "react";
import { useEffect,useState} from "react";
import axios from "axios";
import "./chart.css"

export default function Chart() {

  const[customers,setCustomers] = useState([])
  const[products,setProducts]=useState([])


useEffect(()=>{
  const res = axios.get('https://617e8b952ff7e600174bd827.mockapi.io/customers')
  .then((res) => {
      setCustomers(res.data)
  })
},[])

    useEffect(()=>{
      let allproduct=[];
      if(products.length>0){
        setProducts([])
      }
      for(let i=0;i<customers.length;i++){
         axios.get('https://617e8b952ff7e600174bd827.mockapi.io/customers/'+customers[i].id+'/products').then((res)=>{
           allproduct.push(...res.data)
           setProducts([...products,...allproduct])
         })     
      }
    },[customers])     
//  })
console.log("?:",customers);
console.log("all:",products);

function totalSum(){
  console.log("nasim ");
  let sumOfSales=0;
  for(let i=0;i<products.length;i++){
    sumOfSales = sumOfSales + parseInt(products[i].sales);
  }
  return sumOfSales;
}

  return (  
    <div className="pardiv" >
    <div className="sundiv"> </div>
       <div className="chart">
       <h3 className="chartTitle">Sales Diagram</h3>
       {products?
       <h1 className="salesSum">Your Total Sale is: {totalSum()}$</h1>:
       ""
       }
     </div>
     </div>
  );
}
