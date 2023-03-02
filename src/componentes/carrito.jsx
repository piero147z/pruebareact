import React from "react";
import "../bootstrap.css";

import CarritoElementos from "./carritoElementos";
import CarritoTotal from "./carritoTotal";
import PaypalCard from "./paypalCard";

import Nav from './nav';

function Carrito() {
    return(
        <div className="container-fluid">
            <Nav/>
            <div className="product-card-container">
            <CarritoElementos/>
            </div>
            <div className="container">
            <CarritoTotal/>
            <PaypalCard/>
            </div>
        </div>
    );
}

export default Carrito;