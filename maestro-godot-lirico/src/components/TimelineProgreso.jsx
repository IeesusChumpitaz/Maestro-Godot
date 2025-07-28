import React, { useState } from "react"; // Importamos useState para manejar el estado de visibilidad
import { Box, Typography, Stack, Chip, IconButton } from "@mui/material";
//  Importamos los íconos que usaremos para el botón de ocultar/mostrar
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { syllabus } from "../data/syllabusData";

const TimelineProgreso = ({ reinoActivo, onReinoSelect }) => {
  // Añadimos un estado para controlar si la línea de tiempo está visible o no.
  // Por defecto, estará visible (true).
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible); // Invierte el valor actual
  };

  return (
    // Misión: Crear un contenedor para la línea de tiempo de progresión.
    // Usaremos un Stack para alinear los "Reinos" horizontalmente.
    // Cada Reino será un componente Chip de MUI.
    // Para simular el bloqueo, deshabilitaremos todos los reinos excepto el primero.

    <Box
      sx={{
        width: "100%",
        padding: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      {/* Usamos un Stack principal con dirección 'row' para alinear todo horizontalmente */}
      {/* alignItems: 'center' se asegura de que el texto y los chips estén centrados verticalmente */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          Tu viaje del Héroe
        </Typography>
        {/* Renderizado condicional: El Stack con los chips SOLO se muestra si el estado 'visible' es true */}
        {visible && (
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "center", flexGrow: 1 }}
          >
            {syllabus.map((reino, index) => {
              const estaActivo = reinoActivo && reinoActivo.id === reino.id;
              return (
                <Chip
                  key={reino.id}
                  label={reino.nombre}
                  variant={estaActivo ? "filled" : "outlined"}
                  color={estaActivo ? "primary" : "default"}
                  // Lógica de bloqueo simple: solo el primer reino (índice 0) está habilitado.
                  disabled={index > 0}
                  onClick={() => {
                    onReinoSelect(reino);
                  }}
                />
              );
            })}
          </Stack>
        )}
        {/* Añadimos el IconButton para controlar la visibilidad. Siempre estará visible */}
        <IconButton onClick={toggleVisibility} size="small" sx={{ ml: "auto" }}>
          {/* Mostramos un ícono diferente dependiendo del estado 'visible' */}
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TimelineProgreso;
