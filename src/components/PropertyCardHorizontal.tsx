"use client"

import Link from 'next/link'
import Image from 'next/image'
import { PROPERTIES, formatPrice, getSlug } from '@/lib/data'

export default function PropertyCardHorizontal({ property }: { property: typeof PROPERTIES[0] }) {
  const slug = getSlug(property)

  return (
    <Link href={`/propiedades/${slug}`} className="flex gap-4 hover:bg-white/5 transition-colors h-full rounded-xl overflow-hidden">
      <div className="relative w-40 md:w-60 h-full shrink-0">
        <Image
          src={property.images[0]}
          alt={`${property.type} en ${property.location}`}
          className="object-cover"
          fill
        />
      </div>
      <div className="py-4 pr-4 flex flex-col justify-between min-w-0 flex-1">
        <div>
          <p className="text-xs font-semibold text-white/60 mb-0.5">{property.operation}</p>
          <p className="text-base font-bold text-white leading-tight truncate">
            {property.type} — {property.location}
          </p>
          <p className="text-xs text-white/60 truncate mt-1">
            <i className="fa-solid fa-location-dot mr-1"></i>
            {property.address}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-white">
            {formatPrice(property.price, property.currency)}
          </span>
          <div className="hidden md:flex gap-3 text-xs text-white/70">
            {property.rooms > 0 && <span><i className="fa-solid fa-door-open mr-1"></i>{property.rooms} amb</span>}
            {property.totalArea > 0 && <span><i className="fa-solid fa-ruler-combined mr-1"></i>{property.totalArea}m²</span>}
            {property.bedrooms > 0 && <span><i className="fa-solid fa-bed mr-1"></i>{property.bedrooms}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}
