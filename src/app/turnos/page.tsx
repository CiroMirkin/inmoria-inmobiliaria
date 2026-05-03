'use client';

import { useState } from 'react';
import { SUCURSALES } from '@/lib/data';
import { Header, Footer, WhatsAppButton } from '@/components/Header';

export default function Turnos() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sucursal: 1,
    fecha: '',
    hora: '9:00',
    nombre: '',
    telefono: '',
    motivo: 'Firma de contrato',
  });

  const handleSubmit = () => {
    if (!formData.nombre || !formData.telefono || !formData.fecha) {
      alert('Completá todos los campos obligatorios.');
      return;
    }
    const suc = SUCURSALES.find((s) => s.id === formData.sucursal);
    setStep(2);
  };

  const timeSlots = [
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ];

  return (
    <>
      <Header />
      <main id="contenido" role="main">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-alcl border border-alerta rounded-xl p-4 mb-8 flex items-start gap-3">
            <i className="fa-solid fa-info-circle text-alerta mt-0.5"></i>
            <p className="text-sm text-oscuro">
              Este formulario es exclusivo para{' '}
              <strong>trámites administrativos</strong> (firma de contratos, retiro de
              documentación, consulta de expedientes). Para visitar propiedades, consultá por
              WhatsApp o contactanos desde la ficha de la propiedad.
            </p>
          </div>

          <div className="text-center mb-10">
            <p className="form-label text-pm mb-1">Trámites administrativos</p>
            <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
              Reserva de turnos
            </h1>
            <p className="text-gris">
              Seleccioná sucursal, fecha y horario para tu trámite.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-borde p-6 md:p-8">
            {step === 1 && (
              <div id="turno-step1">
                <div className="mb-6">
                  <label className="form-label">Sucursal</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SUCURSALES.map((s, i) => (
                      <label
                        key={s.id}
                        className={`border-2 border-borde rounded-xl p-4 cursor-pointer hover:border-pm transition-colors ${
                          formData.sucursal === s.id
                            ? 'border-pm bg-pcl'
                            : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="sucusal"
                          value={s.id}
                          className="hidden"
                          checked={formData.sucursal === s.id}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              sucursal: parseInt(e.target.value),
                            })
                          }
                        />
                        <div className="text-sm font-bold text-oscuro">
                          {s.name}
                        </div>
                        <div className="text-xs text-gris mt-1">
                          {s.address}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="form-label">Fecha</label>
                  <input
                    type="date"
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.fecha}
                    onChange={(e) =>
                      setFormData({ ...formData, fecha: e.target.value })
                    }
                  />
                </div>

                <div className="mb-6">
                  <label className="form-label">Horario</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((h, i) => (
                      <label
                        key={h}
                        className={`border border-borde rounded-lg p-2.5 text-center cursor-pointer hover:border-pm transition-colors ${
                          formData.hora === h ? 'border-pm bg-pcl' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="hora"
                          value={h}
                          className="hidden"
                          checked={formData.hora === h}
                          onChange={(e) =>
                            setFormData({ ...formData, hora: e.target.value })
                          }
                        />
                        <span className="text-sm font-medium">{h}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="form-label">Datos personales</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Nombre completo"
                      required
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Teléfono"
                      required
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="form-label">Motivo del trámite</label>
                    <select
                      className="form-input"
                      value={formData.motivo}
                      onChange={(e) =>
                        setFormData({ ...formData, motivo: e.target.value })
                      }
                    >
                      <option>Firma de contrato</option>
                      <option>Retiro de documentación</option>
                      <option>Consulta de expediente</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full justify-center py-3 mt-6"
                >
                  <i className="fa-solid fa-calendar-check"></i>Confirmar turno
                </button>
              </div>
            )}

            {step === 2 && (
              <div id="turno-step2" className="text-center py-8">
                <div className="w-16 h-16 bg-acl rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-acento text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-oscuro mb-2">
                  Turno reservado
                </h2>
                <p className="text-gris mb-4">
                  Recibirás un mensaje de confirmación por WhatsApp.
                </p>
                <div className="bg-gcl rounded-xl p-5 text-left space-y-2 text-sm mb-6">
                  <p>
                    <strong>Sucursal:</strong>{' '}
                    {SUCURSALES.find((s) => s.id === formData.sucursal)?.name}
                  </p>
                  <p>
                    <strong>Fecha:</strong>{' '}
                    {new Date(
                      formData.fecha + 'T12:00:00'
                    ).toLocaleDateString('es-AR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p>
                    <strong>Horario:</strong> {formData.hora}
                  </p>
                  <p>
                    <strong>Nombre:</strong> {formData.nombre}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {formData.telefono}
                  </p>
                  <p>
                    <strong>Motivo:</strong> {formData.motivo}
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="btn-outline text-sm"
                >
                  Reservar otro turno
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}