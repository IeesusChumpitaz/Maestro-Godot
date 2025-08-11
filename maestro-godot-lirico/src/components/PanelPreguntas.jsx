import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Paper, TextField } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// Helper function for reordering
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const PreguntaSeleccionMultiple = ({ pregunta, onRespuesta, respuestaSeleccionada, esCorrecto }) => {
  const getButtonColor = (opcion) => {
    if (!respuestaSeleccionada) return 'primary';
    if (opcion === pregunta.respuestaCorrecta) return 'success';
    if (opcion === respuestaSeleccionada && esCorrecto === false) return 'error';
    return 'primary';
  };

  return (
    <Stack spacing={1}>
      {pregunta.opciones.map((opcion, index) => (
        <Button 
          key={index}
          variant="outlined"
          color={getButtonColor(opcion)}
          disabled={respuestaSeleccionada !== null}
          onClick={() => onRespuesta(opcion)}
        >
          {opcion}
        </Button>
      ))}
    </Stack>
  );
};

const PreguntaRellenarEspacio = ({ pregunta, onRespuesta, respuestaSeleccionada, esCorrecto }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onRespuesta(inputValue);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <TextField
        variant="outlined"
        size="small"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={respuestaSeleccionada !== null}
        placeholder="Tu respuesta..."
        sx={{
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: esCorrecto === null ? 'primary.main' : esCorrecto ? 'success.main' : 'error.main',
                },
                '& fieldset': {
                    borderColor: esCorrecto === null ? 'grey.500' : esCorrecto ? 'success.main' : 'error.main',
                },
            },
        }}
      />
      <Button onClick={handleSubmit} variant="contained" disabled={respuestaSeleccionada !== null}>
        Verificar
      </Button>
    </Stack>
  );
};

const PreguntaOrdenarElementos = ({ pregunta, onRespuesta, respuestaSeleccionada, esCorrecto }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Shuffle items on initial load
        setItems(pregunta.elementos.map(el => ({id: `item-${el}`, content: el})).sort(() => Math.random() - 0.5));
    }, [pregunta]);


  const onDragEnd = (result) => {
    if (!result.destination || respuestaSeleccionada) {
      return;
    }
    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
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
          <Box {...provided.droppableProps} ref={provided.innerRef} sx={{mb: 2}}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={respuestaSeleccionada !== null}>
                {(provided, snapshot) => (
                  <Paper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                      p: 2,
                      mb: 1,
                      userSelect: 'none',
                      backgroundColor: snapshot.isDragging ? 'action.hover' : 'background.paper',
                      border: esCorrecto !== null && pregunta.respuestaCorrecta[index] === item.content ? '2px solid' : 'none',
                      borderColor: esCorrecto ? 'success.main' : 'error.main',
                    }}
                  >
                    {item.content}
                  </Paper>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
    <Button onClick={handleSubmit} variant="contained" disabled={respuestaSeleccionada !== null}>
        Verificar Orden
    </Button>
    </>
  );
};


const PanelPreguntas = ({ pregunta }) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [esCorrecto, setEsCorrecto] = useState(null);

  useEffect(() => {
    setRespuestaSeleccionada(null);
    setEsCorrecto(null);
  }, [pregunta]);

  if (!pregunta || !pregunta.tipo) {
    return null;
  }

  const handleRespuesta = (respuestaUsuario) => {
    if (respuestaSeleccionada) return;

    setRespuestaSeleccionada(respuestaUsuario);
    let correcto = false;
    switch (pregunta.tipo) {
        case 'seleccion_multiple':
        case 'verdadero_falso':
            correcto = respuestaUsuario === pregunta.respuestaCorrecta;
            break;
        case 'rellenar_espacio':
            correcto = respuestaUsuario.trim().toLowerCase() === pregunta.respuestaCorrecta.toLowerCase();
            break;
        case 'ordenar_elementos':
            correcto = JSON.stringify(respuestaUsuario) === JSON.stringify(pregunta.respuestaCorrecta);
            break;
        // TODO: Add other question types
        default:
            correcto = false;
    }
    setEsCorrecto(correcto);
  };

  const renderFeedback = () => {
    if (esCorrecto === null) return null;
    return (
      <Typography color={esCorrecto ? 'success.main' : 'error.main'} sx={{ mt: 2 }}>
        {esCorrecto ? '¡Correcto! Has forjado bien este conocimiento.' : '¡Casi! Revisa la lección y vuelve a intentarlo en tu mente.'}
      </Typography>
    );
  };

  const renderPregunta = () => {
    const commonProps = {
        pregunta,
        onRespuesta: handleRespuesta,
        respuestaSeleccionada,
        esCorrecto
    };

    switch (pregunta.tipo) {
      case 'verdadero_falso':
      case 'seleccion_multiple':
        return <PreguntaSeleccionMultiple {...commonProps} />;
      case 'rellenar_espacio':
        return <PreguntaRellenarEspacio {...commonProps} />;
      case 'ordenar_elementos':
        return <PreguntaOrdenarElementos {...commonProps} />;
      // case 'asociar_conceptos':
      //   return <PreguntaAsociarConceptos {...commonProps} />;
      default:
         return <Typography>Este tipo de pregunta no está soportado aún.</Typography>;
    }
  };

  return (
    <Box sx={{ mt: 4, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Pon a prueba tu conocimiento:
      </Typography>
       <Typography variant="body1" sx={{ mb: 2 }}>
        {pregunta.enunciado}
      </Typography>
      {renderPregunta()}
      {renderFeedback()}
    </Box>
  );
};

export default PanelPreguntas;