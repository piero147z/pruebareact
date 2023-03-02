import '../App.css'
import React from "react";
import Nav from './nav';

import { BsTruckFlatbed } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";

import { useState } from "react";

function Home() {

    return(
    <div className="container-fluid">
        <Nav/>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-transparent" id="fondito">
			<div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4">Bibliotecas para ti</h1>
            <p className="lead fw-normal">Parrafo de introduccion</p>
			<a className="btn btn-outline-secondary" href="#">Coming soon</a>
			</div>
			<div className="product-device shadow-sm d-none d-md-block"></div>
			<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
		</div>

        <div className="container text-center" color="brown">
            <div className="row pt-3 pt-5 pb-5">
              <div className="col">
                <h3><BsTruckFlatbed/></h3>
                <p>ENVÍO GRATIS A PARTIR DE 100€</p>
              </div>
              <div className="col">
                <h3><BsHeadset/></h3>
                <p>ASISTENCIA LAS 24HS</p>
              </div>
              <div className="col">
                <h3><BsArrowRepeat/></h3>
                <p>DEVOLUCIONES GRATUITAS</p>
              </div>
            </div>
          </div>

    </div>
    );
}
export default Home;