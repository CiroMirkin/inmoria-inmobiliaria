'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { getSlug, PROPERTIES } from '@/lib/data';
import { SimilarPropertyCard } from '@/components/SimilarPropertyCard';
import { PropertyDetail } from '@/components/PropertyDetail';
import { PropertyGallery } from '@/components/PropertyGallery';

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
              <PropertyGallery images={property.images} alt={property.type} />

              <div className="bg-white rounded-xl border border-borde p-6">
                <h2 className="text-xl font-bold text-oscuro mb-3">Descripción</h2>
                <p className="text-gris leading-relaxed">{property.description}</p>

                <div className="mt-6">
                  <h2 className="text-xl font-bold text-oscuro mb-3">¿Qué ofrece este lugar?</h2>
                  <div className="max-w-xl flex flex-col gap-2 mb-6">
                    {property.rooms > 0 && (
                      <div className="flex items-center text-lg">
                        <i className="fa-solid fa-door-open text-pm text-xl"></i>
                        <p className="mx-2">Ambientes: </p>
                        <p className="font-bold">{property.rooms}</p>
                      </div>
                    )}
                    {property.bedrooms > 0 && (
                      <div className="flex items-center text-lg">
                        <i className="fa-solid fa-bed text-pm text-xl"></i>
                        <p className="mx-2">Dormitorios: </p>
                        <p className="font-bold">{property.bedrooms}</p>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="flex items-center text-lg">
                        <i className="fa-solid fa-bath text-pm text-xl"></i>
                        <p className="mx-2">Baños: </p>
                        <p className="font-bold">{property.bathrooms}</p>
                      </div>
                    )}
                    {property.garage && (
                      <div className="flex items-center text-lg">
                        <i className="fa-solid fa-car text-pm text-xl"></i>
                        <p className="mx-2">Cochera: </p>
                        <p className="font-bold">Sí</p>
                      </div>
                    )}
                  </div>
                </div>

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