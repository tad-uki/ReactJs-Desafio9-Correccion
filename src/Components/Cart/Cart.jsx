import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export default function Cart(){
    const {cart, onAddCart } = useContext(CartContext)
    console.log(cart)

    
    return(
        <main>
            {cart.map((item) => {
                <section>
                    <h3>{item.title}</h3>
                    <div>{item.description}</div>
                    <span>{item.price}</span>
                    <span>{item.quantity}</span>
                </section>
            })}
        </main>
    )
}