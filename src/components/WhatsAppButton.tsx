'use client';

import { motion } from 'motion/react'

const WHATSAPP_MSG = 'Hola, quiero información sobre propiedades en Zona Oeste';

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/5491146551234?text=${encodeURIComponent(WHATSAPP_MSG)}`}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 bg-acento text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fa-brands fa-whatsapp text-2xl"></i>
    </motion.a>
  )
}