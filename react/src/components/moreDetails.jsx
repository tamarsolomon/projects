import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addtocart,deleteitem } from "../redux/dataAction";
import { useState } from "react";

export const MoreDetails=()=>{
    debugger
    const dis=useDispatch()
    const params=useParams()
    const productList=useSelector(s=>s.productList)
    const p=productList.find(i=>i.qr==params.qr)
     const myUser=useSelector(s=>s.curentUser)
    
     const checkifuser=()=>{
        if(!myUser)
            alert("your not sighned")       
    }
    return<>
        
        <img  src={"../"+p.productPic} style={{width:"600px"}}></img>
        <p style={{fontSize:40}}>code: {p.qr}</p>
        <p style={{fontSize:40}}>product name: {p.productName}</p>
        <p style={{fontSize:40}}>price: {p.price}</p>
        
        <p style={{fontSize:40}}>description: {p.description}</p>
        { myUser==="manager" &&
          
               <button className="button" onClick={()=>dis(deleteitem(Product))}>delete item</button>
        }
        {
            myUser&& myUser!=="manager" &&
            <button className="button" onClick={()=>dis(addtocart(p))}>add to cart</button>
        }
        <div checkifuser></div>
        <dis className="foter"></dis>
    </>
}
