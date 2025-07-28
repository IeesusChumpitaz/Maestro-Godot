import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";

// 1. Recibimos la prop 'abierto' que nos dirá si debemos mostrarnos o no.
const PanelUsuario = ({ abierto }) => {
  // 2. Si el panel no está abierto, no renderizamos nada.
  if (!abierto) {
    return null;
  }

  return (
    // Misión: Crear un panel lateral que muestre la información del usuario.
    // Usará un componente Avatar de MUI como placeholder para la imagen de perfil.
    // Incluirá placeholders para el nombre, nivel y puntos.
    // Usará un Divider para separar secciones.

    <Box
      component="aside"
      sx={{
        width: 250,
        flexShrink: 0,
        backgroundColor: "background.paper",
        p: 2,
        borderRight: "1px solid rgba(255,255,255,0.12)", // Un borde sutil a la derecha
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar sx={{ width: 80, height: 80, mb: 1 }}> U </Avatar>
        <Typography variant="h6">Nombre de Usuario</Typography>
        <Typography variant="body2" color="text.secondary">
          Nivel 1: Aprendiz de píxeles
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="h6"> Progreso:</Typography>
        <Typography variant="body1">Puntos de Experiencia: 0</Typography>
        <Typography variant="body1">Reinos Conquistados: 0/5</Typography>
      </Box>
    </Box>
  );
};

export default PanelUsuario;
