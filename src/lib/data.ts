export const COLORS = {
  primario: '#1B4F8A',
  pm: '#2563A8',
  pcl: '#D6E4F4',
 acento: '#0D9488',
  acl: '#CCEFEC',
  oscuro: '#1A2B3C',
  gris: '#64748B',
  gcl: '#F1F5F9',
  borde: '#CBD5E1',
  alerta: '#F59E0B',
  alcl: '#FEF3C7',
} as const;

export const LOCATIONS = [
  'Ciudadela',
  'Haedo',
  'Ramos Mejía',
  'Morón',
  'Villa Sarmiento',
  'Hurlingham',
  'Moreno',
];

export const PROPERTY_TYPES = [
  'Departamento',
  'Casa',
  'PH',
  'Local',
  'Oficina',
  'Terreno',
  'Galpón',
];

export const OPERATIONS = ['Venta', 'Alquiler', 'Temporario'];

export const SUCURSALES = [
  {
    id: 1,
    name: 'Sucursal Ciudadela',
    address: 'Av. Rivadavia 12500, Ciudadela',
    phone: '011 4655-1234',
    email: 'ciudadela@inmoria.com',
    hours: { 'Lun a Vie': '9:00 – 18:00', 'Sáb': '9:00 – 13:00', 'Dom': 'Cerrado' },
  },
  {
    id: 2,
    name: 'Sucursal Morón',
    address: 'Av. Rivadavia 16800, Morón',
    phone: '011 4627-5678',
    email: 'moron@inmoria.com',
    hours: { 'Lun a Vie': '9:00 – 18:00', 'Sáb': '9:00 – 13:00', 'Dom': 'Cerrado' },
  },
  {
    id: 3,
    name: 'Sucursal Ramos Mejía',
    address: 'Av. Rivadavia 14200, Ramos Mejía',
    phone: '011 4653-9012',
    email: 'ramosmejia@inmoria.com',
    hours: { 'Lun a Vie': '9:00 – 18:00', 'Sáb': '9:00 – 13:00', 'Dom': 'Cerrado' },
  },
];

export interface Property {
  id: string;
  type: string;
  operation: string;
  location: string;
  address: string;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  garage: boolean;
  totalArea: number;
  coveredArea: number;
  price: number;
  currency: string;
  reserved: boolean;
  creditEligible: boolean;
  hasBond: boolean;
  floor?: string;
  orientation?: string;
  description: string;
  date: string;
  images: string[];
}

export const PROPERTIES: Property[] = [
  {
    id: '001234',
    type: 'Departamento',
    operation: 'Alquiler',
    location: 'Ciudadela',
    address: 'Av. Rivadavia 12345',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    garage: true,
    totalArea: 55,
    coveredArea: 50,
    price: 150000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: true,
    floor: '3°',
    orientation: 'Norte',
    description:
      'Departamento luminoso sobre Avenida Rivadavia. Living comedor amplio, cocina integrada, baño completo y dormitorio con placard. Piso alto con excelente vista. A pasos de comercios y transporte.',
    date: '2026-05-01',
    images: [],
  },
  {
    id: '001235',
    type: 'Casa',
    operation: 'Venta',
    location: 'Ramos Mejía',
    address: 'Gral. Paz 4520',
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    garage: true,
    totalArea: 180,
    coveredArea: 140,
    price: 220000,
    currency: 'USD',
    reserved: false,
    creditEligible: true,
    hasBond: false,
    description:
      'Casa clásica de amplios ambientes. Living, cocina comedor, 3 dormitorios, 2 baños, lavadero, patio con parrilla y cochera para 2 vehículos. Barrio tradicional.',
    date: '2026-04-28',
    images: [],
  },
  {
    id: '001236',
    type: 'PH',
    operation: 'Alquiler',
    location: 'Haedo',
    address: 'Bs. As. 890',
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    totalArea: 38,
    coveredArea: 35,
    price: 95000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: true,
    floor: 'PB',
    orientation: 'Oeste',
    description:
      'PH moderno reciclado. Ambiente único muy luminoso con cocina integrada, baño completo y terraza propia con lavadero. Ideal para jóvenes profesionales.',
    date: '2026-05-03',
    images: [],
  },
  {
    id: '001237',
    type: 'Departamento',
    operation: 'Venta',
    location: 'Morón',
    address: 'Belgrano 1560',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    garage: false,
    totalArea: 72,
    coveredArea: 68,
    price: 185000,
    currency: 'USD',
    reserved: false,
    creditEligible: true,
    hasBond: false,
    floor: '5°',
    orientation: 'Norte',
    description:
      'Departamento de 3 ambientes en edificio clásico con ascensor. Living, cocina separada, 2 dormitorios con placard y baño. Balcón al frente con vista a la plaza.',
    date: '2026-04-25',
    images: [],
  },
  {
    id: '001238',
    type: 'Local',
    operation: 'Alquiler',
    location: 'Villa Sarmiento',
    address: 'Ruta 8 3450',
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    garage: false,
    totalArea: 85,
    coveredArea: 85,
    price: 180000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: false,
    floor: 'PB',
    description:
      'Local comercial sobre ruta de alto tránsito. Amplio frente vidriado, baño y depósito. Ideal para showroom o servicios.',
    date: '2026-05-05',
    images: [],
  },
  {
    id: '001239',
    type: 'Departamento',
    operation: 'Alquiler',
    location: 'Hurlingham',
    address: 'Lavalle 1230',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    garage: true,
    totalArea: 50,
    coveredArea: 47,
    price: 135000,
    currency: 'ARS',
    reserved: true,
    creditEligible: false,
    hasBond: true,
    floor: '2°',
    orientation: 'Sur',
    description:
      'Departamento de 2 ambientes con cochera cerca del centro comercial y estación. Living comedor, cocina integrada, dormitorio y baño.',
    date: '2026-04-30',
    images: [],
  },
  {
    id: '001240',
    type: 'Casa',
    operation: 'Venta',
    location: 'Moreno',
    address: 'Perú 2300',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    garage: true,
    totalArea: 120,
    coveredArea: 90,
    price: 195000,
    currency: 'USD',
    reserved: false,
    creditEligible: true,
    hasBond: false,
    orientation: 'Norte',
    description:
      'Casa moderna con excelentes terminaciones. Living con doble altura, cocina de diseño, 2 dormitorios, jardín delantero y trasero con parrilla. Cochera.',
    date: '2026-04-22',
    images: [],
  },
  {
    id: '001241',
    type: 'Oficina',
    operation: 'Alquiler',
    location: 'Morón',
    address: '9 de Julio 560',
    rooms: 2,
    bedrooms: 0,
    bathrooms: 1,
    garage: false,
    totalArea: 110,
    coveredArea: 110,
    price: 250000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: false,
    floor: '7°',
    orientation: 'Este',
    description:
      'Oficina categoría A en edificio corporativo. Open space divisible, 2 oficinas privadas, aire central, seguridad 24hs.',
    date: '2026-05-02',
    images: [],
  },
  {
    id: '001242',
    type: 'Departamento',
    operation: 'Temporario',
    location: 'Ciudadela',
    address: 'Tres de Febrero 870',
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    totalArea: 40,
    coveredArea: 37,
    price: 800,
    currency: 'USD',
    reserved: false,
    creditEligible: false,
    hasBond: false,
    floor: '4°',
    orientation: 'Norte',
    description:
      'Departamento amueblado para temporario. Totalmente equipado: cocina, ropa de cama, WiFi, aire acondicionado. Mínimo 1 mes.',
    date: '2026-05-06',
    images: [],
  },
  {
    id: '001243',
    type: 'Terreno',
    operation: 'Venta',
    location: 'Moreno',
    address: 'Camino de la Tradición y Ruta 23',
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    garage: false,
    totalArea: 450,
    coveredArea: 0,
    price: 45000,
    currency: 'USD',
    reserved: false,
   creditEligible: false,
    hasBond: false,
    description:
      'Terreno de 450 m2 en zona de crecimiento. Lote regular con todos los servicios. Zona residencial tranquila.',
    date: '2026-04-18',
    images: [],
  },
  {
    id: '001244',
    type: 'PH',
    operation: 'Venta',
    location: 'Haedo',
    address: 'Brown 1450',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    totalArea: 62,
    coveredArea: 58,
    price: 165000,
    currency: 'USD',
    reserved: false,
    creditEligible: true,
    hasBond: false,
    floor: '1°',
    orientation: 'Oeste',
    description:
      'PH de 2 ambientes con terraza jardín. Living comedor amplio, cocina integrada, dormitorio con placard. Cerca de estación.',
    date: '2026-04-20',
    images: [],
  },
  {
    id: '001245',
    type: 'Departamento',
    operation: 'Alquiler',
    location: 'Ramos Mejía',
    address: 'Mitre 2100',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    garage: true,
    totalArea: 80,
    coveredArea: 75,
    price: 180000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: true,
    floor: '6°',
    orientation: 'Norte',
    description:
      'Departamento de 3 ambientes en edificio nuevo. Living con balcón, cocina de diseño, 2 dormitorios (uno en suite), cochera. Amenities completos.',
    date: '2026-05-04',
    images: [],
  },
  {
    id: '001246',
    type: 'Casa',
    operation: 'Alquiler',
    location: 'Moreno',
    address: 'Rivadavia 1500',
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    garage: true,
    totalArea: 200,
    coveredArea: 160,
    price: 280000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: true,
    orientation: 'Norte',
    description:
      'Casa amplia de 4 ambientes. Living comedor, cocina comedor, 3 dormitorios, 2 baños, patio grande con parrilla y quincho. Cochera para 2 autos.',
    date: '2026-04-26',
    images: [],
  },
  {
    id: '001247',
    type: 'Departamento',
    operation: 'Venta',
    location: 'Ciudadela',
    address: 'Ildefonso Sardá 670',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    totalArea: 52,
    coveredArea: 49,
    price: 140000,
    currency: 'USD',
    reserved: false,
    creditEligible: true,
    hasBond: false,
    floor: '2°',
    orientation: 'Este',
    description:
      'Departamento de 2 ambientes en excelente edificio. Pisos de madera, living, cocina separada, dormitorio y balcón. Ascensor.',
    date: '2026-04-15',
    images: [],
  },
  {
    id: '001248',
    type: 'Galpón',
    operation: 'Alquiler',
    location: 'Morón',
    address: 'Ruta 7 km 12',
    rooms: 0,
    bedrooms: 0,
    bathrooms: 1,
    garage: false,
    totalArea: 500,
    coveredArea: 500,
    price: 350000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: false,
    floor: 'PB',
    description:
      'Galpón industrial 500 m2. Pisos de hormigón, altura libre 7m, puerto de carga, oficina, trifásico. Acceso directo desde ruta.',
    date: '2026-05-07',
    images: [],
  },
  {
    id: '001249',
    type: 'Departamento',
    operation: 'Alquiler',
    location: 'Hurlingham',
    address: 'Roca 890',
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    totalArea: 35,
    coveredArea: 33,
    price: 85000,
    currency: 'ARS',
    reserved: false,
    creditEligible: false,
    hasBond: true,
    floor: '1°',
    orientation: 'Norte',
    description:
      'Monoambiente luminoso. Cocina integrada, baño completo. Cerca de estación y centro comercial.',
    date: '2026-05-08',
    images: [],
  },
  {
    id: '001250',
    type: 'Casa',
    operation: 'Venta',
    location: 'Villa Sarmiento',
    address: 'San Martín 3200',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    garage: true,
    totalArea: 140,
    coveredArea: 105,
    price: 210000,
    currency: 'USD',
    reserved: false,
    creditEligible: true,
    hasBond: false,
    orientation: 'Sur',
    description:
      'Casa de 3 ambientes con posibilidades de ampliación. Living, cocina, 2 dormitorios, baño, patio amplio con parrilla y cochera.',
    date: '2026-04-12',
    images: [],
  },
  {
    id: '001251',
    type: 'Departamento',
    operation: 'Temporario',
    location: 'Haedo',
    address: 'Rivadavia 9800',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    totalArea: 55,
    coveredArea: 52,
    price: 1200,
    currency: 'USD',
    reserved: false,
    creditEligible: false,
    hasBond: false,
    floor: '3°',
    orientation: 'Norte',
    description:
      'Departamento de 2 ambientes amueblado para temporario. Equipado completo, WiFi, aire. Sobre Rivadavia. Mínimo 15 días.',
    date: '2026-05-09',
    images: [],
  },
];

const PROPERTY_IMAGES: Record<string, string[]> = {
  '001234': [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
  ],
  '001235': [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop&q=80',
  ],
  '001236': [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
  ],
  '001237': [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
  ],
  '001238': [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
  ],
  '001239': [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
  ],
  '001240': [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
  ],
  '001241': [
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop&q=80',
  ],
  '001242': [
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
  ],
  '001243': [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80&crop=bottom',
    'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop&q=80&crop=top',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80&crop=left',
  ],
  '001244': [
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
  ],
  '001245': [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
  ],
  '001246': [
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
  ],
  '001247': [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
  ],
  '001248': [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80&crop=left',
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop&q=80&crop=top',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80&crop=right',
  ],
  '001249': [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
  ],
  '001250': [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
  ],
  '001251': [
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
  ],
};

const DEVELOPMENT_IMAGES: Record<string, string[]> = {
  'emp001': [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80',
  ],
  'emp002': [
    'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
  ],
  'emp003': [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80',
  ],
  'emp004': [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
  ],
};

PROPERTIES.forEach((p) => {
  p.images = PROPERTY_IMAGES[p.id] || [];
});

export interface Development {
  id: string;
  name: string;
  address: string;
  location: string;
  type: string;
  status: string;
  progress: number;
  priceFrom: number;
  priceTo: number;
  typologies: string[];
  description: string;
  deliveryDate: string;
  images: string[];
}

export const DEVELOPMENTS: Development[] = [
  {
    id: 'emp001',
    name: 'Torre Morón Central',
    address: 'Av. Rivadavia 17200, Morón',
    location: 'Morón',
    type: 'Departamentos',
    status: 'En construcción',
    progress: 45,
    priceFrom: 120000,
    priceTo: 180000,
    typologies: [
      '1 amb (38m2) desde USD 120.000',
      '2 amb (55m2) desde USD 145.000',
      '3 amb (72m2) desde USD 180.000',
    ],
    description:
      'Torre de 15 pisos con 60 unidades en el corazón de Morón. Amenities: SUM, pileta, gimnasio, laundry, terraza con parrilla. Entrega: diciembre 2028.',
    deliveryDate: 'Dic 2028',
    images: [],
  },
  {
    id: 'emp002',
    name: 'Barrio Cerrado Los Cedros',
    address: 'Camino de la Tradición 4500, Moreno',
    location: 'Moreno',
    type: 'Casas',
    status: 'En pozo',
    progress: 10,
    priceFrom: 180000,
    priceTo: 250000,
    typologies: [
      'Casa A (120m2) desde USD 180.000',
      'Casa B (160m2) desde USD 210.000',
      'Casa C (200m2) desde USD 250.000',
    ],
    description:
      'Barrio cerrado de 40 lotes con casas de 3 y 4 ambientes. Seguridad 24hs, parque central, pileta, parrilla. Lotes 300-500 m2. Entrega: marzo 2030.',
    deliveryDate: 'Mar 2030',
    images: [],
  },
  {
    id: 'emp003',
    name: 'Complejo Haedo Park',
    address: 'Brown 1800, Haedo',
    location: 'Haedo',
    type: 'PHs',
    status: '80% avanzado',
    progress: 80,
    priceFrom: 95000,
    priceTo: 140000,
    typologies: [
      'PH 1 amb (42m2) desde USD 95.000',
      'PH 2 amb (58m2) desde USD 115.000',
      'PH 2 amb terraza (68m2) desde USD 140.000',
    ],
    description:
      '24 PHs modernos con terrazas y jardín. Diseño contemporáneo, terminaciones premium. Terraza comunitaria con parrilla. A 3 cuadras de la estación.',
    deliveryDate: 'Entrega inmediata',
    images: [],
  },
  {
    id: 'emp004',
    name: 'Rivadavia Business Center',
    address: 'Av. Rivadavia 14500, Ramos Mejía',
    location: 'Ramos Mejía',
    type: 'Oficinas',
    status: 'En construcción',
    progress: 30,
    priceFrom: 85000,
    priceTo: 150000,
    typologies: [
      'Oficina A (45m2) desde USD 85.000',
      'Oficina B (75m2) desde USD 120.000',
      'Oficina C (110m2) desde USD 150.000',
    ],
    description:
      'Edificio oficinas categoría A sobre Rivadavia. 8 pisos, 40 unidades. Lobby doble altura, ascensores, estacionamiento. Entrega: junio 2029.',
    deliveryDate: 'Jun 2029',
    images: [],
  },
];

DEVELOPMENTS.forEach((e) => {
  e.images = DEVELOPMENT_IMAGES[e.id] || [];
});

export interface Opinion {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const OPINIONS: Opinion[] = [
  {
    id: 1,
    name: 'María González',
    rating: 5,
    text: 'Excelente atención desde el primer contacto. Nos ayudaron a encontrar la casa perfecta para nuestra familia en Ramos Mejía.',
    date: '2026-04-15',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    rating: 5,
    text: 'Tasaron mi departamento en Ciudadela de manera profesional y sin costo. El informe fue detallado y me sirvió para vender.',
    date: '2026-04-02',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    rating: 4,
    text: 'Alquilamos un departamento a través de Inmoria. El proceso fue ágil y nos explican todo sobre el seguro de caución.',
    date: '2026-03-20',
  },
  {
    id: 4,
    name: 'Roberto Sánchez',
    rating: 5,
    text: 'Compré un PH en Haedo Park y estoy encantado. La calidad de construcción es excelente. El equipo nos acompañar en cada paso.',
    date: '2026-03-10',
  },
  {
    id: 5,
    name: 'Laura Pérez',
    rating: 5,
    text: 'Confiamos la administración de 3 propiedades a Inmoria. Equipo responsable, informes mensuales y inquilinos contentos.',
    date: '2026-02-28',
  },
  {
    id: 6,
    name: 'Diego Fernández',
    rating: 4,
    text: 'Buscábamos un local comercial y nos encontraron la opción perfecta en Villa Sarmiento. Buena asesoría en inversión.',
    date: '2026-02-15',
  },
];

export function formatPrice(price: number, currency: string): string {
  return currency === 'USD'
    ? `USD ${price.toLocaleString('es-AR')}`
    : `$ ${price.toLocaleString('es-AR')}`;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}

export function getSlug(property: Property): string {
  return `${slugify(property.type)}-${slugify(property.operation)}-${slugify(property.location)}-${property.rooms}-amb-${property.id}`
}