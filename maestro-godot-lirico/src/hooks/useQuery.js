import { useMemo } from 'react';

// Hook simple para parsear los query params de la URL
export function useQuery() {
  return useMemo(() => new URLSearchParams(window.location.search), []);
}