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
        contenido: `Cuando invocas a Godot, el primer portal que atraviesas es el **Gestor de Proyectos**. No es un mero listado, ¡es tu galería de universos! Aquí puedes crear nuevos proyectos, importar existentes, o incluso descargar plantillas y demos para encender tu chispa creativa.

**Creando un Nuevo Proyecto:**
Al pulsar "Nuevo Proyecto", se te pedirá un nombre para tu creación y una ruta para la carpeta del proyecto. ¡Un consejo de maestro! Elige una ruta y crea una nueva carpeta vacía para tu proyecto. No selecciones una carpeta que ya contenga otros archivos. Todo lo que tu proyecto contenga estará dentro de esta carpeta, manteniendo tu reino en perfecto orden.

**La Elección del Renderizador:**
Una vez nombrado tu universo, te enfrentas a una elección crucial: el **Renderizador**. Esta decisión define el alma visual de tu mundo.
- **Forward+**: La senda del esplendor visual. Ideal para juegos de escritorio de alta fidelidad (PC y consolas) que buscan los mejores gráficos. Utiliza la API Vulkan (o Direct3D 12 en Windows). Es el más avanzado, pero requiere hardware moderno.
- **Mobile**: El camino de la agilidad. Optimizado para dispositivos móviles y hardware menos potente. Ofrece un excelente rendimiento y es una buena opción para juegos 2D y 3D que no necesitan los efectos más complejos.
- **Compatibility**: El puente hacia el pasado y la web. Utiliza OpenGL 3.3 / OpenGL ES 3.0, lo que le permite funcionar en una gama muy amplia de hardware, incluyendo ordenadores antiguos y navegadores web (WebXR). Su calidad gráfica es menor, pero su compatibilidad es máxima.

Elige con sabiduría. Aunque esta decisión se puede cambiar más adelante en los Ajustes del Proyecto, establecerla desde el principio te dará una base sólida sobre la que construir.`,
        preguntas: [
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Estás creando un juego para un concurso de 'retro-gaming' que debe funcionar en ordenadores muy antiguos. ¿Qué renderizador sería la elección más sabia y segura?",
            opciones: ["Forward+", "Mobile", "Compatibility", "Ultra HD"],
            respuestaCorrecta: "Compatibility",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "El Gestor de Proyectos de Godot solo te permite trabajar en un proyecto a la vez.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Para crear un juego con gráficos de alta fidelidad para PC, ¿qué renderizador es el más recomendado?",
            opciones: ["Mobile", "Compatibility", "Forward+", "OpenGL"],
            respuestaCorrecta: "Forward+",
          },
        ],
      },
      {
        id: 102,
        nombre: "¿Qué es un Motor de Juegos?",
        contenido: `¡Saludos, aprendiz! Un motor de juegos como Godot es el corazón y el alma de tu creación. Es un taller de herramientas completo para artesanos digitales. En lugar de construir todo desde cero, el motor te proporciona los cimientos sobre los que construir tu mundo.

**Los Pilares de la Creación:**
- **El Motor de Renderizado**: Es el gran ilusionista. Toma tus modelos 3D, sprites 2D, luces y materiales, y los traduce en la imagen final que ves en la pantalla.
- **El Motor de Física**: Es el que impone las leyes del movimiento. Calcula las interacciones, la gravedad, las colisiones y las respuestas.
- **El Sistema de Scripting**: ¡Aquí es donde insufles vida! A través de GDScript (o C#), escribes las reglas de tu juego.
- **Y Mucho Más**: Godot también te ofrece herramientas para crear interfaces de usuario, gestionar animaciones, reproducir sonidos y música, etc.`,
        preguntas: [
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Si estás diseñando un puzzle donde diferentes objetos deben caer y encajar correctamente según su peso y forma, ¿qué componente del motor estás usando principalmente?",
            opciones: [
              "El sistema de Renderizado para hacer que los objetos brillen.",
              "El sistema de Lógica de Juego para contar la puntuación.",
              "El sistema de Física para simular el peso y las colisiones.",
              "El sistema de Audio para reproducir música de fondo.",
            ],
            respuestaCorrecta:
              "El sistema de Física para simular el peso y las colisiones.",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "La 'Lógica de Juego' es la responsable de que los gráficos se vean realistas con luces y sombras.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Para definir las reglas y el comportamiento de los personajes, ¿qué pilar de Godot usarías?",
            opciones: [
              "Motor de Renderizado",
              "Motor de Física",
              "Sistema de Scripting",
              "Editor de Escenas",
            ],
            respuestaCorrecta: "Sistema de Scripting",
          },
        ],
      },
      {
        id: 103,
        nombre: "El Lienzo del Creador: Tu Primer Vistazo a Godot",
        contenido: `¡Contempla el taller del creador! La interfaz de Godot puede parecer intimidante, pero pronto la verás como una extensión de tus manos.

**Las Dársenas Principales:**
- **El Viewport (Escenario Principal)**: En el centro, es tu ventana al mundo que estás creando.
- **La Dársena de Escena**: A la izquierda, verás la estructura jerárquica de tu escena actual en forma de árbol de nodos.
- **La Dársena del Sistema de Archivos**: Abajo a la izquierda, este es tu cofre del tesoro. Muestra todos los archivos de tu proyecto.
- **El Inspector**: A la derecha, esta es tu lupa mágica. Muestra todas las propiedades del nodo que selecciones.
- **El Panel Inferior**: Contiene la consola de salida, el editor de animaciones, el mezclador de audio, etc.`,
        preguntas: [
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Para modificar las propiedades de un nodo seleccionado, como su posición o color, ¿qué Dársena debes usar?",
            opciones: [
              "Dársena de Escena",
              "Sistema de Archivos",
              "Inspector",
              "Viewport",
            ],
            respuestaCorrecta: "Inspector",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "¿Qué panel usarías para buscar y cargar una imagen que has guardado en la carpeta de tu proyecto?",
            opciones: [
              "Inspector",
              "Dársena de Escena",
              "Sistema de Archivos",
              "Viewport",
            ],
            respuestaCorrecta: "Sistema de Archivos",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "El Viewport es donde escribes el código GDScript para tus nodos.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
        ],
      },
      {
        id: 104,
        nombre: "2D y 3D: Eligiendo tu Dimensión",
        contenido: `En Godot, eres el maestro de dos realidades: el plano (2D) y el espacio (3D). La **creación en 2D** es como ser un pintor. Tus coordenadas son X (horizontal) e Y (vertical). Es el reino de los platformers y los RPGs cenitales.

La **creación en 3D** es el arte del escultor. Añades una tercera coordenada, Z, que te da la profundidad. Es el reino de las aventuras en primera persona y los mundos explorables.`,
        preguntas: [
          {
            tipo: "verdadero_falso",
            enunciado:
              "En el espacio 2D, el eje Y generalmente representa la profundidad.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Si estás creando un juego de plataformas en 2D, ¿cuáles son los dos ejes principales con los que trabajarás?",
            opciones: ["X y Z", "Y y Z", "X e Y", "Solo X"],
            respuestaCorrecta: "X e Y",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "En un entorno 3D, ¿cómo se llama el eje que comúnmente representa la profundidad?",
            opciones: ["Eje X", "Eje Y", "Eje Z", "Eje W"],
            respuestaCorrecta: "Eje Z",
          },
        ],
      },
      {
        id: 105,
        nombre: "Nodos y Escenas: Los Ladrillos de Tu Mundo",
        contenido: `En Godot, los átomos de la creación se llaman **Nodos**. Cada nodo es una pieza especializada: uno muestra una imagen (Sprite2D), otro emite un sonido (AudioStreamPlayer), otro detecta colisiones (Area2D). Su verdadera magia se desata cuando los unes en jerarquías.

Cuando has ensamblado una estructura de nodos, la guardas como una **Escena**. Una escena es un plano, un diseño completo listo para ser reutilizado. Creas una escena 'Bala' una vez, y luego puedes 'instanciar' esa escena cientos de veces. Si modificas la escena original, todas las instancias se actualizan.`,
        preguntas: [
          {
            tipo: "verdadero_falso",
            enunciado:
              "Para cambiar el sprite de todos los 50 enemigos idénticos que tienes en tu nivel, debes editar cada una de las 50 instancias de enemigo individualmente.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
          {
            tipo: "seleccion_multiple",
            enunciado: "¿Qué es una 'Escena' en Godot?",
            opciones: [
              "Un único nodo",
              "Una colección de nodos guardada que puede ser reutilizada",
              "Un archivo de script",
              "Una imagen",
            ],
            respuestaCorrecta:
              "Una colección de nodos guardada que puede ser reutilizada",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "La mejor práctica para tener 100 balas idénticas es crear 100 nodos de bala individuales uno por uno.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
        ],
      },
      {
        id: 106,
        nombre: "El Árbol de Escena: Jerarquía y Orden Divino",
        contenido: `El **Árbol de Escena** es una genealogía sagrada. Cada nodo puede ser un **padre** y tener **hijos**. El hijo sigue al padre en todas sus transformaciones (movimiento, rotación, escala). Esta relación es el pilar de la creación de entidades complejas.

El orden también es ley, especialmente en 2D. Los nodos se dibujan en el orden en que aparecen en el árbol, de arriba hacia abajo. El último de la lista será el que se dibuje encima de todos los demás.`,
        preguntas: [
          {
            tipo: "seleccion_multiple",
            enunciado:
              "En 2D, para que la 'Puntuacion' se vea sobre el 'Jugador', y el 'Jugador' sobre el 'Fondo', ¿cuál debe ser el orden en el árbol de escena (de arriba a abajo)?",
            opciones: [
              "Puntuacion, Jugador, Fondo",
              "Fondo, Jugador, Puntuacion",
              "Jugador, Fondo, Puntuacion",
              "Fondo, Puntuacion, Jugador",
            ],
            respuestaCorrecta: "Fondo, Jugador, Puntuacion",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "Si eliminas un nodo padre, todos sus nodos hijos también serán eliminados.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Verdadero",
          },
          {
            tipo: "seleccion_multiple",
            enunciado: "En 2D, ¿qué nodo se dibujará encima de los demás?",
            opciones: [
              "El primer nodo en el árbol de escena",
              "El último nodo en el árbol de escena",
              "El nodo con el nombre más corto",
              "El nodo con más hijos",
            ],
            respuestaCorrecta: "El último nodo en el árbol de escena",
          },
        ],
      },
      {
        id: 107,
        nombre: "Assets: Importando Tesoros a Tu Reino",
        contenido: `Tus **assets** (imágenes, sonidos, etc.) son los tesoros que le darán vida a tu mundo. Para importarlos, solo tienes que arrastrarlos y soltarlos en la **Dársena del Sistema de Archivos** dentro de Godot.

Cuando importas un asset, Godot crea un archivo "
          .import" que guarda la configuración de cómo debe ser tratado ese asset. Puedes cambiar esta configuración (por ejemplo, para que una imagen se vea pixelada) en la **pestaña de Importación** que aparece al seleccionar el asset.`,
        preguntas: [
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Para usar una imagen que tienes en tu escritorio como el sprite de tu personaje, ¿a qué panel la arrastras primero?",
            opciones: [
              "La Dársena del Sistema de Archivos",
              "El Inspector",
              "La Dársena de Escena",
              "El Viewport",
            ],
            respuestaCorrecta: "La Dársena del Sistema de Archivos",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Cuando importas un asset, Godot crea un archivo adicional para la configuración. ¿Cuál es su extensión?",
            opciones: [".godot", ".asset", ".import", ".meta"],
            respuestaCorrecta: ".import",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "Es una buena práctica mantener todos tus assets (imágenes, sonidos, etc.) en una sola carpeta gigante.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
        ],
      },
      {
        id: 108,
        nombre: "Ajustes del Proyecto: Las Reglas de Tu Universo",
        contenido: `Todo universo necesita leyes. En tu creación, estas se forjan en los **Ajustes del Proyecto** (menú Proyecto -> Ajustes del Proyecto). Aquí defines aspectos cruciales:

- **Ventana (Display -> Window)**: Configura el tamaño de la ventana de tu juego, si se puede redimensionar, si empieza en pantalla completa, etc.
- **Mapas de Entrada (Input Map)**: ¡Fundamental! Aquí defines las acciones del jugador, como 'moverse_izquierda' o 'saltar', y las asocias a teclas, botones del ratón o del mando. Esto te permite escribir código basado en acciones, no en teclas específicas.
- **Capas de Física (Layer Names)**: Nombrar las capas de física y renderizado hace tu vida más fácil al gestionar colisiones complejas.`,
        preguntas: [
          {
            tipo: "seleccion_multiple",
            enunciado:
              "¿Dónde configurarías el tamaño inicial de la ventana de tu juego?",
            opciones: [
              "En el Inspector",
              "En los Ajustes del Proyecto",
              "En la Dársena de Escena",
              "Editando un archivo de texto",
            ],
            respuestaCorrecta: "En los Ajustes del Proyecto",
          },
          {
            tipo: "verdadero_falso",
            enunciado:
              "Los 'Input Map' sirven para dibujar el mapa del nivel de tu juego.",
            opciones: ["Verdadero", "Falso"],
            respuestaCorrecta: "Falso",
          },
          {
            tipo: "seleccion_multiple",
            enunciado:
              "Si quieres que la tecla 'W' haga que el personaje salte, ¿dónde deberías definir esta asociación?",
            opciones: [
              "En el script del personaje",
              "En los Input Map de los Ajustes del Proyecto",
              "En la configuración del nodo Sprite2D",
              "En el editor de animaciones",
            ],
            respuestaCorrecta: "En los Input Map de los Ajustes del Proyecto",
          },
        ],
      },
    ],
  },
  {
    reinoId: 2,
    nombre: "El Arte del Movimiento: Scripts y Nodos Dinámicos",
    nivel: "Básico",
    gemas: [
      // Próximamente...
    ],
  },
];
