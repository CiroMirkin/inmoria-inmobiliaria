'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  PROPERTIES,
  PROPERTY_TYPES,
  OPERATIONS,
  LOCATIONS,
  formatPrice,
  getSlug,
} from '@/lib/data';
import { Header, Footer, WhatsAppButton } from '@/components/Header';

export default function PropiedadesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState({
    operation: searchParams.get('op') || '',
    type: searchParams.get('tipo') || '',
    zone: searchParams.get('zona') || '',
    rooms: searchParams.get('amb') || '',
    location: searchParams.get('localidad') || '',
    currency: searchParams.get('moneda') || '',
    priceMax: searchParams.get('preciohasta') || '',
    address: '',
    code: '',
  });

  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filters.operation && p.operation !== filters.operation) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.rooms) {
      const r = filters.rooms === '+4' ? 5 : parseInt(filters.rooms);
      if (filters.rooms === '+4' && p.rooms < 4) return false;
      if (filters.rooms !== '+4' && p.rooms !== r) return false;
    }
    if (filters.location && p.location !== filters.location) return false;
    if (filters.currency && p.currency !== filters.currency) return false;
    if (filters.priceMax && p.price > parseInt(filters.priceMax)) return false;
    if (filters.address && !p.address.toLowerCase().includes(filters.address.toLowerCase())) return false;
    return true;
  });

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== 'address' && key !== 'code') {
        params.set(key, value);
      }
    });
    router.push(`/propiedades?${params.toString()}`);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setFilters({
      operation: '',
      type: '',
      zone: '',
      rooms: '',
      location: '',
      currency: '',
      priceMax: '',
      address: '',
      code: '',
    });
  };

  return (
    <>
      <Header />
      <main id="contenido" role="main">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-2">
              Catálogo de propiedades
            </h1>
            <p className="text-gris" id="pcnt">
              {filteredProperties.length} propiedades encontradas
            </p>
          </div>

          <div className="flex gap-8">
            {/* Sidebar filters - desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="bg-gcl rounded-xl p-5 border border-borde sticky top-24 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-oscuro">
                    Filtros
                  </h3>
                  <button
                    onClick={clearFilters}
                    className="text-xs text-pm hover:underline"
                  >
                    Limpiar
                  </button>
                </div>

                <div>
                  <label className="form-label">Operación</label>
                  <select
                    className="form-input text-sm"
                    value={filters.operation}
                    onChange={(e) =>
                      setFilters({ ...filters, operation: e.target.value })
                    }
                  >
                    <option value="">Todas</option>
                    {OPERATIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">Tipo</label>
                  <select
                    className="form-input text-sm"
                    value={filters.type}
                    onChange={(e) =>
                      setFilters({ ...filters, type: e.target.value })
                    }
                  >
                    <option value="">Todos</option>
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">Ambientes</label>
                  <div className="flex flex-wrap gap-1.5">
                    {['1', '2', '3', '4', '+4'].map((a) => (
                      <button
                        key={a}
                        className={`chip ${filters.rooms === a ? 'active' : ''}`}
                        onClick={() =>
                          setFilters({ ...filters, rooms: a })
                        }
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Localidad</label>
                  <select
                    className="form-input text-sm"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                  >
                    <option value="">Todas</option>
                    {LOCATIONS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">Moneda</label>
                  <div className="flex gap-2">
                    {[
                      { value: '', label: 'Todas' },
                      { value: 'ARS', label: 'ARS' },
                      { value: 'USD', label: 'USD' },
                    ].map((m) => (
                      <button
                        key={m.value}
                        className={`chip ${filters.currency === m.value ? 'active' : ''}`}
                        onClick={() =>
                          setFilters({ ...filters, currency: m.value })
                        }
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="form-label">Precio máximo</label>
                    <input
                      type="number"
                      className="form-input text-sm"
                      placeholder="Ej: 200000"
                      value={filters.priceMax}
                      onChange={(e) =>
                        setFilters({ ...filters, priceMax: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    <i className="fa-solid fa-map-pin mr-1"></i>Dirección
                  </label>
                  <input
                    type="text"
                    className="form-input text-sm"
                    placeholder="Buscar por dirección"
                    value={filters.address}
                    onChange={(e) =>
                      setFilters({ ...filters, address: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="form-label">
                    <i className="fa-solid fa-hashtag mr-1"></i>Código
                  </label>
                  <input
                    type="text"
                    className="form-input text-sm"
                    placeholder="Ej: 001234"
                    value={filters.code}
                    onChange={(e) =>
                      setFilters({ ...filters, code: e.target.value })
                    }
                  />
                </div>

                <button
                  onClick={applyFilters}
                  className="btn-primary w-full justify-center text-sm py-2.5"
                >
                  <i className="fa-solid fa-filter"></i>Aplicar filtros
                </button>
              </div>
            </aside>

            {/* Properties grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-4 gap-3">
                <button
                  onClick={() => setShowFilters(true)}
                  className="btn-primary text-sm py-2 lg:hidden"
                >
                  <i className="fa-solid fa-sliders"></i>Filtros
                </button>
              </div>

              {filteredProperties.length === 0 ? (
                <div className="text-center py-16">
                  <i className="fa-solid fa-building-circle-xmark text-5xl text-borde mb-4"></i>
                  <h3 className="text-xl font-bold text-oscuro mb-2">
                    No se encontraron propiedades
                  </h3>
                  <p className="text-gris mb-6">
                    Probá modificando los filtros.
                  </p>
                  <Link href="/contacto" className="btn-primary">
                    Contactar a un asesor
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredProperties.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filters overlay */}
        {showFilters && (
          <div
            className="filter-overlay open"
            onClick={() => setShowFilters(false)}
          />
        )}
        {/* Mobile filters drawer */}
        <div className={`filter-drawer ${showFilters ? 'open' : ''}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-oscuro">Filtros</h3>
            <button
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Cerrar"
              onClick={() => setShowFilters(false)}
            >
              <i className="fa-solid fa-xmark text-xl text-gris"></i>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="form-label">Operación</label>
              <select
                className="form-input text-sm"
                value={filters.operation}
                onChange={(e) =>
                  setFilters({ ...filters, operation: e.target.value })
                }
              >
                <option value="">Todas</option>
                {OPERATIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Tipo</label>
              <select
                className="form-input text-sm"
                value={filters.type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              >
                <option value="">Todos</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Localidad</label>
              <select
                className="form-input text-sm"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <option value="">Todas</option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="form-label">Precio máximo</label>
                <input
                  type="number"
                  className="form-input text-sm"
                  value={filters.priceMax}
                  onChange={(e) =>
                    setFilters({ ...filters, priceMax: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label className="form-label">
                <i className="fa-solid fa-hashtag mr-1"></i>Código
              </label>
              <input
                type="text"
                className="form-input text-sm"
                placeholder="Ej: 001234"
                value={filters.code}
                onChange={(e) =>
                  setFilters({ ...filters, code: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={clearFilters}
              className="btn-outline text-sm flex-1 justify-center"
            >
              Limpiar
            </button>
            <button
              onClick={applyFilters}
              className="btn-primary text-sm flex-1 justify-center"
            >
              Ver resultados
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function PropertyCard({ property }: { property: typeof PROPERTIES[0] }) {
  return (
    <article className="bg-white rounded-xl border border-borde overflow-hidden card-hover img-zoom">
      <div className="relative aspect-[4/3]">
        <Image
          src={property.images[0]}
          alt={`${property.type} en ${property.location}`}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
        {property.reserved && (
          <span className="badge-reserved absolute top-3 left-3">
            Reservado
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-gris px-2 py-1 rounded">
          {property.id}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-primario">
            {formatPrice(property.price, property.currency)}
          </span>
          <span className="text-xs font-medium text-acento bg-acl px-2 py-0.5 rounded">
            {property.operation}
          </span>
        </div>
        <p className="text-sm font-semibold text-oscuro mb-1">
          {property.type} — {property.location}
        </p>
        <p className="text-xs text-gris mb-3">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {property.address}
        </p>
        <div className="flex items-center gap-4 text-xs text-gris">
          {property.rooms > 0 && (
            <span>
              <i className="fa-solid fa-door-open mr-1 text-pm"></i>
              {property.rooms} amb
            </span>
          )}
          {property.bedrooms > 0 && (
            <span>
              <i className="fa-solid fa-bed mr-1 text-pm"></i>
              {property.bedrooms} dorm
            </span>
          )}
          {property.bathrooms > 0 && (
            <span>
              <i className="fa-solid fa-bath mr-1 text-pm"></i>
              {property.bathrooms}
            </span>
          )}
          {property.garage && (
            <span>
              <i className="fa-solid fa-car mr-1 text-pm"></i>Coch.
            </span>
          )}
        </div>
        {property.totalArea > 0 && (
          <p className="text-xs text-gris mt-1">
            <i className="fa-solid fa-ruler-combined mr-1 text-pm"></i>
            {property.totalArea} m²
          </p>
        )}
        <Link
          href={`/propiedades/${getSlug(property)}`}
          className="block mt-4 text-center text-sm font-semibold text-pm hover:text-primario transition-colors border border-primario/20 rounded-lg py-2 hover:bg-pcl"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}