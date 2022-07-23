//@ts-check
import React from "react";
import { useState } from "react";
import "./ItemCount.css"

export default function ItemCount({ stock, initial, onAdd }){
    const [count, setCount] = useState(initial)

    function add(){
        setCount(count + 1)
    }

    function subtract(){
        setCount(count - 1)
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

            <section className="finishSection">
                <button className="buttonFinish" onClick={()=> onAdd(count)}> Agregar al Carrito </button>
            </section>
            
        </main>
    );
}