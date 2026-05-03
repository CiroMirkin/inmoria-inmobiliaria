'use client';

import { useState } from 'react';
import { PROPERTY_TYPES, LOCATIONS } from '@/lib/data';

export default function Tasaciones() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    operacion: 'Venta',
    tipo: '',
    localidad: '',
    direccion: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud de tasación enviada. Te contactaremos para coordinar la visita.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="form-label text-pm mb-1">Sin costo, sin compromiso</p>
          <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
            Solicitá tu tasación
          </h1>
          <p className="text-gris">
            Un profesional matriculado visitará tu propiedad y te entregará un informe de valor detallado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { n: '1', t: 'Completás el formulario', d: 'Cargás los datos de tu propiedad.' },
            { n: '2', t: 'Coordinamos la visita', d: 'Fijamos día y horario conveniente.' },
            { n: '3', t: 'Tasación presencial', d: 'Evaluación profesional in situ.' },
            { n: '4', t: 'Recibís el informe', d: 'Informe de valor detallado.' },
          ].map((s) => (
            <div key={s.n} className="bg-gcl rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-pcl rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primario font-extrabold text-sm">{s.n}</span>
              </div>
              <h3 className="text-sm font-bold text-oscuro mb-1">{s.t}</h3>
              <p className="text-xs text-gris">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-borde p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Nombre completo</label>
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
                  required
                  className="form-input"
                  placeholder="11 1234-5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Operación</label>
                <select
                  name="operacion"
                  className="form-input"
                  value={formData.operacion}
                  onChange={(e) => setFormData({ ...formData, operacion: e.target.value })}
                >
                  <option>Venta</option>
                  <option>Alquiler</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Tipo de propiedad</label>
                <select
                  name="tipo"
                  className="form-input"
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                >
                  <option value="">Seleccionar</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Localidad</label>
                <select
                  name="localidad"
                  className="form-input"
                  value={formData.localidad}
                  onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}
                >
                  <option value="">Seleccionar</option>
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="form-label">Dirección aproximada</label>
              <input
                type="text"
                name="direccion"
                required
                className="form-input"
                placeholder="Ej: Av. Rivadavia 12000, Ciudadela"
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
              />
            </div>

            <div>
              <label className="form-label">Mensaje opcional</label>
              <textarea
                name="mensaje"
                rows={3}
                className="form-input"
                placeholder="Datos adicionales..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" className="btn-primary flex-1 justify-center py-3">
                <i className="fa-solid fa-paper-plane"></i>Enviar solicitud
              </button>
              <a
                href={`https://wa.me/5491146551234?text=${encodeURIComponent('Hola, quiero solicitar una tasación')}`}
                target="_blank"
                rel="noopener"
                className="btn-acento flex-1 justify-center py-3"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>WhatsApp
              </a>
            </div>
          </form>
          <p className="text-xs text-gris mt-4 text-center">
            A cargo del Cr. Martín E. Álvarez — CPI N.º 12.345 — CMCyCP PBA
          </p>
        </div>
      </div>
    </div>
  );
}