'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  PROPERTIES,
  DEVELOPMENTS,
  OPINIONS,
  LOCATIONS,
  PROPERTY_TYPES,
  OPERATIONS,
  formatPrice,
  getSlug,
} from '@/lib/data';
import { Header, Footer, WhatsAppButton } from '@/components/Header';

export default function Home() {
  const [searchOp, setSearchOp] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchLoc, setSearchLoc] = useState('');
  const [searchRooms, setSearchRooms] = useState('');
  const [searchCurrency, setSearchCurrency] = useState('');
  const [searchAddress, setSearchAddress] = useState('');
  const [searchCode, setSearchCode] = useState('');

  const filteredProperties = PROPERTIES.filter((p) => !p.reserved).slice(0, 6);
  const featuredDevelopments = DEVELOPMENTS.slice(0, 3);
  const recentOpinions = OPINIONS.slice(0, 4);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchOp) params.set('op', searchOp);
    if (searchType) params.set('tipo', searchType);
    if (searchLoc) params.set('localidad', searchLoc);
    if (searchRooms) params.set('amb', searchRooms);
    if (searchCurrency) params.set('moneda', searchCurrency);
    if (searchAddress) params.set('direccion', searchAddress);
    if (searchCode) params.set('codigo', searchCode);
    window.location.href = `/propiedades?${params.toString()}`;
  };

  return (
    <>
      <Header />
      <main id="contenido" role="main">
        {/* Hero */}
        <section className="hero-bg min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full py-20">
            <div className="max-w-2xl mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-4">
                Tu próximo hogar en Zona Oeste
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Propiedades en Ciudadela, Haedo, Ramos Mejía, Morón y más.
                Más de 25 años acompañando familias y empresas.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/propiedades"
                  className="bg-white text-primario font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-search"></i>Ver propiedades
                </Link>
                <Link
                  href="/tasaciones"
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-calculator"></i>Solicitar tasación
                </Link>
              </div>
            </div>
            {/* Search box */}
            <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-4xl">
              <div className="flex gap-1 mb-0" id="htabs">
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
                      id="ht"
                      className="form-input text-sm"
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
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
                      id="hl"
                      className="form-input text-sm"
                      value={searchLoc}
                      onChange={(e) => setSearchLoc(e.target.value)}
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
                    <label className="form-label">Ambientes</label>
                    <select
                      id="ha"
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
                  <div>
                    <label className="form-label">Moneda</label>
                    <select
                      id="hm"
                      className="form-input text-sm"
                      value={searchCurrency}
                      onChange={(e) => setSearchCurrency(e.target.value)}
                    >
                      <option value="">Todas</option>
                      <option value="ARS">ARS</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="form-label">
                      <i className="fa-solid fa-map-pin mr-1"></i>Dirección
                    </label>
                    <input
                      type="text"
                      id="hdir"
                      className="form-input text-sm"
                      placeholder="Ej: Av. Rivadavia 12000"
                      value={searchAddress}
                      onChange={(e) => setSearchAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      <i className="fa-solid fa-hashtag mr-1"></i>Código ref.
                    </label>
                    <input
                      type="text"
                      id="hcod"
                      className="form-input text-sm"
                      placeholder="Ej: 001234"
                      value={searchCode}
                      onChange={(e) => setSearchCode(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  id="hbus"
                  className="btn-primary w-full justify-center py-3 text-base"
                  onClick={handleSearch}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>Buscar
                  propiedades
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10 animate-rv">
              <div>
                <p className="form-label text-pm mb-1">
                  Oportunidades seleccionadas
                </p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                  Propiedades destacadas
                </h2>
              </div>
              <Link href="/propiedades" className="btn-outline text-sm hidden md:inline-flex">
                Ver todas <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link href="/propiedades" className="btn-outline">
                Ver todas <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-gcl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-rv">
              <p className="form-label text-pm mb-1">Lo que hacemos</p>
              <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                Nuestros servicios
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'fa-handshake',
                  title: 'Compra y Venta',
                  desc: 'Acompañamiento completo en la compraventa con asistencia legal y documental.',
                },
                {
                  icon: 'fa-key',
                  title: 'Alquiler',
                  desc: 'Gestión integral: búsqueda, contratos, garantías y seguimiento post-alquiler.',
                },
                {
                  icon: 'fa-calendar-days',
                  title: 'Temporario',
                  desc: 'Propiedades amuebladas listas para habitar, ideales para estadías cortas.',
                },
                {
                  icon: 'fa-building',
                  title: 'Emprendimientos',
                  desc: 'Las mejores oportunidades en desarrollos nuevos de Zona Oeste.',
                },
                {
                  icon: 'fa-calculator',
                  title: 'Tasaciones',
                  desc: 'Tasación presencial y gratuita por matriculado con informe detallado.',
                },
                {
                  icon: 'fa-clipboard-list',
                  title: 'Administración',
                  desc: 'Administración profesional: cobros, inspecciones, mantenimiento.',
                },
              ].map((service, i) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-6 border border-borde card-hover animate-rv"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-12 h-12 bg-pcl rounded-lg flex items-center justify-center mb-4">
                    <i className={`fa-solid ${service.icon} text-primario text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-oscuro mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gris leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-rv">
                <p className="form-label text-pm mb-1">Sobre nosotros</p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro mb-6">
                  Más de 25 años en Zona Oeste
                </h2>
                <p className="text-gris leading-relaxed mb-4">
                  Inmoria nació en 2001 de la mano de{' '}
                  <strong className="text-oscuro">Martín E. Álvarez</strong>,
                  matriculado como Corredor Público (CPI N.º 12.345) ante el
                  Colegio de Martilleros y Corredores Públicos de la PBA.
                </p>
                <p className="text-gris leading-relaxed mb-6">
                  Hoy contamos con 3 sucursales, un equipo de 18 profesionales y más
                  de 3.500 operaciones concretadas en 7 localidades.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {LOCATIONS.map((l) => (
                    <span
                      key={l}
                      className="text-xs font-medium bg-pcl text-primario px-3 py-1.5 rounded-full"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <Link href="/empresa" className="btn-primary">
                  Conoce más <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="animate-rv">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://picsum.photos/seed/inmofic/700/500"
                    alt="Oficina Inmoria"
                    className="w-full h-auto"
                    width={700}
                    height={500}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-oscuro/80 to-transparent p-6">
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                      <div>
                        <p className="text-2xl font-extrabold">25+</p>
                        <p className="text-xs opacity-75">Años</p>
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold">3500+</p>
                        <p className="text-xs opacity-75">Operaciones</p>
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold">7</p>
                        <p className="text-xs opacity-75">Localidades</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developments */}
        <section className="py-16 md:py-20 bg-pcl/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10 animate-rv">
              <div>
                <p className="form-label text-pm mb-1">Inversiones en obra</p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                  Emprendimientos destacados
                </h2>
              </div>
              <Link href="/emprendimientos" className="btn-outline text-sm hidden md:inline-flex">
                Ver todos <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDevelopments.map((e) => (
                <DevelopmentCard key={e.id} development={e} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Tasaciones */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-primario rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 animate-rv">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Tasá tu propiedad sin costo
                </h2>
                <p className="text-white/75 leading-relaxed">
                  Tasación presencial por profesional matriculado. Recibí un informe
                  detallado del valor de tu propiedad, sin compromiso.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/tasaciones"
                  className="bg-white text-primario font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-calculator"></i>Solicitar tasación
                </Link>
                <Link
                  href={`https://wa.me/5491146551234?text=${encodeURIComponent('Hola, quiero solicitar una tasación')}`}
                  target="_blank"
                  rel="noopener"
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp"></i>WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Opinions */}
        <section className="py-16 md:py-20 bg-gcl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-rv">
              <p className="form-label text-pm mb-1">
                Lo que dicen nuestros clientes
              </p>
              <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                Opiniones verificadas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentOpinions.map((o) => (
                <div
                  key={o.id}
                  className="bg-white rounded-xl p-6 border border-borde card-hover animate-rv"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${
                          i <= o.rating ? 'star filled' : 'star'
                        }`}
                      ></i>
                    ))}
                  </div>
                  <p className="text-sm text-gris leading-relaxed mb-4">
                    &quot;{o.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pcl rounded-full flex items-center justify-center">
                      <span className="text-primario font-bold text-sm">
                        {o.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-oscuro">
                        {o.name}
                      </p>
                      <p className="text-xs text-gris">
                        {new Date(o.date).toLocaleDateString('es-AR', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/opiniones" className="btn-outline text-sm">
                Ver todas las opiniones{' '}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-rv">
                <p className="form-label text-pm mb-1">Hablemos</p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro mb-6">
                  Contactanos
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      branch: 'Sucursal Ciudadela',
                      address: 'Av. Rivadavia 12500, Ciudadela',
                      phone: '011 4655-1234',
                    },
                    {
                      branch: 'Sucursal Morón',
                      address: 'Av. Rivadavia 16800, Morón',
                      phone: '011 4627-5678',
                    },
                    {
                      branch: 'Sucursal Ramos Mejía',
                      address: 'Av. Rivadavia 14200, Ramos Mejía',
                      phone: '011 4653-9012',
                    },
                  ].map((s) => (
                    <div key={s.branch} className="flex gap-4">
                      <div className="w-10 h-10 bg-pcl rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-building text-primario"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-oscuro">
                          {s.branch}
                        </p>
                        <p className="text-sm text-gris">{s.address}</p>
                        <p className="text-sm text-gris">{s.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-rv">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
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

function DevelopmentCard({ development }: { development: typeof DEVELOPMENTS[0] }) {
  return (
    <article className="bg-white rounded-xl border border-borde overflow-hidden card-hover img-zoom">
      <div className="relative aspect-[4/3]">
        <Image
          src={development.images[0]}
          alt={development.name}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
        <span className="absolute top-3 left-3 bg-acento text-white text-xs font-bold px-3 py-1 rounded">
          {development.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-oscuro mb-1">
          {development.name}
        </h3>
        <p className="text-sm text-gris mb-3">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {development.address}
        </p>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-semibold text-primario">
            Desde USD {development.priceFrom.toLocaleString('es-AR')}
          </span>
          <span className="text-xs text-gris">| {development.type}</span>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gris mb-1">
            <span>Avance</span>
            <span>{development.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gcl rounded-full overflow-hidden">
            <div
              className="h-full bg-acento rounded-full"
              style={{ width: `${development.progress}%` }}
            ></div>
          </div>
        </div>
        <Link
          href={`/emprendimientos/${development.id}`}
          className="block text-center text-sm font-semibold text-pm hover:text-primario transition-colors border border-primario/20 rounded-lg py-2 hover:bg-pcl"
        >
          Ver emprendimiento
        </Link>
      </div>
    </article>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Consulta enviada correctamente. Nos comunicaremos pronto.');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-borde p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            required
            className="form-input"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            required
            className="form-input"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="form-label">Teléfono</label>
        <input
          type="tel"
          name="telefono"
          className="form-input"
          placeholder="11 1234-5678"
          value={formData.telefono}
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
        />
      </div>
      <div>
        <label className="form-label">Asunto</label>
        <input
          type="text"
          name="asunto"
          className="form-input"
          placeholder="¿En qué podemos ayudarte?"
          value={formData.asunto}
          onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
        />
      </div>
      <div>
        <label className="form-label">Mensaje</label>
        <textarea
          name="mensaje"
          rows={3}
          className="form-input"
          placeholder="Contanos qué buscás..."
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center py-3">
        Enviar consulta <i className="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  );
}