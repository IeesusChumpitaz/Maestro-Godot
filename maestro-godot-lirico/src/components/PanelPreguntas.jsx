import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';

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

  const handleRespuesta = (opcion) => {
    if (respuestaSeleccionada) return;
    setRespuestaSeleccionada(opcion);
    setEsCorrecto(opcion === pregunta.respuestaCorrecta);
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
    switch (pregunta.tipo) {
      case 'arrastrar_y_soltar':
        const dropZoneColor = esCorrecto === null ? 'grey.700' : esCorrecto ? 'success.main' : 'error.main';
        return (
          <Box>
            <Typography variant="body1" sx={{ mb: 2 }}>{pregunta.enunciado}</Typography>
            <Paper 
              variant="outlined"
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                borderColor: dropZoneColor, 
                borderWidth: 2, 
                borderStyle: 'dashed',
                mb: 2
              }}
            >
              <Typography sx={{ color: dropZoneColor }}>
                {respuestaSeleccionada ? `Has soltado: ${respuestaSeleccionada}` : pregunta.opciones.panel}
              </Typography>
            </Paper>
            <Typography variant="body2" sx={{ mb: 1 }}>Haz clic en la opción que arrastrarías a la zona de arriba:</Typography>
            <Stack direction="row" spacing={1}>
              {pregunta.opciones.items.map((item, index) => (
                <Button 
                  key={index} 
                  variant="outlined" 
                  onClick={() => handleRespuesta(item)}
                  disabled={respuestaSeleccionada !== null}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Box>
        );

      case 'verdadero_falso':
      case 'seleccion_multiple':
      default:
        const getButtonColor = (opcion) => {
          if (!respuestaSeleccionada) return 'primary';
          if (opcion === pregunta.respuestaCorrecta) return 'success';
          if (opcion === respuestaSeleccionada && !esCorrecto) return 'error';
          return 'primary';
        };
        return (
          <Box>
            <Typography variant="body1" sx={{ mb: 2 }}>{pregunta.enunciado}</Typography>
            <Stack spacing={1}>
              {pregunta.opciones.map((opcion, index) => (
                <Button 
                  key={index}
                  variant="outlined"
                  color={getButtonColor(opcion)}
                  disabled={respuestaSeleccionada !== null}
                  onClick={() => handleRespuesta(opcion)}
                >
                  {opcion}
                </Button>
              ))}
            </Stack>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ mt: 4, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Pon a prueba tu conocimiento:
      </Typography>
      {renderPregunta()}
      {renderFeedback()}
    </Box>
  );
};

export default PanelPreguntas;
