import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";

const PanelUsuario = ({ abierto, progresoUsuario }) => {
  if (!abierto) {
    return null;
  }

  // Si progresoUsuario no se ha cargado, podemos mostrar un estado de carga o nada.
  if (!progresoUsuario) {
      return null; 
  }

  return (
    <Box
      component="aside"
      sx={{
        width: 250,
        flexShrink: 0,
        backgroundColor: "background.paper",
        p: 2,
        borderRight: "1px solid rgba(255,255,255,0.12)",
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
        <Typography variant="h6">Creador Novato</Typography>
        <Typography variant="body2" color="text.secondary">
          Nivel {progresoUsuario.reinosDesbloqueados.length}: Aprendiz de Píxeles
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="h6"> Progreso:</Typography>
        <Typography variant="body1">Puntos de Experiencia: {progresoUsuario.puntos}</Typography>
        <Typography variant="body1">Gemas Obtenidas: {progresoUsuario.gemasCompletadas.length}</Typography>
        <Typography variant="body1">Reinos Desbloqueados: {progresoUsuario.reinosDesbloqueados.length}</Typography>
      </Box>
    </Box>
  );
};

export default PanelUsuario;