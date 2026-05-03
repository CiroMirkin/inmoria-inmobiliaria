'use client';

import { Suspense } from 'react';
import PropiedadesContent from './PropiedadesContent';

export default function Propiedades() {
  return (
    <Suspense fallback={<div className="text-center py-32">Cargando...</div>}>
      <PropiedadesContent />
    </Suspense>
  );
}