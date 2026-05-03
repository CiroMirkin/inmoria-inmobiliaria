'use client';

const WHATSAPP_MSG =
  'Hola, quiero información sobre propiedades en Zona Oeste';

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/5491146551234?text=${encodeURIComponent(WHATSAPP_MSG)}`}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-40 bg-acento text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-acento/90 transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-2xl"></i>
    </a>
  );
}