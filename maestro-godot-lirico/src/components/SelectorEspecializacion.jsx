import React from 'react';
import placeholder from '../assets/placeholder.png'; // Importamos el placeholder local

// Datos de prueba para las especializaciones
const especializaciones = [
  { id: 'plataformas2d', nombre: 'Plataformas 2D', desc: 'Domina el arte del salto, la gravedad y el control preciso.', imagen: placeholder },
  { id: 'rpg', nombre: 'Aventura RPG', desc: 'Crea mundos, historias y sistemas de combate complejos.', imagen: placeholder },
  { id: 'estrategia', nombre: 'Estrategia', desc: 'Gestiona recursos, comanda ejércitos y planifica la victoria.', imagen: placeholder },
];

const SelectorEspecializacion = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-white">Elige tu Senda de Especialización</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {especializaciones.map((esp) => (
          <div key={esp.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button onClick={() => console.log(`Seleccionada: ${esp.nombre}`)} className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
              <img
                src={esp.imagen}
                alt={esp.nombre}
                className="w-full h-40 object-cover bg-gray-700"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {esp.nombre}
                </h3>
                <p className="text-gray-400 text-sm">
                  {esp.desc}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorEspecializacion;
