import React, { useState, useEffect } from "react";
import visualPlaceholder from "../assets/placeholder.png";
import PanelPreguntas from './PanelPreguntas';

const VisorLeccion = ({ 
    reino, 
    className, 
    gemasCompletadas, 
    onGemaCompletada,
    leccionActiva,
    onGemaClick,
    siguienteGemaId
}) => {
  const [modoQuiz, setModoQuiz] = useState(false);

  useEffect(() => {
    setModoQuiz(false);
  }, [leccionActiva]);

  const volverALista = () => {
    onGemaClick(null);
  };

  const parsearContenido = (texto) => {
    if (!texto) return <p className="text-gray-400">Contenido próximamente...</p>;
    const regex = /\[VISUAL:(.*?)\]/g;
    const partes = texto.split(regex);
    return partes.map((parte, index) => {
      if (index % 2 === 1) {
        return (
          <img
            key={index}
            src={visualPlaceholder}
            alt={parte.trim()}
            className="w-full rounded-lg my-4"
          />
        );
      }
      return (
        <span
          key={index}
          className="text-base leading-relaxed whitespace-pre-wrap"
        >
          {parte}
        </span>
      );
    });
  };

  const handleQuizCompleto = () => {
    onGemaCompletada(leccionActiva.id);
    // Maybe open a modal here in the future
  };

  const renderContent = () => {
    if (leccionActiva) {
      return (
        <>
          <h2 className="text-3xl font-bold mb-4">
            {leccionActiva.nombre}
          </h2>

          {modoQuiz ? (
            <PanelPreguntas 
              preguntas={leccionActiva.preguntas}
              onQuizCompleto={handleQuizCompleto}
            />
          ) : (
            <>
              <div>{parsearContenido(leccionActiva.contenido)}</div>
              <button onClick={() => setModoQuiz(true)} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Comenzar Prueba
              </button>
            </>
          )}

          <button onClick={volverALista} className="mt-4 text-blue-400 hover:underline">
            Volver a las Gemas
          </button>
        </>
      );
    }

    if (reino) {
      return (
        <>
          <h2 className="text-3xl font-bold mb-4">
            Reino: {reino.nombre}
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            Selecciona una Gema para comenzar tu viaje o repasar lo aprendido:
          </p>
          <ul className="space-y-2">
            {reino.gemas.map((gema) => {
              const estaCompletada = gemasCompletadas.includes(gema.id);
              const esSiguiente = gema.id === siguienteGemaId;
              const isClickable = estaCompletada || esSiguiente;

              return (
                <li key={gema.id}>
                  <button 
                    onClick={() => isClickable && onGemaClick(gema)}
                    disabled={!isClickable}
                    className={`w-full text-left p-3 rounded-md transition-colors duration-200
                      ${isClickable ? 'hover:bg-gray-700' : 'cursor-not-allowed opacity-50'}
                      ${esSiguiente ? 'border-l-4 border-blue-500 bg-gray-700' : 'border-l-4 border-transparent'}
                    `}
                  >
                    <div className="font-medium text-lg">{gema.nombre}</div>
                    <div className="text-sm text-gray-400">
                        {!isClickable ? "Bloqueada" : (estaCompletada ? "Completada" : "Siguiente lección")}
                    </div>
                    {estaCompletada && <span className="ml-2">✅</span>}
                    {!estaCompletada && !esSiguiente && <span className="ml-2">🔒</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      );
    }

    return (
      <>
        <h2 className="text-3xl font-bold mb-4">
          El Crisol del Conocimiento
        </h2>
        <p className="text-lg text-gray-400">
          Selecciona un Reino en la línea de tiempo para comenzar tu aventura.
        </p>
      </>
    );
  };

  return (
    <div
      className={`flex flex-col bg-gray-800 rounded-lg shadow-md ${className}`}
    >
      <div className="p-6 overflow-y-auto flex-grow">
        {renderContent()}
      </div>
    </div>
  );
};

export default VisorLeccion;
