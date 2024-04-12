import React from "react";
import { Link } from "react-router-dom";

import './styles/NavegacionPrincipal.css'

function NavegacionPrincipal () {
  return (
    <div className='bg-purple-400 text-white text-xl navegacion'>
      <header className="p-4 text-center">
        <h1>i Buen Provecho!</h1>
      </header>
      <nav className="flex flex-row justify-between p-4">
            <Link to='/'>Inicio</Link>
            <Link to='registro' className="">Registrarse / Iniciar Sesión</Link>
            <Link to='menu'>Menú</Link>
            <Link to='promociones'>Promociones</Link>
            <Link to='sucursales'>Sucursales</Link>
            <Link to='blackmoon'>¿Qué es BlackMoon?</Link>
            <Link to='terminos'>Términos y Condiciones</Link>
      </nav>
    </div>
  );
}

export default NavegacionPrincipal;