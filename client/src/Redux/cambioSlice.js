import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false, // Valor inicial de cambio
};

const cambioSlice = createSlice({
  name: 'cambio',
  initialState,
  reducers: {
    toggleCambio: (state) => {
      state.value = !state.value; 
    },
    setCambio: (state, action) => {
      state.value = action.payload; 
    },
  },
});

export const { toggleCambio, setCambio } = cambioSlice.actions;

export default cambioSlice.reducer;