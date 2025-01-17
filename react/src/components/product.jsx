import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import "./css.css"; 
import { addtocart, deleteitem } from "../redux/dataAction";

export const Product=({Product})=>{
    const navigate=useNavigate()
    const dis=useDispatch()
    const myUser=useSelector(s=>s.curentUser)
    debugger
    return<>
    
    <div className="img">
        
        <Link to={`../Details/${Product.qr}`}>
        <img  src={Product.productPic} style={{width:"300px"}}></img></Link>
        <Link id="link"  to={`../Details/${Product.qr}`}></Link>
        <h3>{Product.productName}</h3>
        <h3>{Product.price}<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M24 7a1 1 0 0 0-1 1v3h-1a7 7 0 1 0 0 14h1v10h-1a5.002 5.002 0 0 1-4.716-3.333a1 1 0 1 0-1.885.666A7.002 7.002 0 0 0 22 37h1v3a1 1 0 1 0 2 0v-3h1a7 7 0 1 0 0-14h-1V13h1a5.002 5.002 0 0 1 4.716 3.333a1 1 0 1 0 1.885-.666A7.002 7.002 0 0 0 26 11h-1V8a1 1 0 0 0-1-1Zm-3 1a3 3 0 1 1 6 0v1.055A9.008 9.008 0 0 1 34.487 15a3 3 0 1 1-5.657 2A3.008 3.008 0 0 0 27 15.17v5.885a9.001 9.001 0 0 1 0 17.89V40a3 3 0 1 1-6 0v-1.055A9.008 9.008 0 0 1 13.513 33a3 3 0 1 1 5.657-2A3.008 3.008 0 0 0 21 32.83v-5.885a9.001 9.001 0 0 1 0-17.89V8Zm-4 10a5 5 0 0 1 5-5h1v10h-1a5 5 0 0 1-5-5Zm4-2.83a3.001 3.001 0 0 0 0 5.66v-5.66ZM25 25h1a5 5 0 0 1 0 10h-1V25Zm2 2.17v5.66a3.001 3.001 0 0 0 0-5.66Z" clip-rule="evenodd"/></svg></h3>
        {/* <h6>{Product.description}</h6> */}
        <br/>
        { myUser==="manager" &&
            <button className="button" onClick={()=>{dis(deleteitem(Product.qr));}}>delete</button>
        }
        { myUser && myUser!=="manager" &&
         <button className="button" onClick={()=>dis(addtocart(Product))}>add to cart</button>
        }
        <br/>
        
    </div>
    </>
}