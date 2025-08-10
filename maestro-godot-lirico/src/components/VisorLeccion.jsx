import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
// 1. Importamos nuestra imagen de prueba
import visualPlaceholder from "../assets/visual-placeholder.png";

const VisorLeccion = ({ reino, sx }) => {
  const [leccionActiva, setLeccionActiva] = useState(null);

  const handleGemaClick = (gema) => {
    setLeccionActiva(gema);
  };

  const volverALista = () => {
    setLeccionActiva(null);
  };

  // 2. NUEVA FUNCIÓN: El Parser Visual
  const parsearContenido = (texto) => {
    // Expresión regular para encontrar nuestros placeholders [VISUAL: ...]
    const regex = /\[VISUAL:(.*?)\]/g;
    const partes = texto.split(regex);

    return partes.map((parte, index) => {
      // Si el índice es impar, es una descripción de visual.
      if (index % 2 === 1) {
        return (
          <Box
            key={index}
            component="img"
            src={visualPlaceholder}
            alt={parte.trim()} // Usamos la descripción como texto alternativo
            sx={{ width: "100%", borderRadius: 2, my: 2 }}
          />
        );
      }
      // Si el índice es par, es texto normal.
      return (
        <Typography
          key={index}
          component="span"
          variant="body1"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {parte}
        </Typography>
      );
    });
  };

  // Esta función ahora contiene TODA la lógica de qué mostrar.
  const renderContent = () => {
    // Caso 1: Hay una lección activa.
    if (leccionActiva) {
      return (
        <>
          <Typography variant="h4" component="h2" gutterBottom>
            {leccionActiva.nombre}
          </Typography>

          {/* 3. Usamos el parser en lugar de mostrar el texto directamente */}
          <Box>{parsearContenido(leccionActiva.contenido)}</Box>

          <Typography
            component="div"
            variant="body1"
            sx={{ whiteSpace: "pre-wrap" }}
          >
            {leccionActiva.contenido}
          </Typography>
          <Button onClick={volverALista} sx={{ mt: 2 }}>
            Volver a las Gemas
          </Button>
        </>
      );
    }

    // Caso 2: No hay lección activa, PERO SÍ hay un reino activo.
    if (reino) {
      return (
        <>
          <Typography variant="h4" component="h2" gutterBottom>
            Reino: {reino.nombre}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Selecciona una Gema:
          </Typography>
          <List dense>
            {reino.gemas.map((gema) => (
              <ListItem key={gema.id} disablePadding>
                <ListItemButton onClick={() => handleGemaClick(gema)}>
                  <ListItemText primary={gema.nombre} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      );
    }

    // Caso 3 (por defecto): No hay ni lección ni reino activo.
    return (
      <>
        <Typography variant="h4" component="h2" gutterBottom>
          El Crisol del Conocimiento
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Selecciona un Reino para desvelar sus Gemas.
        </Typography>
      </>
    );
  };

  // El return principal ahora es súper limpio.
  return (
    <Card
      sx={{ ...sx, display: "flex", flexDirection: "column", minHeight: 0 }}
    >
      <CardContent sx={{ p: 4, overflowY: "auto" }}>
        {/* Simplemente llamamos a la función que decide qué renderizar */}
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default VisorLeccion;
