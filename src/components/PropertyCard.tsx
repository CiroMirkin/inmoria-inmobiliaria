import Link from 'next/link';
import Image from 'next/image';
import { PROPERTIES, formatPrice, getSlug } from '@/lib/data';
import { motion } from 'motion/react'

export function PropertyCard({ property }: { property: typeof PROPERTIES[0] }) {
  return (
    <motion.article
      className="bg-white rounded-xl border border-borde overflow-hidden card-hover"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-4/3 img-zoom">
        <Image
          src={property.images[0]}
          alt={`${property.type} en ${property.location}`}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
        {property.reserved && (
          <span className="badge-reserved absolute top-3 left-3">Reservado</span>
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
          {property.totalArea > 0 && (
            <p className="text-xs text-gris mt-1">
              <i className="fa-solid fa-ruler-combined mr-1 text-pm"></i>
              {property.totalArea} m²
            </p>
          )}
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
        <Link
          href={`/propiedades/${getSlug(property)}`}
          className="block mt-4 text-center text-sm font-semibold text-pm hover:text-primario transition-colors border border-primario/20 rounded-lg py-2 hover:bg-pcl"
        >
          Ver detalle
        </Link>
      </div>
    </motion.article>
  );
}