// src/data/syllabusData.js
export const syllabus = [
  {
    id: 1,
    nombre: "El Escenario Digital",
    gemas: [
      {
        id: 101,
        nombre: "¿Qué es un Motor de Juegos?",
        // ¡AÑADIMOS EL CONTENIDO Y LAS PREGUNTAS!
        contenido: `¡Bienvenidos, aprendices de la creación digital, al teatro de la mente, donde la magia del código cobra vida! Yo, Maestro Godot Lírico, os guiaré por el fascinante misterio: ¿Qué es un motor de juegos?

        Imaginad un títere. Hermoso, articulado, pero inerte. Necesita hilos, una mano que lo mueva, un escenario donde bailar. El motor de juegos es todo eso y mucho más. Es el universo invisible que da vida a vuestros sueños digitales.

        **Visualicemos:** Un lienzo en blanco. El motor es el lienzo, los pinceles y la paleta. Proporciona las herramientas para pintar mundos virtuales.

        **La Física, la gravedad del ser:** Imaginad una manzana cayendo de un árbol (Newton estaría orgulloso). El motor dicta cómo cae, cómo rebota, cómo interactúa con el suelo. Es la fuerza invisible que rige el movimiento y las colisiones en vuestro mundo. *Repitamos: Física = Movimiento y Colisiones*.
        (Repetición para reforzar el concepto, un principio básico del neuroaprendizaje)

        **El Renderizado, la luz que revela:** Pensad en un amanecer. La luz baña el paisaje, revelando texturas, colores, sombras. El motor es el sol virtual que ilumina vuestro mundo, creando la ilusión de la realidad. *Recordemos: Renderizado = Iluminación y Apariencia.*

        **La Inteligencia Artificial, la chispa de la vida:** Imaginad un pájaro volando. El motor dota a ese pájaro de un cerebro digital, permitiéndole volar, cazar, reaccionar a su entorno. Es la inteligencia que da vida a los personajes no jugables. *Grabemos esto: IA = Comportamiento de los personajes.*`,
        pregunta: {
          tipo: "opcion_multiple",
          enunciado:
            "Según el Maestro, si quieres que un personaje reaccione y persiga al jugador, ¿qué parte del motor de juegos es la más importante?",
          opciones: [
            "La Física",
            "El Renderizado",
            "La Inteligencia Artificial",
            "El Sonido",
          ],
          respuestaCorrecta: "La Inteligencia Artificial",
        },
      },
      {
        id: 102,
        nombre: "El Lienzo del Creador: Tu Primer Vistazo a Godot",
        contenido:
          "¡Bienvenido, artífice de sueños! Ante ti se despliega Godot, no como un simple programa, sino como el taller del alquimista, el estudio del pintor, el escenario donde tus ideas cobrarán vida. Al abrirlo, no te abrumes por la multitud de paneles; son tus herramientas, tus pinceles, tus aliados en la gran obra de la creación.\n\nObserva el corazón palpitante de tu proyecto: el **Viewport** o Escenario Principal. Este es tu lienzo en blanco, el universo en miniatura donde colocarás a tus personajes, dibujarás tus paisajes y orquestarás la danza de la interacción. A su izquierda, como el árbol genealógico de tu mundo, se encuentra la dársena de **Escena**. Aquí, cada elemento —un héroe, un enemigo, una simple moneda— es un 'nodo', una rama en el gran árbol de tu creación. Organizarás tus ideas aquí, viendo cómo se relacionan entre sí.\n\n[VISUAL: Un GIF que muestra la interfaz de Godot. Un cursor del ratón primero hace un círculo en el Viewport central, luego se mueve a la izquierda para resaltar la dársena de 'Escena', donde varios nodos anidados (como Player, Enemies, Level) son visibles.]\n\nBajo el árbol de la Escena yace el cofre del tesoro: la dársena del **Sistema de Archivos**. Este es tu almacén de recursos. Cada imagen, cada sonido, cada pieza de código que escribas, vivirá aquí, esperando pacientemente a ser llamado al escenario. Y cuando seleccionas cualquier cosa, ya sea un nodo en tu escena o un archivo en tu cofre, a la derecha cobra vida la **Dársena del Inspector**. El Inspector es tu lupa mágica, tu panel de control sónico. Te revela las propiedades más íntimas de cada elemento —su color, su tamaño, su comportamiento— y te permite moldearlas a tu antojo.\n\n[VISUAL: Un GIF que continúa la animación anterior. El cursor ahora hace clic en un archivo 'player.png' en la dársena del Sistema de Archivos. Luego, el cursor se mueve a la dársena de Escena, hace clic en un nodo 'Sprite2D', y la cámara hace zoom en la dársena del Inspector a la derecha, mostrando propiedades como 'Position', 'Scale' y 'Texture'.]\n\nEstos cuatro pilares —Escenario, Escena, Archivos e Inspector— son el fundamento de tu poder. Aprende a danzar entre ellos y no habrá mundo que no puedas construir, ni historia que no puedas contar. Son las primeras notas de una sinfonía que tú mismo compondrás.",
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Has añadido un nodo 'Sprite2D' a tu escena para que actúe como tu personaje principal, pero aparece en la esquina superior izquierda por defecto. Si quisieras cambiar su posición inicial en el escenario, ¿qué dársena o panel usarías para modificar directamente sus coordenadas 'Position'?",
          opciones: [
            "La Dársena de Escena, para arrastrarlo a una nueva jerarquía.",

            "La Dársena del Sistema de Archivos, para editar el archivo de imagen.",

            "La Dársena del Inspector, después de seleccionar el nodo 'Sprite2D'.",

            "El menú 'Proyecto' en la parte superior de la ventana.",
          ],
          respuestaCorrecta:
            "La Dársena del Inspector, después de seleccionar el nodo 'Sprite2D'.",
        },
      },
      {
        id: 103,
        nombre: "Nodos y Escenas",
        contenido:
          "Imagina que eres un escultor divino. No empiezas con un bloque de mármol informe, sino con átomos de pura funcionalidad. En el universo de Godot, estos átomos se llaman **Nodos**. Cada nodo es una pequeña maravilla, una pieza especializada con un único y humilde propósito: uno sabe cómo mostrar una imagen (Sprite2D), otro cómo emitir un sonido (AudioStreamPlayer), y otro cómo detectar colisiones (Area2D).\n\nEstos átomos, por sí solos, son simples. Pero su verdadera magia se desata cuando los unes. Como si unieras ladrillos de LEGO, comienzas a ensamblarlos en jerarquías, en árboles de creación. Para forjar un personaje, podrías tomar un nodo de cuerpo físico como raíz, y hacerlo padre de un nodo de imagen para su apariencia y un nodo de forma para sus límites. Cada nodo hijo hereda las transformaciones de su padre, moviéndose y girando como una sola entidad cohesiva. Estás construyendo complejidad a partir de la simplicidad.\n\n[VISUAL: Un diagrama simple y claro. Un nodo raíz llamado 'Player' (un CharacterBody2D). De él dependen como hijos dos nodos: un 'Sprite2D' con un ícono de personaje, y un 'CollisionShape2D' con una forma de cápsula. Flechas claras indican la relación padre-hijo.]\n\nAhora, ¿qué sucede cuando has ensamblado una estructura de nodos que te enorgullece, como tu valiente héroe o un astuto enemigo? Guardas esa estructura completa como una **Escena**. Una escena no es más que un árbol de nodos empaquetado y listo para ser usado. Es el plano de una creación. Si los nodos son los ladrillos, la escena es el diseño completo de un coche de LEGO, listo para ser fabricado una y otra vez.\n\nAquí reside el corazón de la filosofía de Godot. Creas una escena 'Bala' una vez. Luego, en tu nivel principal, puedes 'instanciar' esa escena cientos de veces. Cada bala será una copia perfecta del plano original. Y lo más asombroso: si decides que todas las balas deben ser más rápidas, solo necesitas modificar la escena original 'Bala.tscn', y todas las instancias en tu universo se actualizarán al instante. Este es el poder de la creación modular: construye componentes reutilizables y ensambla mundos complejos con una facilidad pasmosa.\n\n[VISUAL: Un GIF animado. La escena 'Level.tscn' está abierta. El cursor del ratón arrastra el archivo 'Coin.tscn' desde la dársena del Sistema de Archivos al Viewport. Una moneda aparece. El cursor repite la acción varias veces, poblando el nivel con múltiples instancias de la misma moneda.]",
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Has diseñado una escena 'Enemigo.tscn' que incluye su lógica de movimiento y su sprite. Si necesitas modificar el sprite de TODOS los enemigos que aparecen en tu juego, ¿cuál es el proceso correcto y más eficiente según la filosofía de Godot?",
          opciones: [
            "Ir a cada escena de nivel donde usaste un enemigo y cambiar el sprite en cada instancia, una por una.",

            "Abrir la escena original 'Enemigo.tscn', cambiar el nodo Sprite2D dentro de ella y guardar los cambios.",

            "Crear una nueva escena de enemigo con el nuevo sprite y reemplazar manualmente cada enemigo antiguo.",

            "Escribir un script que encuentre todos los nodos de enemigos en el juego y cambie su textura en tiempo de ejecución.",
          ],
          respuestaCorrecta:
            "Abrir la escena original 'Enemigo.tscn', cambiar el nodo Sprite2D dentro de ella y guardar los cambios.",
        },
      },
      {
        id: 104,
        nombre: "El Alma de la Marioneta: Tu Primer Script en GDScript",
        contenido:
          "Hasta ahora, has sido un arquitecto, un escultor de formas inertes. Has dispuesto nodos y construido escenas, pero tus creaciones son como hermosos títeres en un escenario oscuro y silencioso. ¿Cómo les insuflamos vida? ¿Cómo les damos propósito, movimiento y la capacidad de reaccionar? La respuesta, maestro creador, es a través del código, el alma que anima a la materia: **GDScript**.\n\nPiensa en un nodo como una marioneta. Tiene brazos, piernas y una apariencia definida por ti en el Inspector. Pero para que baile, para que luche, para que cuente su historia, necesita los hilos del titiritero. Un script de GDScript es ese conjunto de hilos invisibles. Al 'adjuntar' un script a un nodo, le otorgas una conciencia, un cerebro a medida. De repente, el nodo ya no solo 'es', sino que 'hace'. GDScript es el lenguaje nativo de Godot, diseñado para ser tan elegante y legible como un poema, fluyendo en perfecta armonía con la estructura de nodos y escenas que ya conoces.\n\n[VISUAL: Un GIF que muestra un nodo 'Player' en la dársena de Escena. El cursor hace clic derecho sobre él, selecciona 'Adjuntar Script'. Se abre la ventana de creación de script y, al darle a 'Crear', aparece el editor de código con una plantilla básica.]\n\nAl abrir tu primer script, verás unas líneas ya escritas. La más importante es `extends CharacterBody2D` (o el tipo de nodo que sea). Esto es un juramento de lealtad: el script jura convertirse en una extensión de ese nodo, obteniendo acceso a todos sus poderes y propiedades innatos. Luego, descubrirás funciones que empiezan con un guion bajo, como `_ready()`. Esta es una función mágica, un ritual de iniciación. Todo el código que escribas dentro de `_ready()` se ejecutará una única vez, en el preciso instante en que tu nodo entre en el escenario y esté listo para actuar. Es el 'primer aliento' de tu creación.\n\nVamos a darle su primera palabra. Dentro de `_ready()`, puedes usar el comando `print()`. Esta es tu línea directa con la consola de Godot, tu diario de desarrollo. Escribir `print(\"He despertado\")` hará que ese mensaje aparezca en el panel de 'Salida' cuando ejecutes la escena. Es tu primera conversación con tu creación, la primera señal de que el corazón que has programado ha comenzado a latir. Con los scripts, has pasado de ser un constructor a ser un dador de vida.\n\n[VISUAL: Un GIF que muestra el editor de texto. Dentro de la función `func _ready():`, el usuario escribe una línea: `print(\"El héroe está listo para la aventura.\")`. Luego, el usuario presiona el botón 'Ejecutar Escena' (F6). El juego se ejecuta (mostrando una escena simple) y en la parte inferior, en el panel de 'Salida', el texto \"El héroe está listo para la aventura.\" aparece resaltado.]",
        pregunta: {
          tipo: "seleccion_multiple",
          enunciado:
            "Has creado un nodo 'Cofre' y quieres que, justo al iniciar la escena, determine aleatoriamente si contiene oro o está vacío. Esta decisión debe tomarse una sola vez. ¿En qué función fundamental de GDScript deberías escribir el código que toma esta decisión inicial?",
          opciones: [
            "En una nueva función que llames `abrir_cofre()`.",
            "Dentro de la función `_process(delta)`, para comprobarlo en cada fotograma.",
            "En la función `_ready()`, porque se ejecuta una única vez cuando el nodo es creado en la escena.",
            "No es posible, esto debe definirse antes en el Inspector.",
          ],
          respuestaCorrecta:
            "En la función `_ready()`, porque se ejecuta una única vez cuando el nodo es creado en la escena.",
        },
      },
    ],
  },
  // ... otros reinos ...
];
