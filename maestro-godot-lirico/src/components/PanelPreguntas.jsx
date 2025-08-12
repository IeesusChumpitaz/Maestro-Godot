import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// Helper function for reordering
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const PreguntaSeleccionMultiple = ({ pregunta, onRespuesta, respuestaSeleccionada, esCorrecto }) => {
  const getButtonClasses = (opcion) => {
    let classes = "w-full px-4 py-2 rounded-md border transition-colors duration-200 ";
    if (respuestaSeleccionada === null) {
      classes += "bg-gray-700 border-gray-600 text-white hover:bg-gray-600";
    } else {
      if (opcion === pregunta.respuestaCorrecta) {
        classes += "bg-green-600 border-green-700 text-white";
      } else if (opcion === respuestaSeleccionada && esCorrecto === false) {
        classes += "bg-red-600 border-red-700 text-white";
      } else {
        classes += "bg-gray-700 border-gray-600 text-white opacity-50 cursor-not-allowed";
      }
    }
    return classes;
  };

  return (
    <div className="space-y-2">
      {pregunta.opciones.map((opcion, index) => (
        <button 
          key={index}
          className={getButtonClasses(opcion)}
          disabled={respuestaSeleccionada !== null}
          onClick={() => onRespuesta(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
};

const PreguntaRellenarEspacio = ({ pregunta, onRespuesta, respuestaSeleccionada, esCorrecto }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onRespuesta(inputValue);
  };

  const getInputClasses = () => {
    let classes = "flex-grow p-2 rounded-md bg-gray-700 border focus:outline-none focus:ring-2 ";
    if (esCorrecto === null) {
      classes += "border-gray-600 focus:border-blue-500 focus:ring-blue-500";
    } else if (esCorrecto === true) {
      classes += "border-green-500 focus:border-green-500 focus:ring-green-500";
    } else {
      classes += "border-red-500 focus:border-red-500 focus:ring-red-500";
    }
    return classes;
  };

  return (
    <div className="flex space-x-2 items-center">
      <input
        type="text"
        className={getInputClasses()}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={respuestaSeleccionada !== null}
        placeholder="Tu respuesta..."
      />
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={respuestaSeleccionada !== null}>
        Verificar
      </button>
    </div>
  );
};

const PreguntaOrdenarElementos = ({ pregunta, onRespuesta, respuestaSeleccionada, esCorrecto }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(pregunta.elementos.map(el => ({id: `item-${el}`, content: el})).sort(() => Math.random() - 0.5));
    }, [pregunta]);


  const onDragEnd = (result) => {
    if (!result.destination || respuestaSeleccionada) return;
    const newItems = reorder(items, result.source.index, result.destination.index);
    setItems(newItems);
  };
  
  const handleSubmit = () => {
      const userOrder = items.map(item => item.content);
      onRespuesta(userOrder);
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="mb-4">
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={respuestaSeleccionada !== null}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
                    className={`p-3 mb-2 rounded-md cursor-grab 
                      ${snapshot.isDragging ? 'bg-blue-700 shadow-lg' : 'bg-gray-700 shadow'}
                      ${respuestaSeleccionada !== null ? 'opacity-70 cursor-not-allowed' : ''}
                    `}>
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={respuestaSeleccionada !== null}>
        Verificar Orden
    </button>
    </>
  );
};


const PanelPreguntas = ({ preguntas, onQuizCompleto }) => {
  const [preguntaActualIndex, setPreguntaActualIndex] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [quizTerminado, setQuizTerminado] = useState(false);

  const preguntaActual = preguntas[preguntaActualIndex];
  const respuestaActual = respuestas[preguntaActualIndex];

  const handleRespuesta = (respuestaUsuario) => {
    if (respuestaActual) return;

    let esCorrecto = false;
    switch (preguntaActual.tipo) {
        case 'seleccion_multiple':
        case 'verdadero_falso':
            esCorrecto = respuestaUsuario === preguntaActual.respuestaCorrecta;
            break;
        case 'rellenar_espacio':
            esCorrecto = respuestaUsuario.trim().toLowerCase() === preguntaActual.respuestaCorrecta.toLowerCase();
            break;
        case 'ordenar_elementos':
            esCorrecto = JSON.stringify(respuestaUsuario) === JSON.stringify(preguntaActual.respuestaCorrecta);
            break;
        default: break;
    }

    setRespuestas([...respuestas, { respuesta: respuestaUsuario, esCorrecto }]);
  };

  const handleSiguiente = () => {
      if (preguntaActualIndex < preguntas.length - 1) {
          setPreguntaActualIndex(preguntaActualIndex + 1);
      } else {
          setQuizTerminado(true);
          const todasCorrectas = respuestas.every(r => r.esCorrecto);
          if(todasCorrectas){
              onQuizCompleto();
          }
      }
  }

  const renderFeedback = () => {
    if (!respuestaActual) return null;
    const { esCorrecto } = respuestaActual;
    return (
        <div className="mt-4">
            <p className={`text-lg ${esCorrecto ? 'text-green-500' : 'text-red-500'}`}>
                {esCorrecto ? '¡Correcto!' : 'Incorrecto.'}
            </p>
            <button onClick={handleSiguiente} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {preguntaActualIndex < preguntas.length - 1 ? 'Siguiente' : 'Finalizar'}
            </button>
        </div>
    );
  };

  const renderPregunta = () => {
    const commonProps = {
        pregunta: preguntaActual,
        onRespuesta: handleRespuesta,
        respuestaSeleccionada: respuestaActual ? respuestaActual.respuesta : null,
        esCorrecto: respuestaActual ? respuestaActual.esCorrecto : null
    };

    switch (preguntaActual.tipo) {
      case 'verdadero_falso':
      case 'seleccion_multiple':
        return <PreguntaSeleccionMultiple {...commonProps} />;
      case 'rellenar_espacio':
        return <PreguntaRellenarEspacio {...commonProps} />;
      case 'ordenar_elementos':
        return <PreguntaOrdenarElementos {...commonProps} />;
      default:
         return <p className="text-gray-400">Este tipo de pregunta no está soportado aún.</p>;
    }
  };
  
  if(quizTerminado){
      const correctas = respuestas.filter(r => r.esCorrecto).length;
      const total = preguntas.length;
      const todasCorrectas = correctas === total;
      return (
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quiz Finalizado</h3>
              <p className="text-lg">Has respondido {correctas} de {total} preguntas correctamente.</p>
              {!todasCorrectas && <p className="text-red-500 mt-2">Debes responder todas las preguntas correctamente para completar la lección.</p>}
          </div>
      )
  }

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">
        Prueba de Conocimiento ({preguntaActualIndex + 1}/{preguntas.length})
      </h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${((preguntaActualIndex + 1) / preguntas.length) * 100}%` }}></div>
      </div>
       <p className="text-lg mb-4">
        {preguntaActual.enunciado}
      </p>
      {renderPregunta()}
      {renderFeedback()}
    </div>
  );
};

export default PanelPreguntas;