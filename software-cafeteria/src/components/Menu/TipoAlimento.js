function TipoAlimento (props){
  return(
    <div className='bg-orange-200 rounded-xl my-20 mx-32 flex flex-col items-center text-2xl contenedor-alimento p-1'>
      <header className='bg-orange-400 m-3 py-8 px-16 rounded-2xl text-center'>
        <h2>{props.tipoAlimento}</h2>
      </header>
        <div className='flex items-center my-16'>
          <div className='bg-orange-400 rounded-full p-4'>
            <img src={props.imagenAlimentoUno} alt={`Una imagen de ${props.descripcionImagenUno}`} />
          </div>
          <h3 className='p-8'>{props.alimentoUno}</h3>
        </div>
        <div className='flex items-center justify-end my-16'>
          <h3 className='p-8'>{props.alimentoDos}</h3>
          <div className='bg-orange-400 rounded-full p-4'>
            <img src={props.imagenAlimentoDos} alt={`Una imagen de ${props.descripcionImagenDos}`} />
          </div>
        </div>
    </div>
  );
}

export default TipoAlimento;