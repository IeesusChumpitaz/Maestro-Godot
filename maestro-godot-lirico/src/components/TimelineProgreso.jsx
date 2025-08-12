import React, { useState } from "react";

const TimelineProgreso = ({ syllabus, reinoActivo, onReinoSelect, reinosDesbloqueados }) => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div
      className="w-full p-4 bg-gray-800 rounded-lg shadow-md"
    >
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-semibold text-white flex-shrink-0">
          Tu Viaje del Héroe
        </h3>
        {visible && (
          <div
            className="flex flex-wrap justify-center flex-grow gap-2"
          >
            {syllabus.map((reino) => {
              const estaActivo = reinoActivo && reinoActivo.reinoId === reino.reinoId;
              const estaDesbloqueado = reinosDesbloqueados.includes(reino.reinoId);

              return (
                <button
                  key={reino.reinoId}
                  className={`px-4 py-2 rounded-full text-sm font-medium
                    ${estaActivo ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}
                    ${!estaDesbloqueado ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}
                  `}
                  disabled={!estaDesbloqueado}
                  onClick={() => {
                    if (estaDesbloqueado) {
                        onReinoSelect(reino);
                    }
                  }}
                >
                  {reino.nombre}
                </button>
              );
            })}
          </div>
        )}
        <button onClick={toggleVisibility} className="ml-auto p-1 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
          {visible ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414L5.586 8H4a1 1 0 000 2h1.586l-3.293 3.293a1 1 0 101.414 1.414L8 11.414V13a1 1 0 102 0v-1.586l3.293 3.293a1 1 0 001.414-1.414L11.414 10H13a1 1 0 100-2h-1.586l3.293-3.293a1 1 0 10-1.414-1.414L10 8.586V7a1 1 0 10-2 0v1.586L3.707 2.293zM10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default TimelineProgreso;