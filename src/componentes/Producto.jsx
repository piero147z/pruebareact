import React from "react";
import Nav from './nav';
import '../producto.css';

import { useContext } from 'react';
import { dataContext } from './DataContext';
import { useState } from "react";

function Producto() {
    const { data, cart, setCart } = useContext(dataContext);

    const buyProductos = (producto) => {
        console.log(producto);
        setCart([...cart, producto]);
    }
    
    const loadImage = imageName => (require(`../assets/${imageName}`));
    
    return data.map((producto)=>{
        return(
            <div className="card" key={producto.id}>
            <img src={loadImage(producto.img)} className="card-img-top" alt="img-product-card"/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <h6 className="card-title">{producto.autor}</h6>
                <p className="card-title">{producto.precio} €</p>
                <p className="card-text">content</p>
                <button onClick={()=> buyProductos(producto)} className="btn btn-primary">Comprar</button>
            </div>
            </div>
        )

    });
}
export default Producto;