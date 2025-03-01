// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import analysisReducer from './slices/analysisSlice';

export const store = configureStore({
  reducer: {
    analysis: analysisReducer, // Slice para el análisis de reseñas
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;