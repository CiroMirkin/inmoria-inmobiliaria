import Link from 'next/link';
import Image from 'next/image';
import { PROPERTIES, formatPrice, getSlug } from '@/lib/data';

export function SimilarPropertyCard({ property }: { property: typeof PROPERTIES[0] }) {
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
        <Link
          href={`/propiedades/${getSlug(property)}`}
          className="block mt-3 text-center text-sm font-semibold text-pm hover:text-primario transition-colors border border-primario/20 rounded-lg py-2 hover:bg-pcl"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}