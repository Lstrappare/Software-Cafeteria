import { Link } from "react-router-dom";

function Opcion (props) {
  return (
    <div>
      <Link to={props.redireccion} className={`flex flex-col justify-center items-center rounded-xl p-24 
      opcion ${props.background}`}>    
          <img src={props.imagenOpcion} alt={` Imagen de ${props.descripcionImagen}`} />
          <h2 className="text-3xl">{props.nombreOpcion}</h2>
      </Link>
    </div>
  )
};

export default Opcion;