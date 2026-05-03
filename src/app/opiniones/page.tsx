'use client';

import { useState } from 'react';
import { OPINIONS } from '@/lib/data';
import { Header, Footer, WhatsAppButton } from '@/components/Header';

export default function Opiniones() {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    texto: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Seleccioná una valoración');
      return;
    }
    alert('Opinión enviada. Será publicada tras moderación.');
    setFormData({ nombre: '', texto: '' });
    setRating(0);
  };

  return (
    <>
      <Header />
      <main id="contenido" role="main">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <p className="form-label text-pm mb-1">Lo que dicen de nosotros</p>
            <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
              Opiniones de clientes
            </h1>
            <p className="text-gris">
              Las opiniones reflejan la experiencia real de quienes confiaron en nosotros.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {OPINIONS.map((o) => (
              <div
                key={o.id}
                className="bg-white rounded-xl border border-borde p-5 card-hover"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i
                      key={i}
                      className={`fa-solid fa-star ${
                        i <= o.rating ? 'star filled' : 'star'
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="text-sm text-gris leading-relaxed mb-3">
                  &quot;{o.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pcl rounded-full flex items-center justify-center">
                    <span className="text-primario font-bold text-sm">
                      {o.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-oscuro">{o.name}</p>
                    <p className="text-xs text-gris">
                      {new Date(o.date).toLocaleDateString('es-AR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gcl rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-oscuro mb-1">
              Dejá tu opinión
            </h2>
            <p className="text-sm text-gris mb-5">
              Tu experiencia es importante. Las opiniones quedan pendientes de moderación antes de publicarse.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="form-input"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Valoración</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      className={`text-2xl star ${i <= rating ? 'filled' : ''}`}
                      onClick={() => setRating(i)}
                    >
                      <i className="fa-solid fa-star"></i>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="form-label">Tu reseña</label>
                <textarea
                  name="texto"
                  required
                  rows={4}
                  className="form-input"
                  placeholder="Contanos tu experiencia con Inmoria..."
                  value={formData.texto}
                  onChange={(e) => setFormData({ ...formData, texto: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3">
                Enviar opinión <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}