'use client';

import { useState } from 'react';
import { LOCATIONS, PROPERTY_TYPES } from '@/lib/data';

const ZONES = [
  { value: '', label: 'Todas' },
  { value: 'norte', label: 'Zona Norte' },
  { value: 'sur', label: 'Zona Sur' },
  { value: 'centro', label: 'Centro' },
];

interface SearchFilters {
  operation: string;
  type: string;
  zone: string;
  location: string;
  rooms: string;
  currency: string;
  priceMax: string;
}

interface HeroSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

export function HeroSearch({ onSearch }: HeroSearchProps) {
  const [searchOp, setSearchOp] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchZone, setSearchZone] = useState('');
  const [searchLoc, setSearchLoc] = useState('');
  const [searchRooms, setSearchRooms] = useState('');
  const [searchCurrency, setSearchCurrency] = useState('');
  const [searchPriceMax, setSearchPriceMax] = useState('');

  const handleSearch = () => {
    onSearch({
      operation: searchOp,
      type: searchType,
      zone: searchZone,
      location: searchLoc,
      rooms: searchRooms,
      currency: searchCurrency,
      priceMax: searchPriceMax,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-5xl">
      <div className="flex gap-1 mb-0 flex-wrap">
        <button
          className={`tab-btn ${searchOp === '' ? 'active' : ''}`}
          onClick={() => setSearchOp('')}
        >
          Comprar
        </button>
        <button
          className={`tab-btn ${searchOp === 'Alquiler' ? 'active' : ''}`}
          onClick={() => setSearchOp('Alquiler')}
        >
          Alquilar
        </button>
        <button
          className={`tab-btn ${searchOp === 'Temporario' ? 'active' : ''}`}
          onClick={() => setSearchOp('Temporario')}
        >
          Temporario
        </button>
      </div>
      <div className="border border-t-0 border-borde rounded-b-xl p-4 md:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          <div>
            <label className="form-label">Tipo</label>
            <select
              className="form-input text-sm"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="">Todos</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">Zona</label>
            <select
              className="form-input text-sm"
              value={searchZone}
              onChange={(e) => setSearchZone(e.target.value)}
            >
              {ZONES.map((z) => (
                <option key={z.value} value={z.value}>{z.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">Localidad</label>
            <select
              className="form-input text-sm"
              value={searchLoc}
              onChange={(e) => setSearchLoc(e.target.value)}
            >
              <option value="">Todas</option>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">Ambientes</label>
            <select
              className="form-input text-sm"
              value={searchRooms}
              onChange={(e) => setSearchRooms(e.target.value)}
            >
              <option value="">Todos</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option value="5">+4</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="form-label">Moneda</label>
            <select
              className="form-input text-sm"
              value={searchCurrency}
              onChange={(e) => setSearchCurrency(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="ARS">ARS</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div>
            <label className="form-label">Precio máximo</label>
            <input
              type="number"
              className="form-input text-sm"
              placeholder="Ej: 200000"
              value={searchPriceMax}
              onChange={(e) => setSearchPriceMax(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btn-primary w-full justify-center py-3 text-base"
          onClick={handleSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i>Buscar propiedades
        </button>
      </div>
    </div>
  );
}