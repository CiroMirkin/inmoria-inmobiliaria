'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { getSlug, PROPERTIES } from '@/lib/data';
import { SimilarPropertyCard } from '@/components/SimilarPropertyCard';
import { PropertyDetail } from '@/components/PropertyDetail';

export default function FichaPropiedad() {
  const params = useParams();
  const slug = params.slug as string;
  
  const property = PROPERTIES.find((p) => getSlug(p) === slug)

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
                <div className="aspect-16/10 relative cursor-pointer">
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
                <div className="mt-6">
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
              </div>
            </div>

            <PropertyDetail property={property} />
          </div>

          {similar.length > 0 && (
            <div className="w-full mt-8">
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
      </main>
    </>
  );
}