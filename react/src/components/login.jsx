import { useState } from "react"
import { validEmail } from "./valid";
import { validPassword } from "./valid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { cur } from "../redux/dataAction";
import "./css.css";

export const Login=()=>{
    const manager=useSelector(s=>s.manager) 
    const [user,setuser]=useState({});
    const users=useSelector(s=>s.userList)   
    const[error,seterror]=useState({gmail:"שדה חובה",password:"שדה חובה"});
    const navigate=useNavigate()  
    const dis=useDispatch()
    const checkLogin=()=>{
        debugger
        const myUser=users.find(u=>u.gmail==user.gmail)
        if(myUser===undefined)
        alert("אתה לא רשום")
        else if(myUser.gmail==="manager")
           { 
               debugger
               dis(cur("manager"))
               navigate("../add")
            }
        else if(myUser.password===user.password){
            dis(cur(myUser.userName))
            navigate("../all")
        }
        else
            alert("אתה לא רשום")
    }
   
    return<>
        <form>
            <div class="form-group">
                <label for="gmail">Email address:</label>
                <input type="gmail" className="form-control" id="gmail"
                    onChange={(e)=>{
                        seterror({...error,gmail:validEmail(e.target)})
                        setuser({...user,gmail:e.target.value})
                    }}>
                </input>
                <label style={{color:"red"}}>{error.gmail}</label>
            </div>
            <div class="form-group">
                <label for="password">password:</label>
                <input type="password" className="form-control" id="password"
                    onChange={(e)=>{
                        seterror({...error,password:validPassword(e.target)})
                        setuser({...user,password:e.target.value})
                    }}>
                </input>
                <label style={{color:"red"}}>{error.password}</label>
            </div>
            <button type="login" className="btn btn-primary" onClick={(e)=>{
                e.preventDefault();
                checkLogin()
            }}>Login</button>
        </form>
        <dis className="foter"></dis>
    </>
}