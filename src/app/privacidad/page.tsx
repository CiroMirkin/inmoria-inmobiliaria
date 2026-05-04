'use client';

export default function Privacidad() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-3">
              Política de Privacidad
            </h1>
            <p className="text-sm text-gris">
              Última actualización: mayo 2026 — Alineada con la Ley 25.326 de
              Protección de Datos Personales
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-borde p-6 md:p-8 space-y-6 text-sm text-gris leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                1. Responsable del tratamiento
              </h2>
              <p>
                El responsable del tratamiento de los datos personales es{' '}
                <strong className="text-oscuro">Inmoria</strong>, con domicilio en Av.
                Rivadavia 12500, Ciudadela, Provincia de Buenos Aires. Teléfono: 011
                4655-1234. Email: privacidad@inmoria.com.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                2. Datos que recopilamos
              </h2>
              <p>
                Recopilamos los siguientes datos personales proporcionados voluntariamente:
                nombre completo, número de teléfono, dirección de email, dirección de la
                propiedad de interés, preferencias de búsqueda (tipo de propiedad,
                localidad, rango de precio), y cualquier otra información que el usuario
                decida proporcionarnos a través de nuestros formularios de contacto,
                suscripción o turnos.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                3. Finalidad del tratamiento
              </h2>
              <p>
                Los datos personales son utilizados para: responder consultas y
                solicitudes de información; gestionar turnos administrativos; enviar
                comunicaciones comerciales sobre propiedades y servicios (solo con
                consentimiento previo); elaborar estadísticas anónimas para mejorar nuestros
                servicios; cumplir con obligaciones legales vigentes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">4. Consentimiento</h2>
              <p>
                El usuario proporciona datos a través de nuestros formularios implica
                consentimiento expreso para su tratamiento conforme a las finalidades
                indicadas. En el caso de la suscripción por email, se implementa un
                mecanismo de doble opt-in para confirmar la intención de suscribirse,
                conforme a la Ley 25.326.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                5. Derechos del titular
              </h2>
              <p>
                De acuerdo con la Ley 25.326, el titular de los datos tiene derecho
                a: acceder a sus datos personales; solicitar la rectificación o
                actualización de datos inexactos; solicitar la supresión de sus datos cuando
                resulten excesivos o irrelevantes; oponerse al tratamiento de sus datos por
                motivos legítimos; revocar el consentimiento otorgado en cualquier
                momento.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                6. Seguridad de los datos
              </h2>
              <p>
                Adoptamos las medidas técnicas y organizativas necesarias para proteger los
                datos personales contra accesos no autorizados, pérdida, alteración o destrucción.
                Los formularios utilizan validación en cliente y controles antispam para minimizar
                envíos no deseados.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                7. Transferencia a terceros
              </h2>
              <p>
                Los datos personales no son compartidos con terceros salvo en los siguientes
                casos: cuando sea necesario para la prestación del servicio (ej: comunicación
                con portales inmobiliarios para la publicación de propiedades); cuando exista
                una obligación legal; cuando medie consentimiento expreso del titular.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                8. Cookies y análisis
              </h2>
              <p>
                En caso de utilizar servicios de análisis web (Google Analytics,
                Microsoft Clarity), se implementa un banner de consentimiento de
                cookies conforme a la normativa vigente. El usuario puede rechazar
                las cookies de análisis en cualquier momento.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">
                9. Suscripción por email y marketing
              </h2>
              <p>
                Las listas de correo están segmentadas por interés (alquiler/venta). La suscripción requiere doble opt-in. Cada
                comunicación incluye un enlace para darse de baja de manera sencilla e
                inmediata.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-oscuro mb-2">10. Contacto</h2>
              <p>
                Para ejercer tus derechos o realizar consultas sobre esta política,
                contactanos a:{' '}
                <strong className="text-oscuro">privacidad@inmoria.com</strong> o por
                teléfono al{' '}
                <strong className="text-oscuro">011 4655-1234</strong>.
              </p>
            </div>
          </div>
        </div>
  );
}