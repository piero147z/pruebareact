import React from "react";
import "../bootstrap.css";

import { BsCartDash } from "react-icons/bs";
import NuevoLogo from '../assets/NuevoLogo.png';

import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {

    return(

        <div className="container-fluid">
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
			  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				  <li className="nav-item">
				  	<img src={NuevoLogo} width="80" height="50" alt="menu"/>
				  </li>
				  <li className="nav-item">
				  <Link to={'/'}><button className="btn btn-link">Home</button></Link>
				  </li>
				  <li className="nav-item">
				  <Link to={'/catalogo'}><button className="btn btn-link">Productos</button></Link>
				  </li>
				</ul>
				<div className="d-grid gap-2 d-md-flex justify-content-md-end">
				<Link to={'/carrito'}><button className="btn btn-secondary me-md-2" type="button"><BsCartDash/> Carrito</button></Link>
				</div>
			  </div>
		  </nav>
		</div>
    );
}

export default Nav;