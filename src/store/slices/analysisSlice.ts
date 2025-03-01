// src/store/slices/analysisSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk para obtener el análisis
export const fetchAnalysis = createAsyncThunk(
  'analysis/fetchAnalysis',
  async (companyName: string) => {
    const response = await axios.get('/api/analyze', { params: { companyName } });
    return response.data;
  }
);

// Estado inicial
interface AnalysisState {
  data: { sentiment: string; recommendations: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AnalysisState = {
  data: null,
  loading: false,
  error: null,
};

// Slice
const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {}, // No necesitamos reducers sincrónicos por ahora
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalysis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalysis.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnalysis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al obtener el análisis';
      });
  },
});

export default analysisSlice.reducer;