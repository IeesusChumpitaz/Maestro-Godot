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
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import { fetchLeccionContent } from "../services/geminiService"; // 1. Importamos nuestro servicio

const VisorLeccion = ({ reino }) => {
  // 2. Añadimos nuevos estados para manejar el contenido, la carga y los errores
  const [leccionActiva, setLeccionActiva] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // 3. Esta es la función que se ejecuta al hacer clic en una Gema
  const handleGemaClick = async (gema) => {
    setCargando(true);
    setError(null);
    setLeccionActiva({ nombre: gema.nombre, contenido: "" }); // Mostramos el título inmediatamente

    try {
      // El prompt que le daremos al "Maestro Godot Lírico"
      const prompt = `Actúa como 'Maestro Godot Lírico'. Explica el concepto "${gema.nombre}" de forma lírica, evocadora, usando bastantes ejemplos visuales y usando principios de neuroaprendizaje. La explicación debe ser para un principiante.`;

      const contenidoGenerado = await fetchLeccionContent(prompt);

      setLeccionActiva({ nombre: gema.nombre, contenido: contenidoGenerado });
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  // 4. Función para volver a la lista de gemas
  const volverALista = () => {
    setLeccionActiva(null);
    setError(null);
  };

  // 5. Renderizado Lógico
  const renderContent = () => {
    if (cargando) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      return <Alert severity="error">Error del Maestro: {error}</Alert>;
    }
    if (leccionActiva) {
      return (
        <>
          <Typography variant="h4" component="h2" gutterBottom>
            {leccionActiva.nombre}
          </Typography>
          {/* Usamos pre-wrap para respetar los saltos de línea de Gemini */}
          <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
            {leccionActiva.contenido}
          </Typography>
          <Button onClick={volverALista} sx={{ mt: 2 }}>
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
    // Estado por defecto (ningún reino seleccionado)
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
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      <CardContent sx={{ p: 4, overflowY: "auto" }}>
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default VisorLeccion;
