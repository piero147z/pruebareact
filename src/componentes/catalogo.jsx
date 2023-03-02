import '../index.css'
import React from "react";
import Nav from './nav';

import { useContext } from 'react';

import { useState } from "react";
import Producto from './Producto';

function Catalogo() {

    return(
    <div className="container-fluid">
        <Nav/><br />
        <div className="product-card-container">
            <Producto/>
        </div>
        <br />
    </div>
    );
}
export default Catalogo;