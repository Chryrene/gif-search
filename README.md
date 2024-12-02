
# React GIF Search App

Este proyecto es una aplicación desarrollada en React que permite buscar GIFs utilizando la API de Giphy. Incluye un diseño moderno y funcionalidades que facilitan la experiencia del usuario.

## 🚀 Características

- **Búsqueda de GIFs**: Permite buscar GIFs en tiempo real utilizando la API de Giphy.
- **Diseño moderno**: Barra de búsqueda estilizada, encabezado atractivo y animaciones suaves.
- **Tecnologías utilizadas**:
  - React
  - TypeScript
  - Styled Components
  - Axios

---

## 📦 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Chryrene/react-gif-chryrene.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd react-gif-chryrene
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🔑 Configuración de la API

Este proyecto utiliza la API de Giphy para obtener los GIFs. Ya hemos integrado una clave API válida, pero puedes personalizarla:

1. Abre el archivo `.env` en la raíz del proyecto.
2. Asegúrate de que contenga:
   ```env
   VITE_GIPHY_API_KEY="API_KEY"
   ```

---

## 🛠️ Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
src/
  components/
    GifCard.tsx       // Componente para mostrar un GIF individual
    GifList.tsx       // Componente para renderizar la lista de GIFs
    SearchBar.tsx     // Componente de la barra de búsqueda
  styles/
    GlobalStyles.ts   // Estilos globales con styled-components
  App.tsx             // Componente principal de la aplicación
  main.tsx            // Punto de entrada de la aplicación
```

---

## 🌟 Funcionalidades Clave

### Barra de Búsqueda
- Ubicada en el centro de la pantalla.
- Bordes redondeados y efecto de foco animado.
- Botón de búsqueda estilizado.

### Visualización de GIFs
- Cuadrícula responsiva que se ajusta a diferentes tamaños de pantalla.
- Efecto de hover con escalado y sombras.

---

## 🖥️ Uso

1. Escribe un término en la barra de búsqueda (por ejemplo, "cats").
2. Haz clic en el botón de búsqueda o presiona **Enter**.
3. Los GIFs relacionados aparecerán en una cuadrícula.

---

## 🛡️ Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 📬 Contacto

Si tienes preguntas o sugerencias, no dudes en contactar:
- **GitHub**: [Chryrene](https://github.com/Chryrene)
- **Correo**: [tuemail@example.com](mailto:vpasosdev@gmail.com)


Este programa es privado, ajeno a cualquier partido político. Queda prohibido el uso para fines distintos a los establecidos en el programa.
