// src/services/geminiService.js

export const fetchLeccionContent = async (prompt) => {
  // Hacemos una llamada a nuestra propia función serverless, no a Google.
  const response = await fetch("/pideAGemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.error || "Ocurrió un error al contactar al Maestro."
    );
  }

  const data = await response.json();
  return data.data; // Devolvemos el texto puro de Gemini.
};
