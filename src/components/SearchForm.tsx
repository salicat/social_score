// src/components/SearchForm.tsx
'use client';
import { useDispatch } from 'react-redux';
import { fetchAnalysis } from '../store/slices/analysisSlice';

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleSearch = (companyName: string) => {
    dispatch(fetchAnalysis(companyName));
  };

  return (
    <input
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Busca una empresa..."
      className="p-2 border rounded"
    />
  );
}