'use client';

import { useState } from 'react';
import { SUCURSALES } from '@/lib/data';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sucursal: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <p className="form-label text-pm mb-1">Estamos para ayudarte</p>
        <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
          Contacto
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {SUCURSALES.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-xl border border-borde p-5 card-hover"
          >
            <div className="w-12 h-12 bg-pcl rounded-lg flex items-center justify-center mb-4">
              <i className="fa-solid fa-building text-primario text-xl"></i>
            </div>
            <h3 className="font-bold text-oscuro mb-2">{s.name}</h3>
            <p className="text-sm text-gris mb-1">
              <i className="fa-solid fa-location-dot mr-1.5 text-pm"></i>
              {s.address}
            </p>
            <p className="text-sm text-gris mb-1">
              <i className="fa-solid fa-phone mr-1.5 text-pm"></i>
              {s.phone}
            </p>
            <p className="text-sm text-gris mb-3">
              <i className="fa-solid fa-envelope mr-1.5 text-pm"></i>
              {s.email}
            </p>
            <div className="text-xs text-gris space-y-0.5">
              {Object.entries(s.hours).map(([k, v]) => (
                <p key={k}>
                  <strong>{k}:</strong> {v as string}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden border border-borde mb-10">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-58.57,-34.66,-58.53,-34.59&layer=mapnik"
          className="w-full h-72"
          loading="lazy"
          title="Mapa de sucursales"
        ></iframe>
      </div>

      <div className="bg-white rounded-2xl border border-borde p-6 md:p-8">
        <h2 className="text-xl font-bold text-oscuro mb-5">
          Envianos un mensaje
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="form-input"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="form-input"
                placeholder="11 1234-5678"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              />
            </div>
            <div>
              <label className="form-label">Sucursal</label>
              <select
                name="sucursal"
                className="form-input"
                value={formData.sucursal}
                onChange={(e) => setFormData({ ...formData, sucursal: e.target.value })}
              >
                <option value="">Sin preferencia</option>
                {SUCURSALES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Asunto</label>
            <input
              type="text"
              name="asunto"
              required
              className="form-input"
              placeholder="¿En qué podemos ayudarte?"
              value={formData.asunto}
              onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
            />
          </div>

          <div>
            <label className="form-label">Mensaje</label>
            <textarea
              name="mensaje"
              rows={4}
              className="form-input"
              placeholder="Contanos qué necesitás..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center py-3">
            Enviar mensaje <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}