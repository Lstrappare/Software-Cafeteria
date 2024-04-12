import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
/* Navegación */
import NavegacionPrincipal from './components/navegadorPrincipal/NavegacionPrincipal.js'
/* Rutas de Navegación */
import Inicio from './pages/Inicio.js';
import Registro from './pages/Registro.js';
import Menu from './pages/Menu.js';
import Promociones from './pages/Promociones.js';
import Sucursales from './pages/Sucursales.js';
import Blackmoon from './pages/Blackmoon.js';
import Terminos from './pages/Terminos.js';


function App() {

  const location = useLocation(); 
  const isInicioPage = location.pathname === '/';

  return (
    <div className="App">
      {!isInicioPage && <NavegacionPrincipal />}
      <Routes>
        <Route path='/' element={ <Inicio /> } />
        <Route path='registro' element={ <Registro /> } />
        <Route path='menu' element={ <Menu /> } />
        <Route path='promociones' element={ <Promociones /> } />
        <Route path='sucursales' element={ <Sucursales /> } />
        <Route path='blackmoon' element={<Blackmoon />} />
        <Route path='terminos' element={ <Terminos /> } />
      </Routes>
    </div>
    
  );
}

export default App;
