// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
  // Obtenemos el valor del localStorage
  const saved = localStorage.getItem(key);
  // OJO: Es importante manejar el caso donde 'saved' sea null o inválido.
  try {
    const initial = saved ? JSON.parse(saved) : defaultValue;
    return initial;
  } catch (error) {
    console.error("Error parsing localStorage key:", key, error);
    return defaultValue;
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // Cada vez que 'value' cambie, lo guardamos en el localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};