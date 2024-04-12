import React from "react";
import Opcion from "./Opcion"

import Usuario from './images/Usuario.svg';
import Menu from './images/Menu.svg';
import Promociones from './images/Promociones.svg';
import Sucursales from './images/Sucursales.svg';
import BlackMoon from './images/BlackMoon.svg';
import Terminos from './images/Terminos.svg';

import './styles/NavegacionInicio.css'

function NavegacionInicio () {
  return (
    <div className="navegacionInicio">
      <header className="text-center bg-purple-400 p-8">
        <h1 className="text-3xl text-white">i Binvenido a BlackMoon !</h1>
      </header>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 m-20">

        <Opcion
          redireccion = 'registro' 
          nombreOpcion = 'Registrarse / Iniciar Sesión' 
          imagenOpcion = { Usuario }
          descripcionImagen = 'Registro'
          background = 'bg-purple-400'/>
          
        <Opcion 
          redireccion = 'menu'
          nombreOpcion = 'Menú'
          imagenOpcion = { Menu }
          descripcionImagen = 'Menú'
          background = 'bg-indigo-200'/>

        <Opcion 
          redireccion = 'promociones'
          nombreOpcion = 'Promociones'
          imagenOpcion = { Promociones }
          descripcionImagen = 'Promociones'
          background = 'bg-purple-400'/>

        <Opcion 
          redireccion = 'sucursales'
          nombreOpcion = 'Sucursales'
          imagenOpcion = { Sucursales }
          descripcionImagen = 'Sucursales'
          background = 'bg-orange-200'/>

        <Opcion
          redireccion = 'blackmoon'
          nombreOpcion = '¿Qué es BlackMoon?'
          imagenOpcion = { BlackMoon }
          descripcionImagen = 'BlackMoon'
          background = 'bg-yellow-500'/>

        <Opcion 
          redireccion = 'Términos y Condiciones'
          nombreOpcion = 'Términos y Condiciones'
          imagenOpcion = { Terminos }
          descripcionImagen = 'Términos y Condiciones'
          background = 'bg-indigo-200'/>
      </div>
    </div>
  );
}

export default NavegacionInicio;