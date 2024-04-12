import TipoAlimento from "../components/Menu/TipoAlimento.js";

import BebidaCaliente from '../components/Menu/images/BebidaCaliente.svg';
import BebidaFria from '../components/Menu/images/BebidaFria.svg';

import '../components/Menu/styles/Menu.css'

const Menu = () => {
  return (
    <div className="grid grid-cols-3">
      <TipoAlimento 
      tipoAlimento = 'Bebidas'
      alimentoUno = 'Bebidas Calientes'
      imagenAlimentoUno = {BebidaCaliente}
      descripcionImagenUno= 'una bebida Caliente'
      alimentoDos = 'Bebidas Frias'
      imagenAlimentoDos = {BebidaFria}
      descripcionImagenDos = 'una bebida fria' />

      <TipoAlimento 
      tipoAlimento = 'Complementos'
      alimentoUno = 'Sandwich'
      imagenAlimentoUno = {BebidaCaliente}
      descripcionImagenUno= 'un Sandwich'
      alimentoDos = 'Baguette'
      imagenAlimentoDos = {BebidaCaliente}
      descripcionImagenDos = 'una Baguette' />

      <TipoAlimento 
      tipoAlimento = 'Momento Dulce'
      alimentoUno = 'Pasteles'
      imagenAlimentoUno = {BebidaCaliente}
      descripcionImagenUno= 'un pastel'
      alimentoDos = 'Muffin'
      imagenAlimentoDos = {BebidaCaliente}
      descripcionImagenDos = 'un muffin' />
    </div>
  );
};

export default Menu;