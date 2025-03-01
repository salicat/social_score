// src/components/Results.tsx
'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Results() {
  const { data, loading, error } = useSelector((state: RootState) => state.analysis);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Sentimiento: {data?.sentiment}</h2>
      <h3>Recomendaciones:</h3>
      <p>{data?.recommendations}</p>
    </div>
  );
}