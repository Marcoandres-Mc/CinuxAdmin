import { configureStore } from "@reduxjs/toolkit"; // Cambiar createStore a configureStore
import cambioReducer from "/src/Redux/cambioSlice.js";

export const store = configureStore({
  reducer: {
    cambio: cambioReducer, // Reducer para el slice "cambio"
  },
});

export default store;
