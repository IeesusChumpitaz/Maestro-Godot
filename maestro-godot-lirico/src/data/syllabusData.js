// src/data/syllabusData.js
// La estructura de conocimiento para el viaje del Creador en Godot.

export const syllabus = [
  {
    reinoId: 1,
    nombre: "El Escenario Digital: Los Cimientos de la Creación",
    nivel: "Básico",
    gemas: [
      {
        id: 101,
        nombre: "El Portal de Proyectos: Tu Primera Decisión",
        contenido: `Antes de esculpir mundos, debes elegir el terreno. El **Gestor de Proyectos** es tu portal, el umbral donde cada gran aventura comienza. Aquí verás tus creaciones pasadas y podrás dar a luz a nuevas. Al pulsar 'Nuevo Proyecto', no solo nombras un universo, sino que eliges un sagrado lugar en tu disco duro donde residirán todos sus secretos y tesoros. ¡Elige con sabiduría, pues esta carpeta será el cofre de tu juego!\n\nTras nombrar tu creación, te enfrentas a una elección crucial: el **Renderizador**. Piensa en ello como elegir el alma visual de tu mundo. ¿Buscas la máxima fidelidad gráfica para PC con efectos deslumbrantes? **Forward+** es tu senda. ¿Tu destino son los móviles, donde la agilidad es reina? **Mobile** es tu aliado. ¿O anhelas la más amplia compatibilidad con hardware antiguo? Elige **Compatibility**. Esta decisión define la paleta con la que pintarás.\n\n[VISUAL: Un GIF mostrando la ventana del Gestor de Proyectos. El cursor hace clic en 'Nuevo Proyecto', escribe un nombre, selecciona una carpeta, y luego duda entre las tres opciones de renderizador (Forward+, Mobile, Compatibility) con un tooltip explicando brevemente cada una.]`,
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Estás creando un juego para un concurso de 'retro-gaming' que debe funcionar en ordenadores muy antiguos. ¿Qué renderizador sería la elección más sabia y segura?",
          opciones: ["Forward+", "Mobile", "Compatibility", "Ultra HD"],
          respuestaCorrecta: "Compatibility",
        },
      },
      {
        id: 102,
        nombre: "¿Qué es un Motor de Juegos?",
        contenido: `¡Bienvenidos, aprendices de la creación digital, al teatro de la mente, donde la magia del código cobra vida! Yo, Maestro Godot Lírico, os guiaré por el fascinante misterio: ¿Qué es un motor de juegos?\n\nImaginad un títere. Hermoso, articulado, pero inerte. Necesita hilos, una mano que lo mueva, un escenario donde bailar. El motor de juegos es todo eso y mucho más. Es el universo invisible que da vida a vuestros sueños digitales.\n\n[VISUAL: Un diagrama animado simple que muestra un personaje de videojuego en una pantalla. Flechas salen de él apuntando a iconos que representan 'Física', 'Gráficos', 'Sonido' y 'Lógica de Juego', mostrando que el 'Motor' lo gestiona todo.]\n\nLa **Física**, la gravedad del ser: Imaginad una manzana cayendo de un árbol. El motor dicta cómo cae, cómo rebota, cómo interactúa con el suelo. Es la fuerza invisible que rige el movimiento y las colisiones en vuestro mundo.\n\nEl **Renderizado**, la luz que revela: Pensad en un amanecer. La luz baña el paisaje, revelando texturas, colores, sombras. El motor es el sol virtual que ilumina vuestro mundo, creando la ilusión de la realidad.\n\n[VISUAL: Una imagen comparativa. A la izquierda, una escena 3D con modelos sin texturas ni luz ('Sin Renderizar'). A la derecha, la misma escena con iluminación, sombras y texturas vibrantes ('Renderizado').]\n\nLa **Lógica de Juego**, la chispa de la vida: Es el guion que siguen los actores. Define las reglas de vuestro universo, las acciones del jugador y el comportamiento de los personajes. Es la inteligencia que da propósito a cada elemento.`,
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Si estás diseñando un puzzle donde diferentes objetos deben caer y encajar correctamente según su peso y forma, ¿qué componente fundamental del motor de juego estás utilizando principalmente?",
          opciones: [
            "El sistema de Renderizado para hacer que los objetos brillen.",
            "El sistema de Lógica de Juego para contar la puntuación.",
            "El sistema de Física para simular el peso y las colisiones.",
            "El sistema de Audio para reproducir música de fondo.",
          ],
          respuestaCorrecta:
            "El sistema de Física para simular el peso y las colisiones.",
        },
      },
      {
        id: 103,
        nombre: "El Lienzo del Creador: Tu Primer Vistazo a Godot",
        contenido: `¡Bienvenido, artífice de sueños! Ante ti se despliega Godot, no como un simple programa, sino como el taller del alquimista. Al abrirlo, no te abrumes por la multitud de paneles; son tus herramientas, tus pinceles, tus aliados.\n\nObserva el corazón palpitante: el **Viewport** o Escenario Principal. Este es tu lienzo en blanco. A su izquierda, como el árbol genealógico de tu mundo, se encuentra la dársena de **Escena**. Aquí, cada elemento es un 'nodo'. A la izquierda abajo, yace el cofre del tesoro: la dársena del **Sistema de Archivos**, tu almacén de recursos. Y a la derecha, el **Inspector**, tu lupa mágica que revela y te permite moldear las propiedades de cada elemento.\n\n[VISUAL: Un GIF que muestra la interfaz de Godot. Un cursor resalta secuencialmente: 1. El Viewport central. 2. La dársena de Escena. 3. La dársena del Sistema de Archivos. 4. La dársena del Inspector.]`,
        pregunta: {
          tipo: "arrastrar_y_soltar",
          enunciado:
            "Has seleccionado un nodo de personaje en la dársena de 'Escena'. ¿En qué parte de la interfaz modificarías su velocidad de movimiento o su color?",
          opciones: {
            panel: "La Dársena del Inspector",
            items: ["El Viewport", "El Sistema de Archivos"],
          },
          respuestaCorrecta: "La Dársena del Inspector",
        },
      },
      {
        id: 104,
        nombre: "2D y 3D: Eligiendo tu Dimensión",
        contenido: `Todo mundo tiene sus dimensiones. En Godot, eres el maestro de dos realidades: el plano y el espacio. La **creación en 2D** es como ser un pintor sobre un lienzo infinito. Tus coordenadas son X (horizontal) e Y (vertical). Es el reino de los platformers, los RPGs cenitales y los puzzles. Aquí, los nodos se dibujan en orden, uno encima del otro, como capas de acetato en una mesa de animación.\n\nLa **creación en 3D**, sin embargo, es el arte del escultor. Añades una tercera coordenada, Z, que te da la profundidad, el alma del espacio. Ya no pintas, sino que colocas formas en un universo tangible. Es el reino de las aventuras en primera persona, los juegos de carreras y los mundos explorables. La luz y la sombra danzan de formas complejas, y la cámara es tu ojo en este nuevo y vasto cosmos.\n\n[VISUAL: Una imagen dividida. A la izquierda, la interfaz 2D de Godot con un personaje de sprite y un fondo plano. A la derecha, la interfaz 3D con un personaje modelado, un suelo y una luz, mostrando los gizmos de 3 ejes.]`,
        pregunta: {
          tipo: "verdadero_falso",
          enunciado:
            "En el espacio 2D, el eje Y generalmente representa la profundidad para saber si un objeto está delante o detrás de otro.",
          opciones: ["Verdadero", "Falso"],
          respuestaCorrecta: "Falso",
        },
      },
      {
        id: 105,
        nombre: "Nodos y Escenas: Los Ladrillos de Tu Mundo",
        contenido: `En el universo de Godot, los átomos de la creación se llaman **Nodos**. Cada nodo es una pieza especializada: uno muestra una imagen (Sprite2D), otro emite un sonido (AudioStreamPlayer), otro detecta colisiones (Area2D). Su verdadera magia se desata cuando los unes en jerarquías, en árboles de creación.\n\n[VISUAL: Un diagrama simple. Un nodo raíz 'Player' (CharacterBody2D). De él dependen como hijos un 'Sprite2D' y un 'CollisionShape2D'. Flechas claras indican la relación padre-hijo.]\n\nCuando has ensamblado una estructura de nodos que te enorgullece, la guardas como una **Escena**. Una escena es un plano, un diseño completo listo para ser fabricado una y otra vez. Creas una escena 'Bala' una vez, y luego puedes 'instanciar' esa escena cientos de veces. Si modificas la escena original, todas las instancias se actualizan. ¡Ese es el poder de las escenas!`,
        pregunta: {
          tipo: "verdadero_falso",
          enunciado:
            "Para cambiar el sprite de todos los 50 enemigos idénticos que tienes en tu nivel, debes editar cada una de las 50 instancias de enemigo individualmente.",
          opciones: ["Verdadero", "Falso"],
          respuestaCorrecta: "Falso",
        },
      },
      {
        id: 106,
        nombre: "El Árbol de Escena: Jerarquía y Orden Divino",
        contenido: `Ya conoces los nodos, pero su verdadera sinfonía reside en su organización. El **Árbol de Escena** no es una simple lista, es una genealogía sagrada. Cada nodo puede ser un **padre**, y tener **hijos**. Como un planeta que orbita un sol, el hijo sigue al padre en todas sus transformaciones. Si mueves, rotas o escalas al padre, todos sus hijos danzarán con él en perfecta armonía.\n\nEsta relación es el pilar de la creación de entidades complejas. Un personaje no es un solo nodo; es un padre (quizás un 
CharacterBody2D
) con hijos que definen su apariencia (
Sprite2D
), su forma de colisión (
CollisionShape2D
) y el alcance de su espada (
Area2D
). Todos juntos, como una familia, forman una única y cohesiva unidad.\n\n[VISUAL: Un GIF que muestra un nodo 'NaveEspacial' como padre. El cursor arrastra un nodo 'Propulsor' para hacerlo hijo de la nave. Luego, el cursor selecciona y mueve la 'NaveEspacial', y el 'Propulsor' se mueve junto a ella automáticamente.]\n\nEl orden también es ley, especialmente en 2D. Los nodos se dibujan en el orden en que aparecen en el árbol, de arriba hacia abajo. El último de la lista será el que se dibuje encima de todos los demás. Como un pintor que aplica capas de pintura, el orden de tus nodos determina qué se ve primero. ¡Recuerda este poder para controlar la profundidad visual de tu lienzo!`,
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Tienes un nodo 'Personaje' con un nodo 'Escudo' como hijo. Si mueves el 'Personaje' 10 píxeles a la derecha, ¿qué debes hacer para que el 'Escudo' también se mueva?",
          opciones: [
            "Nada, el escudo se moverá automáticamente con su padre.",
            "Escribir un script para mover el escudo 10 píxeles.",
            "Mover manualmente el escudo 10 píxeles en el editor.",
            "Hacer que el 'Personaje' sea hijo del 'Escudo'",
          ],
          respuestaCorrecta:
            "Nada, el escudo se moverá automáticamente con su padre.",
        },
      },
      {
        id: 107,
        nombre: "Assets: Importando Tesoros a Tu Reino",
        contenido: `Un mundo sin imágenes, sonidos o música es un mundo vacío. Tus **assets** son los tesoros que le darán color y vida. Godot hace que el proceso de importación sea un acto de simple magia. Solo tienes que arrastrar tus archivos desde las carpetas de tu ordenador y soltarlos en la **Dársena del Sistema de Archivos** dentro de Godot.\n\n[VISUAL: Un GIF que muestra una carpeta de explorador de archivos al lado de la ventana de Godot. El cursor arrastra un archivo 'player.png' y 'jump.wav' desde la carpeta y los suelta en la dársena del Sistema de Archivos de Godot. Los archivos aparecen allí.]\n\nUna vez que un tesoro cruza el umbral, Godot lo reclama. Verás que junto a tu 
imagen.png
, aparece un archivo 
imagen.png.import
. Este es el sello de Godot, un pergamino que guarda la configuración de cómo debe ser tratado ese asset dentro del motor. ¿Quieres que una imagen se vea nítida como un cristal o pixelada como un juego retro? Lo decides en la **pestaña de Importación** que aparece al seleccionar el asset.\n\nEste cofre de tesoros, el sistema de archivos, es el corazón de tu proyecto. Mantenlo ordenado. Crea carpetas para tus 
sprites
, tus 
sonidos
, tus 
fuentes
. Un reino ordenado es un reino fácil de gobernar. La estructura que crees aquí se reflejará directamente en la carpeta de tu proyecto en el disco duro.`,
        pregunta: {
          tipo: "arrastrar_y_soltar",
          enunciado:
            "Para usar una imagen que tienes en tu escritorio como el sprite de tu personaje en Godot, ¿a qué panel del editor deberías arrastrarla primero?",
          opciones: {
            panel: "La Dársena del Sistema de Archivos",
            items: ["El Inspector", "La Dársena de Escena"],
          },
          respuestaCorrecta: "La Dársena del Sistema de Archivos",
        },
      },
      {
        id: 108,
        nombre: "Ajustes del Proyecto: Las Reglas de Tu Universo",
        contenido: `Todo universo necesita leyes inmutables. La gravedad, la velocidad de la luz... En tu creación, estas leyes se forjan en el santuario de los **Ajustes del Proyecto** (accesible desde el menú 
Proyecto
). Esta ventana es el panel de control cósmico de tu juego, el lugar donde defines las reglas fundamentales que lo gobernarán todo.\n\nAquí, en la sección 
Display -> Window
, puedes decretar el tamaño de tu mundo visible, si los mortales (jugadores) pueden cambiar el tamaño de la ventana, o si tu creación debe nacer en la gloria de la pantalla completa. Es el marco de tu lienzo, la primera impresión que tu universo dará al mundo.\n\n[VISUAL: Un GIF del cursor yendo a 'Proyecto -> Ajustes del Proyecto...'. La ventana se abre y el cursor navega a la sección 'Display/Window' y cambia los valores de 'Viewport Width' y 'Viewport Height'.]\n\nPero hay más que simples ventanas. Aquí es donde le dices a Godot cuál de tus muchas escenas es la principal, la que debe ser presentada cuando el jugador pulsa 'Jugar'. En 
Application -> Run
, la propiedad 
Main Scene
 es el pedestal donde colocarás tu escena inicial. Explora estas catacumbas de opciones, pues aunque muchas son para maestros avanzados, conocer la existencia de estas palancas de poder te convierte en un creador más sabio.`,
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Después de construir tu menú principal en una escena llamada 'MenuPrincipal.tscn', ¿dónde irías para asegurarte de que el juego siempre comience en esa escena?",
          opciones: [
            "En el Inspector del nodo raíz del menú.",
            "En los Ajustes del Proyecto, en la sección 'Application/Run'.",
            "En el Gestor de Proyectos, antes de abrir el editor.",
            "En un script adjunto a la cámara.",
          ],
          respuestaCorrecta:
            "En los Ajustes del Proyecto, en la sección 'Application/Run'.",
        },
      },
    ],
    jefeFinal: {
      id: 199,
      nombre: "Jefe Final: El Arquitecto de Escenas",
      descripcion:
        "Demuestra tu maestría construyendo una escena simple pero completa a partir de varios nodos y assets importados para desbloquear el siguiente Reino.",
    },
  },
  {
    reinoId: 2,
    nombre: "El Lenguaje de la Creación: GDScript",
    nivel: "Principiante",
    gemas: [
      { id: 201, nombre: "GDScript: El Alma de tus Nodos" },
      {
        id: 202,
        nombre: "Variables y Tipos de Datos: La Esencia de la Información",
      },
      {
        id: 203,
        nombre: "Colecciones: Forjando Listas (Arrays) y Diccionarios",
      },
      { id: 204, nombre: "Condicionales: Forjando Destinos con 'if' y 'else'" },
      { id: 205, nombre: "Bucles: El Ritmo del Juego con 'for' y 'while'" },
      { id: 206, nombre: "Funciones: Hechizos de Código Reutilizables" },
      { id: 207, nombre: "Señales: La Danza de la Comunicación entre Nodos" },
      { id: 208, nombre: "El Arte de Depurar: Encontrando Errores con Gracia" },
      {
        id: 209,
        nombre: "La Biblioteca del Saber: Usando la Documentación de Godot",
      },
    ],
    jefeFinal: {
      id: 299,
      nombre: "Jefe Final: El Escriba Interactivo",
      descripcion:
        "Crea un script que haga que un personaje reaccione a la entrada del jugador y se comunique con otro nodo a través de señales.",
    },
  },
  {
    reinoId: 3,
    nombre: "El Movimiento es Vida: Físicas y Entradas",
    nivel: "Intermedio",
    gemas: [
      { id: 301, nombre: "El Input Map: Traduciendo las Acciones del Jugador" },
      { id: 302, nombre: "CharacterBody: El Arte del Movimiento (2D y 3D)" },
      { id: 303, nombre: "RigidBody: Simulando Físicas Dinámicas" },
      { id: 304, nombre: "StaticBody y Area: Definiendo el Mundo y sus Zonas" },
      { id: 305, nombre: "RayCasting: Los Ojos Invisibles de tus Creaciones" },
    ],
    jefeFinal: {
      id: 399,
      nombre: "Jefe Final: El Coreógrafo Cinético",
      descripcion:
        "Construye un pequeño nivel de plataformas donde el jugador pueda correr, saltar y colisionar con el entorno.",
    },
  },
  {
    reinoId: 4,
    nombre: "El Arte del Conflicto y la Interfaz",
    nivel: "Avanzado",
    gemas: [
      { id: 401, nombre: "UI: Creando Menús y HUDs con Nodos de Control" },
      { id: 402, nombre: "El Sistema de Animación: Dando Vida a tus Sprites" },
      { id: 403, nombre: "TileMaps: Construyendo Mundos Vastos y Eficientes" },
      {
        id: 404,
        nombre: "Partículas: Magia Visual para Efectos Deslumbrantes",
      },
      { id: 405, nombre: "Shaders: Pintando con Código para Efectos Únicos" },
    ],
    jefeFinal: {
      id: 499,
      nombre: "Jefe Final: El Artista Total",
      descripcion:
        "Crea una escena de juego con una interfaz de usuario funcional (vida, puntuación), un personaje animado y un efecto visual usando partículas o un shader simple.",
    },
  },
  {
    reinoId: 5,
    nombre: "La Orquesta de Sonidos y la Gestión Maestra",
    nivel: "Experto",
    gemas: [
      { id: 501, nombre: "El Bus de Audio: Orquestando el Paisaje Sonoro" },
      {
        id: 502,
        nombre:
          "Autoloads (Singletons): Nodos Globales para Gestionar tu Juego",
      },
      {
        id: 503,
        nombre: "Guardado y Carga de Partidas: Persistencia de Mundos",
      },
      { id: 504, nombre: "Exportando tu Creación: Compartiendo tu Mundo" },
      { id: 505, nombre: "C++ y GDNative/GDExtension: Expandiendo el Motor" },
    ],
    jefeFinal: {
      id: 599,
      nombre: "Jefe Final: El Maestro de la Creación",
      descripcion:
        "Finaliza un mini-juego completo, con música, efectos de sonido, un menú principal, la capacidad de guardar la puntuación y exportarlo como un ejecutable.",
    },
  },
];
