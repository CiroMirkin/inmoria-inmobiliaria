'use client';

import Image from 'next/image';
import { DEVELOPMENTS } from '@/lib/data';
import { Header, Footer, WhatsAppButton } from '@/components/Header';

export default function Emprendimientos() {
  return (
    <>
      <Header />
      <main id="contenido" role="main">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-2">
              Emprendimientos inmobiliarios
            </h1>
            <p className="text-gris">
              Invertí en obra nueva en las mejores ubicaciones de Zona Oeste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {DEVELOPMENTS.map((e) => (
              <DevelopmentCard key={e.id} development={e} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
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
        <a
          href={`/emprendimientos/${development.id}`}
          className="block text-center text-sm font-semibold text-pm hover:text-primario transition-colors border border-primario/20 rounded-lg py-2 hover:bg-pcl"
        >
          Ver emprendimiento
        </a>
      </div>
    </article>
  );
}