//@ts-check
import React from "react";
import { useState } from "react";
import "./ItemCount.css"
import {Link} from "react-router-dom"

export default function ItemCount({ stock, initial, onAdd, id }){
    const [count, setCount] = useState(initial)
    const [clicked, setClicked] = useState(false)

    function add(){
        setCount(count + 1)
    }

    function subtract(){
        setCount(count - 1)
    }

    function onClicked(){
        onAdd(count, id)
        setClicked(true)
    }

    return(
        <main>
            <section className="stockSection">
                <div> Stock Total: {stock} </div>
            </section>

            <section className="counterSection">
                <button className="buttonGen" onClick={add} disabled={count === stock}> + </button>
                <p> {count} </p>
                <button className="buttonGen" onClick={subtract} disabled={count === initial}> - </button>
            </section>

            {
                clicked?
                    <section className="finishSection">
                        <button className="buttonFinish"> <Link to={"/cart"}> Terminar mi Compra </Link> </button>
                    </section>
                :
                    <section className="finishSection">
                        <button className="buttonFinish" onClick={onClicked}> Agregar al Carrito </button>
                    </section>
            }
        </main>
    );
}