import React from "react";

const PanelUsuario = ({ abierto, progresoUsuario }) => {
  if (!abierto) {
    return null;
  }

  // Si progresoUsuario no se ha cargado, podemos mostrar un estado de carga o nada.
  if (!progresoUsuario) {
      return null; 
  }

  return (
    <aside
      className="w-[250px] flex-shrink-0 bg-gray-800 p-4 border-r border-gray-700 text-white"
    >
      <div
        className="flex flex-col items-center mb-4"
      >
        <div className="w-20 h-20 mb-2 rounded-full bg-gray-600 flex items-center justify-center">
          <span className="text-4xl">U</span>
        </div>
        <h2 className="text-xl font-bold">Creador Novato</h2>
        <p className="text-sm text-gray-400">
          Nivel {progresoUsuario.reinosDesbloqueados.length}: Aprendiz de Píxeles
        </p>
      </div>

      <hr className="my-4 border-gray-700" />

      <div>
        <h3 className="text-lg font-semibold"> Progreso:</h3>
        <p className="text-base">Puntos de Experiencia: {progresoUsuario.puntos}</p>
        <p className="text-base">Gemas Obtenidas: {progresoUsuario.gemasCompletadas.length}</p>
        <p className="text-base">Reinos Desbloqueados: {progresoUsuario.reinosDesbloqueados.length}</p>
      </div>
    </aside>
  );
};

export default PanelUsuario;