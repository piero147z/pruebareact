import React, { useContext } from "react";
import { dataContext } from './DataContext';
import "../bootstrap.css";
import '../index.css';


function CarritoElementos() {
    const {cart} = useContext(dataContext);

    const loadImage = imageName => (require(`../assets/${imageName}`));

    return cart.map((producto)=>{
        return(
            <div className="card" key={producto.id}>
                <img src={loadImage(producto.img)} className="card-img-top" alt="product-card"/>
                <h3 className="card-title">{producto.nombre}</h3>
                <h4 className="card-title">{producto.precio} €</h4>
            </div>
        )
    });
}

export default CarritoElementos;