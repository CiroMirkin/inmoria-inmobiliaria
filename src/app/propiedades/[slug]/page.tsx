'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { PROPERTIES, formatPrice } from '@/lib/data';

export default function FichaPropiedad() {
  const params = useParams();
  const slug = params.slug as string;
  
  const property = PROPERTIES.find((p) => {
    const propSlug = `${p.type.toLowerCase()}-${p.operation.toLowerCase()}-${p.location.toLowerCase().replace(/\s+/g, '-')}-${p.rooms}-amb-${p.id}`;
    return propSlug === slug;
  });

  if (!property) {
    return (
      <>
        <main id="contenido" className="min-h-screen">
          <div className="text-center py-32">
            <h1 className="text-2xl font-bold mb-4">Propiedad no encontrada</h1>
            <Link href="/propiedades" className="btn-primary">
              Ver catálogo
            </Link>
          </div>
        </main>
      </>
    );
  }

  const similar = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.location === property.location || p.type === property.type)
  ).slice(0, 3);

  const [selectedImage, setSelectedImage] = useState(property.images[0]);

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa la propiedad ${property.id} (${property.type} ${property.operation.toLowerCase()} en ${property.location})`
  );

  return (
    <>
      <main id="contenido" role="main">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav className="text-sm text-gris mb-6">
            <Link href="/" className="hover:text-pm">
              Inicio
            </Link>{' '}
            <i className="fa-solid fa-chevron-right text-[9px] mx-2"></i>
            <Link href="/propiedades" className="hover:text-pm">
              Propiedades
            </Link>{' '}
            <i className="fa-solid fa-chevron-right text-[9px] mx-2"></i>
            <span className="text-oscuro">
              {property.type} en {property.location}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main image and gallery */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl overflow-hidden bg-gcl">
                <div className="aspect-[16/10] relative cursor-pointer">
                  <Image
                    id="fmi"
                    src={selectedImage}
                    alt={property.type}
                    className="w-full h-full object-cover"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {property.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`Foto ${i + 1}`}
                      className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                        i === 0 ? 'border-primario' : 'border-transparent'
                      } hover:border-pm transition-colors`}
                      width={80}
                      height={64}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-borde p-6">
                <h2 className="text-xl font-bold text-oscuro mb-3">Descripción</h2>
                <p className="text-gris leading-relaxed">{property.description}</p>
              </div>

              <div className="bg-white rounded-xl border border-borde p-6">
                <h2 className="text-xl font-bold text-oscuro mb-3">Ubicación</h2>
                <p className="text-sm text-gris mb-3">
                  <i className="fa-solid fa-location-dot mr-1 text-pm"></i>
                  {property.address}, {property.location}
                </p>
                <div className="rounded-xl overflow-hidden border border-borde">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-58.56,-34.61,-58.54,-34.60&layer=mapnik"
                    className="w-full h-64"
                    loading="lazy"
                    title="Mapa"
                  ></iframe>
                </div>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.address + ', ' + property.location)}`}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-pm font-medium hover:underline mt-3 inline-block"
                >
                  Ver en Google Maps{' '}
                  <i className="fa-solid fa-external-link text-xs"></i>
                </Link>
              </div>

              {similar.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-oscuro mb-4">
                    Propiedades similares
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {similar.map((p) => (
                      <SimilarPropertyCard key={p.id} property={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar info */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-borde p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-3">
                  {property.reserved ? (
                    <span className="badge-reserved">Reservado</span>
                  ) : (
                    <span className="text-xs font-bold text-acento bg-acl px-3 py-1 rounded">
                      Disponible
                    </span>
                  )}
                  <span className="text-xs text-gris">Ref: {property.id}</span>
                </div>
                <p className="text-2xl font-extrabold text-primario mb-1">
                  {formatPrice(property.price, property.currency)}
                </p>
                <p className="text-sm font-semibold text-oscuro mb-1">
                  {property.type} — {property.operation}
                </p>
                <p className="text-sm text-gris mb-5">
                  <i className="fa-solid fa-location-dot mr-1"></i>
                  {property.location}, {property.address}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {property.rooms > 0 && (
                    <div className="bg-gcl rounded-lg p-3 text-center">
                      <i className="fa-solid fa-door-open text-pm mb-1"></i>
                      <p className="text-sm font-bold">{property.rooms}</p>
                      <p className="text-[10px] text-gris uppercase">Ambientes</p>
                    </div>
                  )}
                  {property.bedrooms > 0 && (
                    <div className="bg-gcl rounded-lg p-3 text-center">
                      <i className="fa-solid fa-bed text-pm mb-1"></i>
                      <p className="text-sm font-bold">{property.bedrooms}</p>
                      <p className="text-[10px] text-gris uppercase">Dormitorios</p>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="bg-gcl rounded-lg p-3 text-center">
                      <i className="fa-solid fa-bath text-pm mb-1"></i>
                      <p className="text-sm font-bold">{property.bathrooms}</p>
                      <p className="text-[10px] text-gris uppercase">Baños</p>
                    </div>
                  )}
                  {property.garage && (
                    <div className="bg-gcl rounded-lg p-3 text-center">
                      <i className="fa-solid fa-car text-pm mb-1"></i>
                      <p className="text-sm font-bold">Si</p>
                      <p className="text-[10px] text-gris uppercase">Cochera</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-sm mb-6">
                  {property.totalArea > 0 && (
                    <p className="flex justify-between">
                      <span className="text-gris">Sup. total</span>
                      <span className="font-medium">{property.totalArea} m²</span>
                    </p>
                  )}
                  {property.coveredArea > 0 && (
                    <p className="flex justify-between">
                      <span className="text-gris">Sup. cubierta</span>
                      <span className="font-medium">{property.coveredArea} m²</span>
                    </p>
                  )}
                  {property.floor && (
                    <p className="flex justify-between">
                      <span className="text-gris">Piso</span>
                      <span className="font-medium">{property.floor}</span>
                    </p>
                  )}
                  {property.orientation && (
                    <p className="flex justify-between">
                      <span className="text-gris">Orientación</span>
                      <span className="font-medium">{property.orientation}</span>
                    </p>
                  )}
                  {property.creditEligible && (
                    <p className="flex justify-between">
                      <span className="text-gris">Apto crédito</span>
                      <span className="font-medium text-acento">Si</span>
                    </p>
                  )}
                  {property.hasBond && (
                    <p className="flex justify-between">
                      <span className="text-gris">Seg. caución</span>
                      <span className="font-medium text-acento">Si</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Link
                    href={`https://wa.me/5491146551234?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener"
                    className="btn-acento w-full justify-center py-3 text-sm"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>Consultar por WhatsApp
                  </Link>
                  <Link
                    href="/contacto"
                    className="btn-primary w-full justify-center py-3 text-sm"
                  >
                    <i className="fa-solid fa-envelope"></i>Enviar consulta
                  </Link>
                  <Link
                    href={`https://wa.me/5491146551234?text=${encodeURIComponent('Hola, quiero solicitar visita para la propiedad ' + property.id)}`}
                    target="_blank"
                    rel="noopener"
                    className="btn-outline w-full justify-center py-3 text-sm"
                  >
                    <i className="fa-solid fa-calendar"></i>Solicitar visita
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function SimilarPropertyCard({ property }: { property: typeof PROPERTIES[0] }) {
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
          {property.type}
        </p>
        <p className="text-xs text-gris">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {property.location}
        </p>
      </div>
    </article>
  );
}