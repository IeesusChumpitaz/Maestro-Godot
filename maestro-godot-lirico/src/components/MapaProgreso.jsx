import React from "react";
// Importamos los componentes que vamos a usar de MUI
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Un ícono para el desplegable

const syllabusFalso = [
  {
    id: 1,
    reino: "Reino 1: El Escenario Digital",
    gemas: [
      "¿Qué es un Motor de videojuegos?",
      "Tu Primer Vistazo a Godot",
      "Nodos y Escenas",
    ],
  },
  {
    id: 2,
    reino: "Reino 2: El Lenguaje de la Creación (GDScript)",
    gemas: [
      "Hablando con el Motor",
      "Variables: Cofres para Tesoros",
      "Condicionales: Encrucijadas del Código",
    ],
  },
  {
    id: 3,
    reino: "Reino 3: El Movimiento es Vida",
    gemas: [
      "Capturando la Entrada del Jugador",
      "Física 2D: Gravedad y Colisiones",
    ],
  },
];
// 1. Recibimos la nueva prop 'onLeccionSelect'
const MapaProgreso = ({ onLeccionSelect }) => {
  return (
    // Box es como un <div> pero con superpoderes de estilo de MUI
    <Box sx={{ padding: 2, width: 350 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Mapa de Progresión
      </Typography>

      {/*Hacemos un "map" para crear un Accordion por cada 'reino' en nuestros datos */}
      {/* 2.Dentro del primer .map() para los módulos */}
      {syllabusFalso.map((modulo) => (
        <Accordion key={modulo.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{modulo.reino}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {/* Dentro de cada Accordion, hacemos otro "map" para listar las 'gemas' */}
              {/* 3. Dentro del segundo .map() para las gemas */}
              {modulo.gemas.map((gema, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => onLeccionSelect(gema)}>
                    <ListItemText primary={gema} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default MapaProgreso;
