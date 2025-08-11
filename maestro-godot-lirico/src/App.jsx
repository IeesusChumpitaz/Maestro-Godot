import { useState, useEffect } from "react";
import { Box, Modal, Card, CardContent, Typography, Button } from "@mui/material";
import Header from "./components/Header";
import TimelineProgreso from "./components/TimelineProgreso";
import PanelUsuario from "./components/PanelUsuario";
import VisorLeccion from "./components/VisorLeccion";
import { useLocalStorage } from './hooks/useLocalStorage';
import { syllabus } from './data/syllabusData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [panelAbierto, setPanelAbierto] = useState(true);
  const [progresoUsuario, setProgresoUsuario] = useLocalStorage('progreso-usuario', {
    puntos: 0,
    gemasCompletadas: [],
    reinosDesbloqueados: [1]
  });
  const [reinoActivo, setReinoActivo] = useState(null);
  const [leccionActiva, setLeccionActiva] = useState(null);
  const [siguienteGemaId, setSiguienteGemaId] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proximaLeccion, setProximaLeccion] = useState(null);

  useEffect(() => {
    // Determina cuál es la siguiente gema a completar en general
    let proximaGemaId = null;
    for (const reino of syllabus) {
      // Solo buscamos en reinos desbloqueados
      if (progresoUsuario.reinosDesbloqueados.includes(reino.reinoId)) {
        for (const gema of reino.gemas) {
          if (!progresoUsuario.gemasCompletadas.includes(gema.id)) {
            proximaGemaId = gema.id;
            break;
          }
        }
      }
      if (proximaGemaId) break;
    }
    setSiguienteGemaId(proximaGemaId);

    // Al cargar la app, si no hay un reino activo, establece el que contiene la proxima gema
    if (!reinoActivo && proximaGemaId) {
        const reinoDeProximaGema = syllabus.find(r => r.gemas.some(g => g.id === proximaGemaId));
        if(reinoDeProximaGema) {
            setReinoActivo(reinoDeProximaGema);
        }
    }

  }, [progresoUsuario, reinoActivo]);

  const checkDesbloqueoReino = (gemaId, nuevasGemasCompletadas) => {
    const gemaActual = syllabus.flatMap(r => r.gemas).find(g => g.id === gemaId);
    if (!gemaActual) return;

    const reinoDeLaGema = syllabus.find(r => r.gemas.some(g => g.id === gemaId));
    if (!reinoDeLaGema) return;

    const todasLasGemasDelReinoCompletadas = reinoDeLaGema.gemas.every(g => nuevasGemasCompletadas.includes(g.id));

    if (todasLasGemasDelReinoCompletadas) {
        const indiceReinoActual = syllabus.findIndex(r => r.reinoId === reinoDeLaGema.reinoId);
        const proximoReino = syllabus[indiceReinoActual + 1];
        if (proximoReino && !progresoUsuario.reinosDesbloqueados.includes(proximoReino.reinoId)) {
            setProgresoUsuario(prev => ({
                ...prev,
                reinosDesbloqueados: [...prev.reinosDesbloqueados, proximoReino.reinoId]
            }));
        }
    }
  };

  const togglePanel = () => setPanelAbierto(!panelAbierto);

  const handleReinoSelect = (reino) => {
    setReinoActivo(reino);
    setLeccionActiva(null);
  };

  const handleGemaClick = (gema) => setLeccionActiva(gema);

  const handleGemaCompletada = (gemaId) => {
    if (!progresoUsuario.gemasCompletadas.includes(gemaId)) {
      const nuevosPuntos = progresoUsuario.puntos + 10;
      const nuevasGemas = [...progresoUsuario.gemasCompletadas, gemaId];
      
      setProgresoUsuario(prev => ({
        ...prev,
        puntos: nuevosPuntos,
        gemasCompletadas: nuevasGemas
      }));

      checkDesbloqueoReino(gemaId, nuevasGemas);

      // Find the next lesson to show in the modal
      let proximaGema = null;
      let proximaGemaEncontrada = false;
      for (const reino of syllabus) {
          for (const gema of reino.gemas) {
              if(proximaGemaEncontrada) {
                  proximaGema = gema;
                  break;
              }
              if(gema.id === gemaId) {
                  proximaGemaEncontrada = true;
              }
          }
          if(proximaGema) break;
      }
      if(proximaGema){
          setProximaLeccion(proximaGema);
          setModalAbierto(true);
      }
    }
  };
  
  const handleContinuar = () => {
      setLeccionActiva(proximaLeccion);
      setModalAbierto(false);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header onMenuClick={togglePanel} />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden', minHeight: 0 }}>
        <PanelUsuario abierto={panelAbierto} progresoUsuario={progresoUsuario} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
          <TimelineProgreso 
            syllabus={syllabus}
            reinoActivo={reinoActivo}
            onReinoSelect={handleReinoSelect}
            reinosDesbloqueados={progresoUsuario.reinosDesbloqueados}
          />
          <VisorLeccion 
            reino={reinoActivo} 
            leccionActiva={leccionActiva}
            onGemaClick={handleGemaClick}
            siguienteGemaId={siguienteGemaId}
            sx={{ flexGrow: 1, mt: 3, minHeight: 0 }}
            gemasCompletadas={progresoUsuario.gemasCompletadas}
            onGemaCompletada={handleGemaCompletada}
          />
        </Box>
      </Box>
      <Modal
        open={modalAbierto}
        onClose={() => setModalAbierto(false)}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            ¡Lección Completada!
          </Typography>
          {proximaLeccion && 
            <Typography sx={{ mt: 2 }}>
                ¿Listo para la siguiente lección: <strong>{proximaLeccion.nombre}</strong>?
            </Typography>
          }
          <Box sx={{mt: 3, display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={() => setModalAbierto(false)}>Quedarse</Button>
            <Button variant="contained" onClick={handleContinuar} sx={{ml: 2}}>Continuar</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default App;