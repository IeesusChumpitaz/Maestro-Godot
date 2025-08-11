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
import visualPlaceholder from "../assets/placeholder.png";
import PanelPreguntas from './PanelPreguntas'; // 1. Importamos el componente de preguntas

const VisorLeccion = ({ reino, sx }) => {
  const [leccionActiva, setLeccionActiva] = useState(null);

  const handleGemaClick = (gema) => {
    setLeccionActiva(gema);
  };

  const volverALista = () => {
    setLeccionActiva(null);
  };

  const parsearContenido = (texto) => {
    // Guardia por si una gema aún no tiene contenido
    if (!texto) return <Typography>Contenido próximamente...</Typography>;

    const regex = /\[VISUAL:(.*?)\]/g;
    const partes = texto.split(regex);

    return partes.map((parte, index) => {
      if (index % 2 === 1) {
        return (
          <Box
            key={index}
            component="img"
            src={visualPlaceholder}
            alt={parte.trim()}
            sx={{ width: "100%", borderRadius: 2, my: 2 }}
          />
        );
      }
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

  const renderContent = () => {
    if (leccionActiva) {
      return (
        <>
          <Typography variant="h4" component="h2" gutterBottom>
            {leccionActiva.nombre}
          </Typography>

          <Box>{parsearContenido(leccionActiva.contenido)}</Box>

          {/* 2. Integramos el panel de preguntas aquí */}
          <PanelPreguntas pregunta={leccionActiva.pregunta} />

          <Button onClick={volverALista} sx={{ mt: 4 }}>
            Volver a las Gemas
          </Button>
        </>
      );
    }

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

  return (
    <Card
      sx={{ ...sx, display: "flex", flexDirection: "column", minHeight: 0 }}
    >
      <CardContent sx={{ p: 4, overflowY: "auto" }}>
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default VisorLeccion;