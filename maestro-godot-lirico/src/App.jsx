import { useState, useEffect } from "react";
import Header from "./components/Header";
import TimelineProgreso from "./components/TimelineProgreso";
import PanelUsuario from "./components/PanelUsuario";
import VisorLeccion from "./components/VisorLeccion";
import SelectorEspecializacion from "./components/SelectorEspecializacion";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useQuery } from "./hooks/useQuery";
import { syllabus } from "./data/syllabusData";

function App() {
  const [panelAbierto, setPanelAbierto] = useState(true);
  const [vistaActual, setVistaActual] = useState("viaje");
  const [progresoUsuario, setProgresoUsuario] = useLocalStorage(
    "progreso-usuario",
    {
      puntos: 0,
      gemasCompletadas: [],
      reinosDesbloqueados: [1],
    }
  );
  const [reinoActivo, setReinoActivo] = useState(null);
  const [leccionActiva, setLeccionActiva] = useState(null);
  const [siguienteGemaId, setSiguienteGemaId] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proximaLeccion, setProximaLeccion] = useState(null);

  const query = useQuery();
  const isDevMode = query.get("dev") === "true";

  useEffect(() => {
    let proximaGemaId = null;
    for (const reino of syllabus) {
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

    if (!reinoActivo && proximaGemaId) {
      const reinoDeProximaGema = syllabus.find((r) =>
        r.gemas.some((g) => g.id === proximaGemaId)
      );
      if (reinoDeProximaGema) {
        setReinoActivo(reinoDeProximaGema);
      }
    }
  }, [progresoUsuario, reinoActivo]);

  const checkDesbloqueoReino = (gemaId, nuevasGemasCompletadas) => {
    const reinoDeLaGema = syllabus.find((r) =>
      r.gemas.some((g) => g.id === gemaId)
    );
    if (!reinoDeLaGema) return;

    const todasLasGemasDelReinoCompletadas = reinoDeLaGema.gemas.every((g) =>
      nuevasGemasCompletadas.includes(g.id)
    );

    if (todasLasGemasDelReinoCompletadas) {
      const indiceReinoActual = syllabus.findIndex(
        (r) => r.reinoId === reinoDeLaGema.reinoId
      );
      const proximoReino = syllabus[indiceReinoActual + 1];

      if (
        proximoReino &&
        !progresoUsuario.reinosDesbloqueados.includes(proximoReino.reinoId)
      ) {
        setProgresoUsuario((prev) => ({
          ...prev,
          reinosDesbloqueados: [
            ...prev.reinosDesbloqueados,
            proximoReino.reinoId,
          ],
        }));
      } else if (!proximoReino) {
        console.log(
          "¡Tronco común completado! Pasando a la selección de especialización."
        );
        setVistaActual("especializacion");
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

      setProgresoUsuario((prev) => ({
        ...prev,
        puntos: nuevosPuntos,
        gemasCompletadas: nuevasGemas,
      }));

      checkDesbloqueoReino(gemaId, nuevasGemas);

      let proximaGema = null;
      let proximaGemaEncontrada = false;
      for (const reino of syllabus) {
        for (const gema of reino.gemas) {
          if (proximaGemaEncontrada) {
            proximaGema = gema;
            break;
          }
          if (gema.id === gemaId) {
            proximaGemaEncontrada = true;
          }
        }
        if (proximaGema) break;
      }
      if (proximaGema) {
        setProximaLeccion(proximaGema);
        setModalAbierto(true);
      }
    }
  };

  const handleContinuar = () => {
    setLeccionActiva(proximaLeccion);
    setModalAbierto(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header onMenuClick={togglePanel} />
      <div className="flex flex-grow overflow-hidden min-h-0">
        <PanelUsuario
          abierto={panelAbierto}
          progresoUsuario={progresoUsuario}
        />
        <main className="flex-grow p-3 flex flex-col">
          {isDevMode && vistaActual === "viaje" && (
            <button
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setVistaActual("especializacion")}
            >
              Ir a Especialización (DEBUG)
            </button>
          )}
          {vistaActual === "viaje" ? (
            <>
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
                className="flex-grow mt-3 min-h-0"
                gemasCompletadas={progresoUsuario.gemasCompletadas}
                onGemaCompletada={handleGemaCompletada}
              />
            </>
          ) : (
            <SelectorEspecializacion />
          )}
        </main>
      </div>
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
            <h2 className="text-xl font-bold mb-4">¡Lección Completada!</h2>
            {proximaLeccion && (
              <p className="mb-4">
                ¿Listo para la siguiente lección:{" "}
                <strong className="font-semibold">
                  {proximaLeccion.nombre}
                </strong>
                ?
              </p>
            )}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalAbierto(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Quedarse
              </button>
              <button
                onClick={handleContinuar}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
