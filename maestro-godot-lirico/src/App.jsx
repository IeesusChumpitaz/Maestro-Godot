import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import TimelineProgreso from "./components/TimelineProgreso";
import PanelUsuario from "./components/PanelUsuario";
import VisorLeccion from "./components/VisorLeccion";

function App() {
  // 1. Añadimos un nuevo estado para controlar si el panel está abierto.
  // Por defecto, estará abierto (true).
  const [panelAbierto, setPanelAbierto] = useState(true);

  const [reinoActivo, setReinoActivo] = useState(null);

  const togglePanel = () => {
    setPanelAbierto(!panelAbierto); // Invierte el valor actual (true -> false, false -> true)
  };

  const handleReinoSelect = (reino) => {
    setReinoActivo(reino);
    console.log(`Reino seleccionado: ${reino.nombre}`);
  };

  return (
    // Contenedor principal de toda la aplicación
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* HEADER */}
      {/* 2. Le pasamos la función 'togglePanel' al Header, para que el botón de menú pueda usarla */}
      <Header onMenuClick={togglePanel} />

      {/* Contenedor para el contenido principal (el área debajo del header) */}
      <Box
        sx={{ display: "flex", flexGrow: 1, overflow: "hidden", minHeight: 0 }}
      >
        {/* PANEL DE USUARIO */}
        <PanelUsuario abierto={panelAbierto} />

        {/* Contenedor para el área central */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}
        >
          {/* TIMELINE DE PROGRESIÓN */}
          <TimelineProgreso
            reinoActivo={reinoActivo}
            onReinoSelect={handleReinoSelect}
          />

          {/* VISOR DE LECCIÓN */}
          <VisorLeccion
            reino={reinoActivo}
            sx={{ flexGrow: 1, mt: 3, minHeight: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default App;
