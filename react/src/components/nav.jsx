import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./css.css";

export const Nav=()=>{
  
  const curentUser=useSelector(s=>s.curentUser) 
  debugger
  const [user,setuser]=useState({});

return <>

<nav className="navbar" class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="./home">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="navbar-brand" aria-current="page" to="./login">Login</Link>
        </li>

        <li class="nav-item">
          <Link class="navbar-brand" to="./all">All Products</Link>
        </li>
        
       
        {
          curentUser=="manager" &&
        <li class="nav-item">
          <Link class="navbar-brand" to="./add">add product</Link>
        </li>
      }
        
      </ul>
      
      <form className="d-flex search" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit" style={{backgroundColor:"pink",color:"white",borderColor:"pink"}}>Search</button>
      </form>
       <li class="nav-item">
          <Link class="navbar-brand" to="./cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"/><path d="M5 4h17l-2 11H7L5 4Zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2c0 1.219.946 2 2.73 2H19.5"/></g></svg></Link>
        </li>
        
    </div>
  </div>
</nav></>
}
