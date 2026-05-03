'use client';

import Image from 'next/image';
import { SUCURSALES, LOCATIONS } from '@/lib/data';

export default function Empresa() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <p className="form-label text-pm mb-1">Desde 2001</p>
        <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
          Sobre Inmoria
        </h1>
        <p className="text-gris">
          Tradición, profesionalismo y confianza en cada operación.
        </p>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/inmfounder/600/500"
                alt="Fundador"
                className="w-full h-auto"
                width={600}
                height={500}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primario mb-4">
                Martín E. Álvarez
              </h2>
              <p className="text-sm text-gris mb-4 font-medium">
                Fundador — Corredor Público Inmobiliario
              </p>
              <p className="text-sm text-gris mb-2">
                <strong>Matrícula CPI N.º 12.345</strong>
              </p>
              <p className="text-sm text-gris mb-4">
                Colegio de Martilleros y Corredores Públicos de la PBA
              </p>
              <p className="text-gris leading-relaxed mb-4">
                En 2001, con la visión de profesionalizar el mercado inmobiliario
                de Zona Oeste, Martín fundó Inmoria. Lo que comenzó como una
                pequeña oficina en Ciudadela, hoy es una referente regional con
                tres sucursales y un equipo de 18 profesionales.
              </p>
              <p className="text-gris leading-relaxed">
                La filosofía de Inmoria se basa en el conocimiento profundo de
                cada barrio, la relación personalizada con cada cliente y la
                actualización constante en normativas y tecnología del sector.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {[
              { n: '25+', l: 'Años de trayectoria' },
              { n: '3500+', l: 'Operaciones concretadas' },
              { n: '18', l: 'Profesionales en el equipo' },
              { n: '7', l: 'Localidades cubiertas' },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-pcl rounded-xl p-5 text-center"
              >
                <p className="text-3xl font-extrabold text-primario mb-1">
                  {s.n}
                </p>
                <p className="text-xs text-gris">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primario mb-4">
              Localidades de cobertura
            </h2>
            <div className="flex flex-wrap gap-3">
              {LOCATIONS.map((l) => (
                <span
                  key={l}
                  className="bg-gcl border border-borde px-4 py-2 rounded-lg text-sm font-medium text-oscuro"
                >
                  <i className="fa-solid fa-location-dot text-pm mr-1.5"></i>
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gcl rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-primario mb-4">
              Nuestras sucursales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SUCURSALES.map((s) => (
                <div
                  key={s.id}
                  className="bg-white rounded-xl p-5 border border-borde"
                >
                  <div className="w-10 h-10 bg-pcl rounded-lg flex items-center justify-center mb-3">
                    <i className="fa-solid fa-building text-primario"></i>
                  </div>
                  <p className="font-bold text-sm text-oscuro mb-1">
                    {s.name}
                  </p>
                  <p className="text-sm text-gris">{s.address}</p>
                  <p className="text-sm text-gris">{s.phone}</p>
                  <div className="mt-2 text-xs text-gris">
                    {Object.entries(s.hours).map(([k, v]) => (
                      <p key={k}>
                        <strong>{k}:</strong> {v as string}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 justify-center">
            <div className="bg-gcl rounded-xl px-6 py-3 border border-borde">
              <span className="text-sm font-bold text-oscuro">CIA</span>
            </div>
            <div className="bg-gcl rounded-xl px-6 py-3 border border-borde">
              <span className="text-sm font-bold text-oscuro">
                Colegio de Martilleros y Corredores Públicos PBA
              </span>
            </div>
          </div>
        </div>
  );
}