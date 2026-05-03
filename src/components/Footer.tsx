'use client';

import Link from 'next/link';
import { SUCURSALES } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-primario text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primario font-extrabold text-lg leading-none">
                  I
                </span>
              </div>
              <span className="text-xl font-extrabold tracking-tight">Inmoria</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Inmobiliaria con más de 25 años de trayectoria en Zona Oeste del GBA.
              Profesionalismo y confianza en cada operación.
            </p>
            <p className="text-xs text-white/50 mb-1">
              Matrícula CPI N.º 12.345 — CMCyCP PBA
            </p>
            <p className="text-xs text-white/50">Fundada en 2001</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
              Operaciones
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/propiedades?op=Venta" className="hover:text-white">
                  Propiedades en venta
                </Link>
              </li>
              <li>
                <Link href="/propiedades?op=Alquiler" className="hover:text-white">
                  Propiedades en alquiler
                </Link>
              </li>
              <li>
                <Link href="/propiedades?op=Temporario" className="hover:text-white">
                  Alquiler temporario
                </Link>
              </li>
              <li>
                <Link href="/emprendimientos" className="hover:text-white">
                  Emprendimientos
                </Link>
              </li>
              <li>
                <Link href="/tasaciones" className="hover:text-white">
                  Tasaciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
              Sucursales
            </h4>
            <div className="space-y-4 text-sm text-white/75">
              {SUCURSALES.map((s) => (
                <div key={s.id}>
                  <p className="font-medium text-white text-xs mb-0.5">
                    {s.name}
                  </p>
                  <p>{s.address}</p>
                  <p>{s.phone}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
              Recibí novedades
            </h4>
            <p className="text-sm text-white/70 mb-4">
              Suscribite y recibí oportunidades según tu interés.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                required
                className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
              />
              <div className="flex flex-wrap gap-2">
                <button type="button" className="chip active border-white/30! bg-white/20!">
                  Todo
                </button>
                <button type="button" className="chip !border-white/30/70">
                  Alquiler
                </button>
                <button type="button" className="chip !border-white/30/70">
                  Venta
                </button>
                <button type="button" className="chip !border-white/30/70">
                  Emprend.
                </button>
              </div>
              <button type="submit" className="btn-acento w-full justify-center text-sm py-2.5">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/50 uppercase tracking-wider">
              Publicamos en:
            </span>
            <div className="flex items-center gap-4 text-white/40 text-sm font-semibold">
              <span>CIA</span>
              <span>Zonaprop</span>
              <span>MercadoLibre</span>
              <span>Argenprop</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="mt-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Inmoria. Todos los derechos reservados.{' '}
          <Link href="/privacidad" className="underline hover:text-white/60">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}