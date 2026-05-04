"use client"

import { HeroSearch } from "./HeroSearch";
import { useRouter } from "next/navigation";
import { HeroCarousel } from "./HeroCarousel";
import { motion, useAnimation } from "motion/react";

export default function Hero() {
    const router = useRouter()
    const controls = useAnimation()

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
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        onMouseEnter={() => controls.start({ scale: 1.04 })}
        onMouseLeave={() => controls.start({ scale: 1 })}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
          animate={controls}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(27, 79, 138, 0.6), rgba(13, 148, 136, 0.4))' }}
        />
        <div className="relative z-10 max-w-9xl flex justify-center flex-wrap gap-8 mx-auto px-4 w-full py-20">
          <div className="max-w-2xl mb-10 flex flex-col justify-between gap-10">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-4">
                Tu próximo hogar en Zona Oeste
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Propiedades en Ciudadela, Haedo, Ramos Mejía, Morón y más.
                Más de 25 años acompañando familias y empresas.
              </p>
            </div>
            
            <HeroCarousel />
          </div>
          <HeroSearch onSearch={handleSearch} />
        </div>
      </section>
    )
}