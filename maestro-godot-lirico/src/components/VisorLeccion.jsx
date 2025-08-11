import React, { useState, useEffect } from "react";
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
import PanelPreguntas from './PanelPreguntas';

const VisorLeccion = ({ 
    reino, 
    sx, 
    gemasCompletadas, 
    onGemaCompletada,
    leccionActiva,
    onGemaClick,
    siguienteGemaId
}) => {
  const [modoQuiz, setModoQuiz] = useState(false);

  useEffect(() => {
    setModoQuiz(false);
  }, [leccionActiva]);

  const volverALista = () => {
    onGemaClick(null);
  };

  const parsearContenido = (texto) => {
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

  const handleQuizCompleto = () => {
    onGemaCompletada(leccionActiva.id);
    // Maybe open a modal here in the future
  };

  const renderContent = () => {
    if (leccionActiva) {
      return (
        <>
          <Typography variant="h4" component="h2" gutterBottom>
            {leccionActiva.nombre}
          </Typography>

          {modoQuiz ? (
            <PanelPreguntas 
              preguntas={leccionActiva.preguntas}
              onQuizCompleto={handleQuizCompleto}
            />
          ) : (
            <>
              <Box>{parsearContenido(leccionActiva.contenido)}</Box>
              <Button variant="contained" onClick={() => setModoQuiz(true)} sx={{ mt: 4 }}>
                Comenzar Prueba
              </Button>
            </>
          )}

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
            Selecciona una Gema para comenzar tu viaje o repasar lo aprendido:
          </Typography>
          <List dense>
            {reino.gemas.map((gema) => {
              const estaCompletada = gemasCompletadas.includes(gema.id);
              const esSiguiente = gema.id === siguienteGemaId;
              const isClickable = estaCompletada || esSiguiente;

              return (
                <ListItem key={gema.id} disablePadding>
                  <ListItemButton 
                    onClick={() => isClickable && onGemaClick(gema)}
                    disabled={!isClickable}
                    sx={{ 
                        pl: 2, 
                        borderLeft: esSiguiente ? '4px solid' : '4px solid transparent',
                        borderColor: esSiguiente ? 'primary.main' : 'transparent'
                    }}
                  >
                    <ListItemText 
                        primary={gema.nombre} 
                        secondary={!isClickable ? "Bloqueada" : (estaCompletada ? "Completada" : "Siguiente lección")}
                    />
                    {estaCompletada && ' ✅'}
                    {!estaCompletada && !esSiguiente && ' 🔒'}
                  </ListItemButton>
                </ListItem>
              );
            })}
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
          Selecciona un Reino en la línea de tiempo para comenzar tu aventura.
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
