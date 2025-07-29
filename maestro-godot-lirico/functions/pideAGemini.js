// functions/pideAGemini.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Función principal que Netlify ejecutará.
// eslint-disable-next-line no-unused-vars
exports.handler = async function (event, context) {
  // 1. Validar que la solicitud sea del tipo correcto (POST).
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 2. Obtener el prompt del cuerpo de la solicitud que envía el frontend.
    const { prompt } = JSON.parse(event.body);

    // 3. Obtener la clave de API de forma segura desde las variables de entorno de Netlify.
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      throw new Error("API Key no encontrada.");
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 4. Generar el contenido y esperar la respuesta.
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 5. Devolver la respuesta de Gemini al frontend.
    return {
      statusCode: 200,
      body: JSON.stringify({ data: text }),
    };
  } catch (error) {
    // 6. Manejar cualquier error que ocurra y devolver un mensaje claro.
    console.error("Error en la función serverless:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Error interno del servidor: ${error.message}`,
      }),
    };
  }
};
