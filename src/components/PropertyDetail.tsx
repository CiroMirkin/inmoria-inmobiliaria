'use client'

import Link from 'next/link'
import { Property, formatPrice } from '@/lib/data'

interface PropertySidebarProps {
  property: Property
}

export function PropertyDetail({ property }: PropertySidebarProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa la propiedad ${property.id} (${property.type} ${property.operation.toLowerCase()} en ${property.location})`
  )

  const whatsappVisita = encodeURIComponent(
    `Hola, quiero solicitar visita para la propiedad ${property.id}`
  )

  return (
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
          href={`https://wa.me/5491146551234?text=${whatsappVisita}`}
          target="_blank"
          rel="noopener"
          className="btn-outline w-full justify-center py-3 text-sm"
        >
          <i className="fa-solid fa-calendar"></i>Solicitar visita
        </Link>
      </div>
    </div>
  )
}