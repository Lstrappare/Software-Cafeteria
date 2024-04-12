import React, { useState } from "react";

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    confirmarCorreo: "",
    contrasenia: "",
    confirmarContrasenia: "",
    fechaNacimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      <form className="bg-purple-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        {/* Resto de campos similares */}
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Iniciar Sesión
        </button>
      </form>
      <div className="text-center">
        <button className="text-purple-500 hover:underline focus:outline-none" onClick={handleSubmit}>
          ¿Ya tienes una cuenta? Inicia sesión aquí
        </button>
      </div>
    </div>
  );
};

export default FormularioRegistro;
