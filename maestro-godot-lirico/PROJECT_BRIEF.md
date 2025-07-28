# PROJECT BRIEF: Maestro Godot Lírico

## 1. Arquitectura de Componentes

- **`App.jsx`**: Orquestador principal.

  - Gestiona el estado de `leccionSeleccionada` y `reinoActivo`.
  - Renderiza la maquetación principal: `Header`, `PanelUsuario`, `TimelineProgreso`, `VisorLeccion`.

- **`Header.jsx`**: Barra de navegación superior.

  - Utiliza `AppBar` y `Toolbar` de MUI.
  - Contiene: Título de la App, Menú de Usuario con opciones de Registro/Perfil.

- **`PanelUsuario.jsx`**: Panel lateral izquierdo, colapsable.

  - Muestra información del usuario: Avatar (Canvas/CSS), nombre, puntos.
  - Contiene opciones de la cuenta.

- **`TimelineProgreso.jsx`**: Barra de progreso horizontal.

  - Renderiza un círculo (`Chip` o `Avatar` de MUI) por cada "Reino".
  - El círculo del reino activo tendrá un estilo diferente.
  - Deshabilita los reinos futuros.

- **`VisorLeccion.jsx`**: Área de contenido principal.
  - Muestra el contenido de la `leccionSeleccionada`.
  - Muestra la lista de "Gemas" del `reinoActivo`.
  - Contendrá el `PanelPreguntas.jsx`.

## 2. Flujo de Datos (Estado)

1.  Usuario hace clic en un círculo de Reino en `TimelineProgreso`.
2.  `TimelineProgreso` llama a una función (ej. `handleSelectReino`) pasada desde `App.jsx`.
3.  `App.jsx` actualiza el estado `reinoActivo`.
4.  `VisorLeccion` recibe el nuevo `reinoActivo` y muestra la lista de Gemas de ese reino.
5.  Usuario hace clic en una Gema en `VisorLeccion`.
6.  `VisorLeccion` llama a la API de Gemini (a través de la función serverless).
7.  `VisorLeccion` actualiza su estado interno para mostrar el contenido de la lección.

## 3. Paleta de Colores (Tema MUI)

- **primary**: #478cbf (Azul Godot)
- **secondary**: #8a4a9c (Púrpura)
- **background.default**: #1e1e1e (Fondo oscuro)
- **background.paper**: #2a2a2a (Color de las tarjetas)```
