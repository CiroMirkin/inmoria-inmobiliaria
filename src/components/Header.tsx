'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SUCURSALES } from '@/lib/data';

const WHATSAPP_MSG =
  'Hola, quiero información sobre propiedades en Zona Oeste';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-borde transition-shadow duration-300">
        <div className="bg-primario text-white text-xs hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-9">
            <div className="flex items-center gap-6">
              <span>
                <i className="fa-solid fa-phone mr-1.5 opacity-75"></i>011 4655-1234
              </span>
              <span>
                <i className="fa-solid fa-envelope mr-1.5 opacity-75"></i>
                info@inmoria.com
              </span>
            </div>
            <span>
              <i className="fa-solid fa-clock mr-1.5 opacity-75"></i>Lun a Vie
              9:00–18:00 | Sáb 9:00–13:00
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primario rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-lg leading-none">
                I
              </span>
            </div>
            <span className="text-xl font-extrabold text-oscuro tracking-tight">
              Inmoria
            </span>
          </Link>
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Navegación principal"
          >
            <Link href="/" className={`nav-link text-sm ${isActive('/') && 'active'}`}>
              Inicio
            </Link>
            <div className="relative group">
              <button className="nav-link text-sm flex items-center gap-1">
                Propiedades{' '}
                <i className="fa-solid fa-chevron-down text-[9px] mt-0.5"></i>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-borde py-2 w-44">
                  <Link
                    href="/propiedades"
                    className="block px-4 py-2 text-sm text-oscuro hover:bg-gcl hover:text-pm transition-colors"
                  >
                    Todas
                  </Link>
                  <Link
                    href="/propiedades?op=Alquiler"
                    className="block px-4 py-2 text-sm text-oscuro hover:bg-gcl hover:text-pm transition-colors"
                  >
                    Alquiler
                  </Link>
                  <Link
                    href="/propiedades?op=Venta"
                    className="block px-4 py-2 text-sm text-oscuro hover:bg-gcl hover:text-pm transition-colors"
                  >
                    Venta
                  </Link>
                  <Link
                    href="/propiedades?op=Temporario"
                    className="block px-4 py-2 text-sm text-oscuro hover:bg-gcl hover:text-pm transition-colors"
                  >
                    Temporario
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/emprendimientos"
              className={`nav-link text-sm ${isActive('/emprendimientos') && 'active'}`}
            >
              Emprendimientos
            </Link>
            <Link
              href="/tasaciones"
              className={`nav-link text-sm ${isActive('/tasaciones') && 'active'}`}
            >
              Tasaciones
            </Link>
            <Link
              href="/empresa"
              className={`nav-link text-sm ${isActive('/empresa') && 'active'}`}
            >
              Empresa
            </Link>
            <Link
              href="/servicios"
              className={`nav-link text-sm ${isActive('/servicios') && 'active'}`}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className={`nav-link text-sm ${isActive('/contacto') && 'active'}`}
            >
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={`https://wa.me/5491146551234?text=${encodeURIComponent(WHATSAPP_MSG)}`}
              target="_blank"
              rel="noopener"
              className="btn-acento text-xs py-2 px-4 hidden md:inline-flex"
            >
              <i className="fa-brands fa-whatsapp text-base"></i> WhatsApp
            </Link>
            <button
              id="mt"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-oscuro"
              aria-label="Menú"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile menu */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Menú móvil"
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-extrabold">Menú</span>
          <button
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Cerrar"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/propiedades"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Propiedades
          </Link>
          <div className="pl-6 flex flex-col gap-1">
            <Link
              href="/propiedades?op=Alquiler"
              className="block px-3 py-2 text-sm text-gris rounded-lg hover:bg-gcl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Alquiler
            </Link>
            <Link
              href="/propiedades?op=Venta"
              className="block px-3 py-2 text-sm text-gris rounded-lg hover:bg-gcl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Venta
            </Link>
            <Link
              href="/propiedades?op=Temporario"
              className="block px-3 py-2 text-sm text-gris rounded-lg hover:bg-gcl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Temporario
            </Link>
          </div>
          <Link
            href="/emprendimientos"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Emprendimientos
          </Link>
          <Link
            href="/tasaciones"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tasaciones
          </Link>
          <Link
            href="/empresa"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Empresa
          </Link>
          <Link
            href="/servicios"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/opiniones"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Opiniones
          </Link>
          <Link
            href="/contacto"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
          <Link
            href="/turnos"
            className="block px-3 py-3 font-medium rounded-lg hover:bg-gcl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Turnos
          </Link>
        </nav>
        <div className="mt-6 pt-5 border-t border-borde">
          <Link
            href={`https://wa.me/5491146551234?text=${encodeURIComponent(WHATSAPP_MSG)}`}
            target="_blank"
            rel="noopener"
            className="btn-acento w-full justify-center text-sm py-3"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
          </Link>
          <div className="mt-3 space-y-1.5 text-sm text-gris">
            <p>
              <i className="fa-solid fa-phone mr-2"></i>011 4655-1234
            </p>
            <p>
              <i className="fa-solid fa-envelope mr-2"></i>info@inmoria.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

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
                <button type="button" className="chip active !border-white/30 !bg-white/20 !text-white">
                  Todo
                </button>
                <button type="button" className="chip !border-white/30 !text-white/70">
                  Alquiler
                </button>
                <button type="button" className="chip !border-white/30 !text-white/70">
                  Venta
                </button>
                <button type="button" className="chip !border-white/30 !text-white/70">
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

export function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/5491146551234?text=${encodeURIComponent(WHATSAPP_MSG)}`}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-acento rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
      aria-label="WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
    </Link>
  );
}