import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { array } from "../data/data";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    function onAddCart(count, id){

        let index = array.map(object => object.id).indexOf(id)
        let cartIndex = cart.map(object => object.id).indexOf(id);

        if(count <= 0){
            alert("Por favor establezca la cantidad que desea")
        }
        else if(cart.map(object => object.id).indexOf(id) == -1){

            array[index].quantity = count
            cart.push(array[index])

            setTimeout(()=>{
                console.log(cart)
            }, 1000)

        }
        else if(cart[cartIndex].quantity != count){
            cart.splice(cartIndex, 1)
            array[index].quantity = count
            cart.push(array[index])

            setTimeout(()=>{
                console.log(cart)
            }, 1000)
        }
        else{
            alert("Este item ya se encuentra en el carrito!")
        }
    }

    return(
        <CartContext.Provider value={{cart, setCart, onAddCart}}>
            {children}
        </CartContext.Provider>
    )
}