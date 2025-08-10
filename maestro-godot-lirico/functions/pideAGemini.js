// functions/pideAGemini.js - Versión para Cloudflare

// La firma de la función es diferente. Se exporta una función 'onRequest'.
export async function onRequest(context) {
  // 1. El método de la solicitud se encuentra en context.request.method
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    // 2. El cuerpo de la solicitud se obtiene con .json() sobre el request
    const { prompt } = await context.request.json();

    // 3. La clave de API se obtiene de context.env
    const API_KEY = context.env.GEMINI_API_KEY;
    if (!API_KEY) {
      throw new Error("API Key no encontrada en el entorno de Cloudflare.");
    }

    // Esta parte es la única que no cambia, es la lógica de Google
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 4. Se devuelve una nueva 'Response' estándar con el contenido y las cabeceras.
    return new Response(JSON.stringify({ data: text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error en la función de Cloudflare:", error);
    return new Response(
      JSON.stringify({ error: `Error interno del servidor: ${error.message}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
