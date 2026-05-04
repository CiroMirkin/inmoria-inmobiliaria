"use client"

import Link from "next/link";
import { HeroSearch } from "./HeroSearch";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter()

    const handleSearch = (filters: { operation: string; type: string; zone: string; location: string; rooms: string; currency: string; priceMax: string }) => {
        const params = new URLSearchParams();
        if (filters.operation) params.set('op', filters.operation);
        if (filters.type) params.set('tipo', filters.type);
        if (filters.zone) params.set('zona', filters.zone);
        if (filters.location) params.set('localidad', filters.location);
        if (filters.rooms) params.set('amb', filters.rooms);
        if (filters.currency) params.set('moneda', filters.currency);
        if (filters.priceMax) params.set('preciohasta', filters.priceMax);
        router.push(`/propiedades?${params.toString()}`);
      }

    return (
        <section className="hero-bg min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full py-20">
            <div className="max-w-4xl mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-4">
                Tu próximo hogar en Zona Oeste
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Propiedades en Ciudadela, Haedo, Ramos Mejía, Morón y más.
                Más de 25 años acompañando familias y empresas.
              </p>
            </div>
            {/* Search box */}
              <HeroSearch onSearch={handleSearch} />
          </div>
        </section>
    )
}