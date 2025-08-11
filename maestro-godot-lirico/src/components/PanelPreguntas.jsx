import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PanelPreguntas = ({ pregunta }) => {
  // Si no hay pregunta para esta lección, no renderizamos nada.
  if (!pregunta) {
    return null;
  }

  const handleRespuestaClick = (opcion) => {
    // Por ahora, solo mostraremos la opción seleccionada en la consola.
    console.log(`Respuesta seleccionada: ${opcion}`);
  };

  return (
    <Box sx={{ mt: 4, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Pon a prueba tu conocimiento:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {pregunta.enunciado}
      </Typography>
      <Stack spacing={1}>
        {pregunta.opciones.map((opcion, index) => (
          <Button 
            key={index}
            variant="outlined"
            onClick={() => handleRespuestaClick(opcion)}
          >
            {opcion}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default PanelPreguntas;