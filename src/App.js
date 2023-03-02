import './App.css';
import Catalogo from './componentes/catalogo';
import Home from './componentes/home';
import Carrito from './componentes/carrito';

import DataProvider from './componentes/DataContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/catalogo' element={<Catalogo/>} ></Route>
          <Route path='/carrito' element={<Carrito/>} ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
