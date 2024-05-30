import {useSelector} from "react-redux";
import { Product } from "./product";
import "./css.css";
import { useState } from "react";

export const AllProducts=()=>{
    const productList=useSelector(s=>s.productList)
    const [users,setuser]=useState({});
    const user=useSelector(u=>u.userList);
    const printuser=()=>{
    const myUser=user.find(u=>u.gmail==users.gmail)
        if(myUser===user.gmail)
            return user.userName
    }
    const curUser=useSelector(s=>s.curentUser)
    return<>
    <h3>hello {curUser}</h3>
    <div className="all_product">
        {productList.map(p=><Product Product={p}></Product>)}
        
    </div>
    <dis className="foter"></dis>
    </>
}