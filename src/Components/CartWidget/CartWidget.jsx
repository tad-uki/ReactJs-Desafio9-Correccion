import React from "react";
import cart from "../images/cart.png";
import "./CartWidget.css"

export default function CartWidget(){
    return(
        <img src={cart} className="imageIcon"/>
    );
}