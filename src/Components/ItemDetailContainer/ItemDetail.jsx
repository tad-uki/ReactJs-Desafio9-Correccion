import React from "react";
import "./ItemDetail.css"
import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function ItemDetail({id, title, description, price, imageUrl}){

    const { onAddCart } = useContext(CartContext)

    return(
        <>
          <div id="itemDetail">
                <section>
                    <img src={imageUrl} alt={title} className="imgDetail"/>
                </section>

                <section id="itemArticle">
                    <h2> {title} </h2>
                    <p> ${price} </p>
                    <article> {description} </article>
                </section>

            </div>
            <ItemCount stock={23} initial={0} onAdd={onAddCart} id={id}/>
        </>
    )   
}