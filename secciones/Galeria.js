"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

const items_galeria = [
  { tipo: "imagen", src: "/fugas_imgs/im1.jpeg", titulo: "Reparación cañería subterránea" },
  { tipo: "imagen", src: "/fugas_imgs/im3.jpeg", titulo: "Instalación de cañerías" },
  { tipo: "video", src: "/fugas_videos/v1.mp4", titulo: "Trabajo en terreno" },
  { tipo: "imagen", src: "/fugas_imgs/im5.jpeg", titulo: "Reparación cañería de cobre" },
  { tipo: "imagen", src: "/fugas_imgs/im6.jpeg", titulo: "Detección de fugas" },
  { tipo: "video", src: "/fugas_videos/v2.mp4", titulo: "Detección de filtración" },
  { tipo: "imagen", src: "/fugas_imgs/im8.jpeg", titulo: "Equipo Variotec Tracergas" },
  { tipo: "imagen", src: "/fugas_imgs/im4.jpeg", titulo: "Localización de fuga" },
]

export default function Galeria() {
  const [video_activo, setVideoActivo] = useState(null)

  return (
    <section id="galeria" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-celeste-oscuro font-medium mb-2 text-sm tracking-wide uppercase">
            Nuestro trabajo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-titulo">
            Galería de proyectos
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items_galeria.map((item, indice) => (
            <div
              key={indice}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 aspect-[3/4]"
              onClick={() => item.tipo === "video" && setVideoActivo(item.src)}
            >
              {item.tipo === "video" ? (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play size={20} className="text-celeste-oscuro ml-0.5" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src={item.src}
                    alt={item.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {item.titulo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {video_activo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoActivo(null)}
        >
          <button
            onClick={() => setVideoActivo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <video
            src={video_activo}
            controls
            autoPlay
            className="max-w-3xl w-full max-h-[80vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
