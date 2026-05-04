"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Consulta enviada correctamente. Nos comunicaremos pronto.')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-borde p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Nombre</label>
          <input type="text" name="nombre" required className="form-input" placeholder="Tu nombre" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" name="email" required className="form-input" placeholder="tu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="form-label">Teléfono</label>
        <input type="tel" name="telefono" className="form-input" placeholder="11 1234-5678" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} />
      </div>
      <div>
        <label className="form-label">Asunto</label>
        <input type="text" name="asunto" className="form-input" placeholder="¿En qué podemos ayudarte?" value={formData.asunto} onChange={(e) => setFormData({ ...formData, asunto: e.target.value })} />
      </div>
      <div>
        <label className="form-label">Mensaje</label>
        <textarea name="mensaje" rows={3} className="form-input" placeholder="Contanos qué buscás..." value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} />
      </div>
      <button type="submit" className="btn-primary w-full justify-center py-3">
        Enviar consulta <i className="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  )
}
