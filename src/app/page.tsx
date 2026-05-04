'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PROPERTIES, OPINIONS, LOCATIONS } from '@/lib/data';
import { PropertyCard } from '@/components/PropertyCard';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const filteredProperties = PROPERTIES.filter((p) => !p.reserved).slice(0, 6);
  const recentOpinions = OPINIONS.slice(0, 4);

  return (
    <main id="contenido" role="main">
      <Hero />

      <section className="py-16 md:py-20 bg-[#E0F2F8]" style={{
        background: `linear-gradient(to bottom, #ffffff, #E8EDF2)`,
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="form-label text-pm mb-1">Oportunidades seleccionadas</p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                  Propiedades destacadas
                </h2>
              </div>
              <Link href="/propiedades" className="btn-outline text-sm hidden md:inline-flex">
                Ver todas <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/propiedades" className="btn-outline">
              Ver todas <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gcl">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="form-label text-pm mb-1">Lo que hacemos</p>
              <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                Nuestros servicios
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fa-handshake', title: 'Compra y Venta', desc: 'Acompañamiento completo en la compraventa con asistencia legal y documental.' },
              { icon: 'fa-key', title: 'Alquiler', desc: 'Gestión integral: búsqueda, contratos, garantías y seguimiento post-alquiler.' },
              { icon: 'fa-calendar-days', title: 'Temporario', desc: 'Propiedades amuebladas listas para habitar, ideales para estadías cortas.' },
              { icon: 'fa-calculator', title: 'Tasaciones', desc: 'Tasación presencial y gratuita por matriculado con informe detallado.' },
              { icon: 'fa-clipboard-list', title: 'Administración', desc: 'Administración profesional: cobros, inspecciones, mantenimiento.' },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-6 border border-borde card-hover h-full">
                  <div className="w-12 h-12 bg-pcl rounded-lg flex items-center justify-center mb-4">
                    <i className={`fa-solid ${service.icon} text-primario text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-oscuro mb-2">{service.title}</h3>
                  <p className="text-sm text-gris leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
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
            </Reveal>
            <Reveal delay={0.15}>
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="bg-primario rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
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
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gcl">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="form-label text-pm mb-1">Lo que dicen nuestros clientes</p>
              <h2 className="text-3xl md:text-[32px] font-bold text-oscuro">
                Opiniones verificadas
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentOpinions.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-6 border border-borde card-hover">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className={`fa-solid fa-star ${i <= o.rating ? 'text-amber-500' : 'text-slate-300'} text-sm`}></i>
                    ))}
                  </div>
                  <p className="text-sm text-gris leading-relaxed mb-4">&ldquo;{o.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pcl rounded-full flex items-center justify-center">
                      <span className="text-primario font-bold text-sm">{o.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-oscuro">{o.name}</p>
                      <p className="text-xs text-gris">
                        {new Date(o.date).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/opiniones" className="btn-outline text-sm">
              Ver todas las opiniones <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <p className="form-label text-pm mb-1">Hablemos</p>
                <h2 className="text-3xl md:text-[32px] font-bold text-oscuro mb-6">Contactanos</h2>
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
            </Reveal>
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const step = Math.max(1, Math.ceil(value / 40))
    const interval = setInterval(() => {
      current += step
      if (current >= value) {
        current = value
        clearInterval(interval)
      }
      setCount(current)
    }, 30)
    return () => clearInterval(interval)
  }, [value])

  return (
    <div>
      <p className="text-2xl font-extrabold">{count.toLocaleString('es-AR')}{suffix}</p>
      <p className="text-xs opacity-75">{label}</p>
    </div>
  )
}
