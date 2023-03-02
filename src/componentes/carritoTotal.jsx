import React from "react";
import { useContext } from "react";
import { dataContext } from './DataContext';

import "../bootstrap.css";


function CarritoTotal() {
    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.precio, 0);
    return(
        <div className="container">
            <h2>Total a pagar: {total} €</h2>
        </div>
    );
}

export default CarritoTotal;