import { useReducer } from 'react';
import { setCambio } from "./cambioSlice";
import store from "./store";

// Crear un hook con useReducer
export const useForceUpdate = () => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  const hacerCambio = (nuevoValor) => {
    store.dispatch(setCambio(nuevoValor)); // Actualiza el estado en Redux
    forceUpdate(); // Forzar un re-render
  };

  return {
    hacerCambio,
  };
};

export const cambioValoractual = () => {
  return store.getState().cambio.value;
};
