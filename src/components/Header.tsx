'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import Image from 'next/image';

const WHATSAPP_MSG =
  'Hola, quiero información sobre propiedades en Zona Oeste';

export { Footer, WhatsAppButton };

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
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image 
                  height={50}
                  width={50}
                  alt=''
                  src="/isotipo.png"
                />
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