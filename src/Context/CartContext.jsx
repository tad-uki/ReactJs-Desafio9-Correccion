import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { array } from "../data/data";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    useEffect(()=>{
        console.log(cart)
    }, [cart])

    function isInCart(id){
        return cart.some((item) => item.id === id)
    }

    function onAddCart(product, count){
        if(isInCart(product.id)){
            setCart(cart.map(item => {
                return item.id === product.id ? {...item, quantity: item.quantity + count} : item
            }))
        }else{
            setCart([...cart, {...product, quantity: count}])
        }
    }

    return(
        <CartContext.Provider value={{cart, setCart, onAddCart}}>
            {children}
        </CartContext.Provider>
    )
}