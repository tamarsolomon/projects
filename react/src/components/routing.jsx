import { Route, Routes } from "react-router";
import {Home } from "./home";
import {Homefi } from "./homefi";
import { Login } from "./login";
import { Loginfi } from "./loginfi";
import { Cart } from "./cart";
import { MoreDetails } from "./moreDetails";
import { Product } from "./product";
import { AllProducts } from "./allProducts";
import { AddItem } from "./addItem";

export const Routing = () => {
    return <>
        <Routes>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="homefi" element={<Homefi></Homefi>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="loginfi" element={<Loginfi></Loginfi>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
            <Route path="more" element={<MoreDetails></MoreDetails>}></Route>
            <Route path="product/:qr" element={<Product></Product>}></Route>
            <Route path="Details/:qr" element={<MoreDetails></MoreDetails>}></Route>
            <Route path="all" element={<AllProducts></AllProducts>}></Route>
            <Route path="add" element={<AddItem></AddItem>}></Route>
        </Routes>
    </>
}