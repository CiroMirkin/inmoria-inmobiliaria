'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
import { PropertyCard } from '@/components/PropertyCard';
import { HeroSearch } from '@/components/HeroSearch';

export default function Home() {
  const router = useRouter();
  const filteredProperties = PROPERTIES.filter((p) => !p.reserved).slice(0, 6);
  const featuredDevelopments = DEVELOPMENTS.slice(0, 3);
  const recentOpinions = OPINIONS.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSearch = (filters: { operation: string; type: string; zone: string; location: string; rooms: string; currency: string; priceMax: string }) => {
    const params = new URLSearchParams();
    if (filters.operation) params.set('op', filters.operation);
    if (filters.type) params.set('tipo', filters.type);
    if (filters.zone) params.set('zona', filters.zone);
    if (filters.location) params.set('localidad', filters.location);
    if (filters.rooms) params.set('amb', filters.rooms);
    if (filters.currency) params.set('moneda', filters.currency);
    if (filters.priceMax) params.set('preciohasta', filters.priceMax);
    router.push(`/propiedades?${params.toString()}`);
  };

  return (
    <>
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
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-primario transition-colors hover:bg-white/90"
                >
                  <i className="fa-solid fa-search"></i>Ver propiedades
                </Link>
                <Link
                  href="/tasaciones"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
                >
                  <i className="fa-solid fa-calculator"></i>Solicitar tasación
                </Link>
              </div>
            </div>
            {/* Search box */}
              <HeroSearch onSearch={handleSearch} />
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal flex items-end justify-between mb-10">
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
            <div className="reveal text-center mb-12">
              <p className="form-label text-pm mb-1">Lo que hacemos</p>
              <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                Nuestros servicios
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'fa-handshake', title: 'Compra y Venta', desc: 'Acompañamiento completo en la compraventa con asistencia legal y documental.' },
                { icon: 'fa-key', title: 'Alquiler', desc: 'Gestión integral: búsqueda, contratos, garantías y seguimiento post-alquiler.' },
                { icon: 'fa-calendar-days', title: 'Temporario', desc: 'Propiedades amuebladas listas para habitar, ideales para estadías cortas.' },
                { icon: 'fa-calculator', title: 'Tasaciones', desc: 'Tasación presencial y gratuita por matriculado con informe detallado.' },
                { icon: 'fa-clipboard-list', title: 'Administración', desc: 'Administración profesional: cobros, inspecciones, mantenimiento.' },
              ].map((service, i) => (
                <div
                  key={service.title}
                  className="reveal bg-white rounded-xl p-6 border border-borde card-hover"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-12 h-12 bg-pcl rounded-lg flex items-center justify-center mb-4">
                    <i className={`fa-solid ${service.icon} text-primario text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-oscuro mb-2">{service.title}</h3>
                  <p className="text-sm text-gris leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
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
                    <span key={l} className="text-xs font-medium bg-pcl text-primario px-3 py-1.5 rounded-full">
                      {l}
                    </span>
                  ))}
                </div>
                <Link href="/empresa" className="btn-primary">
                  Conoce más <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="reveal" style={{ transitionDelay: '150ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop&q=80"
                    alt="Oficina Inmoria"
                    className="w-full h-auto"
                    width={700}
                    height={500}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-oscuro/80 to-transparent p-6">
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                      <AnimatedCounter value={25} suffix="+" label="Años" />
                      <AnimatedCounter value={3500} suffix="+" label="Operaciones" />
                      <AnimatedCounter value={7} suffix="" label="Localidades" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Tasaciones */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal bg-primario rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
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
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-primario transition-colors hover:bg-white/90"
                >
                  <i className="fa-solid fa-calculator"></i>Solicitar tasación
                </Link>
                <Link
                  href={`https://wa.me/5491146551234?text=${encodeURIComponent('Hola, quiero solicitar una tasación')}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
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
            <div className="reveal text-center mb-12">
              <p className="form-label text-pm mb-1">
                Lo que dicen nuestros clientes
              </p>
              <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                Opiniones verificadas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentOpinions.map((o) => (
                <div key={o.id} className="reveal bg-white rounded-xl p-6 border border-borde card-hover">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${
                          i <= o.rating ? 'text-amber-500' : 'text-slate-300'
                        } text-sm`}
                      ></i>
                    ))}
                  </div>
                  <p className="text-sm text-gris leading-relaxed mb-4">
                    &ldquo;{o.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pcl rounded-full flex items-center justify-center">
                      <span className="text-primario font-bold text-sm">{o.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-oscuro">{o.name}</p>
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
              <div className="reveal">
                <p className="form-label text-pm mb-1">Hablemos</p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro mb-6">
                  Contactanos
                </h2>
                <div className="space-y-5">
                  {[
                    { branch: 'Sucursal Ciudadela', address: 'Av. Rivadavia 12500, Ciudadela', phone: '011 4655-1234' },
                    { branch: 'Sucursal Morón', address: 'Av. Rivadavia 16800, Morón', phone: '011 4627-5678' },
                    { branch: 'Sucursal Ramos Mejía', address: 'Av. Rivadavia 14200, Ramos Mejía', phone: '011 4653-9012' },
                  ].map((s) => (
                    <div key={s.branch} className="flex gap-4">
                      <div className="w-10 h-10 bg-pcl rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-building text-primario"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-oscuro">{s.branch}</p>
                        <p className="text-sm text-gris">{s.address}</p>
                        <p className="text-sm text-gris">{s.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal" style={{ transitionDelay: '150ms' }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div>
      <p className="text-2xl font-extrabold">
        {count.toLocaleString('es-AR')}{suffix}
      </p>
      <p className="text-xs opacity-75">{label}</p>
    </div>
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