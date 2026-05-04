'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PropertyGalleryProps {
  images: string[]
  alt: string
}

export function PropertyGallery({ images, alt }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="rounded-2xl overflow-hidden bg-gcl">
      <div className="aspect-16/10 relative cursor-pointer">
        <Image
          id="fmi"
          src={selectedImage}
          alt={alt}
          className="w-full h-full object-cover"
          width={800}
          height={500}
        />
      </div>
      <div className="flex gap-2 p-3 overflow-x-auto">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Foto ${i + 1}`}
            className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 ${
              selectedImage === img ? 'border-primario' : 'border-transparent'
            } hover:border-pm transition-colors`}
            width={80}
            height={64}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      
    </div>
  )
}
