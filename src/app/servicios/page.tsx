'use client';

import { Header, Footer, WhatsAppButton } from '@/components/Header';

export default function Servicios() {
  const services = [
    {
      icon: 'fa-handshake',
      title: 'Compra y Venta',
      desc: 'Acompañamos cada etapa: desde la búsqueda hasta la escritura. Asesoramiento legal, documental y financiero completo. Negociación profesional para obtener la mejor operación.',
    },
    {
      icon: 'fa-key',
      title: 'Alquiler',
      desc: 'Gestión integral del alquiler: publicación en portales, selección de inquilinos, redacción de contratos, gestión de garantías (seguro de caución, fiador, garantía propietaria) y seguimiento.',
    },
    {
      icon: 'fa-calendar-days',
      title: 'Temporario',
      desc: 'Propiedades amuebladas y equipadas listas para habitar. Ideal para ejecutivos, profesionales en tránsito, turistas o familias en transición. Contratos flexibles desde 15 días.',
    },
    {
      icon: 'fa-building',
      title: 'Emprendimientos',
      desc: 'Accedé a las mejores oportunidades en obra nueva de Zona Oeste. Asesoramiento en inversión, análisis de rentabilidad y acompañamiento durante toda la etapa de construcción hasta la entrega.',
    },
    {
      icon: 'fa-calculator',
      title: 'Tasaciones',
      desc: 'Tasación presencial sin costo a cargo de profesional matriculado (CPI). Informe detallado de valor comparativo con análisis de mercado. Sin compromiso de operación.',
    },
    {
      icon: 'fa-clipboard-list',
      title: 'Administración',
      desc: 'Administración profesional de propiedades: cobranza de alquileres, inspecciones periódicas, coordinación de mantenimiento, atención de inquilinos, liquidación de expensas e impuestos.',
    },
  ];

  return (
    <>
      <Header />
      <main id="contenido" role="main">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <p className="form-label text-pm mb-1">Soluciones integrales</p>
            <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
              Nuestros servicios
            </h1>
            <p className="text-gris">
              Cubre todas las necesidades del mercado inmobiliario con profesionalismo.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-6 items-start"
              >
                <div className="w-14 h-14 bg-pcl rounded-xl flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${s.icon} text-primario text-xl`}></i>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-oscuro mb-2">{s.title}</h2>
                  <p className="text-gris leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pcl/40 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-primario mb-6 text-center">
              Cómo trabajamos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { n: '1', t: 'Contacto', d: 'Te escuchamos y entendemos tu necesidad.' },
                { n: '2', t: 'Búsqueda', d: 'Buscamos las mejores opciones del mercado.' },
                { n: '3', t: 'Selección', d: 'Te presentado las propiedades que se ajustan a tu búsqueda.' },
                { n: '4', t: 'Negociación', d: 'Negociamos las mejores condiciones para vos.' },
                { n: '5', t: 'Cierre', d: 'Acompañamos hasta la firma y entrega de llaves.' },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="w-10 h-10 bg-primario rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">
                    {s.n}
                  </div>
                  <p className="text-sm font-bold text-oscuro mb-1">{s.t}</p>
                  <p className="text-xs text-gris">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primario mb-4 text-center">
              Dónde publicamos
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['CIA', 'Zonaprop', 'MercadoLibre', 'Argenprop', 'Properati', 'Nestoria'].map((p) => (
                <div
                  key={p}
                  className="bg-gcl border border-borde rounded-xl px-6 py-3"
                >
                  <span className="text-sm font-bold text-oscuro">{p}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gris mt-4">
              Además, estamos presentes en redes sociales, Google Business Profile y medios gráficos de la zona.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}