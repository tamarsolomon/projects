import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {validprice,validdescription,validproductName,validqr} from "./valid";
import { addProduct } from "../redux/dataAction";

export const AddItem=()=>{
    const [product,setproduct]=useState({}) 
    const user=useSelector(s=>s.curentUser)
    const[error,seterror]=useState({productName:"שדה חובה",qr:"שדה חובה",description:"שדה חובה",price:"שדה חובה"});
    const dis=useDispatch()
    const checkitem=()=>{
        if(!error.productName && !error.qr && !error.description && !error.price)
            dis(addProduct(product))
        else
            alert("הנתונים שגויים")
    }
   
    return<>
        <div>
        <div class="form-group">
                <label for="qr">qr:</label>
                <input type="number" class="form-control" id="qr"
                    onChange={(e)=>{
                        seterror({...error,qr:validqr(e.target.value)})
                        setproduct({...product,qr:e.target.value})
                    }}>
                </input>
                <label style={{color:"red"}}>{error.qr}</label>
                
            </div>
            <div class="form-group">
                <label for="productName">product name:</label>
                <input type="productName" class="form-control" id="productName"
                    onChange={(e)=>{
                        seterror({...error,productName:validproductName(e.target.value)})
                        setproduct({...product,productName:e.target.value})
                    }}>
                </input>
                <label style={{color:"red"}}>{error.productName}</label>
            </div>
            <div class="form-group">
                <label for="description">description:</label>
                <input type="description" class="form-control" id="description"
                    onChange={(e)=>{
                        seterror({...error,description:validdescription(e.target.value)})
                        setproduct({...product,description:e.target.value})
                    }}>
                </input>
                <label style={{color:"red"}}>{error.description}</label>
            </div>
            <div class="form-group">
                <label for="price">price:</label>
                <input type="price" class="form-control" id="price"
                    onChange={(e)=>{
                        seterror({...error,price:validprice(e.target.value)})
                        setproduct({...product,price:e.target.value})
                    }}>
                </input>
                <label style={{color:"red"}}>{error.price}</label>
            </div>
            <br/>
            <button type="login" className="btn btn-primary" onClick={(e)=>{
                e.preventDefault();
                checkitem();
               
            }}>Add item</button>
        </div>
        <dis className="foter"></dis>
    </>
}