// Barra de navegacion sticky con menu responsive
"use client"

import { useState } from "react"
import { MessageCircle, Menu, X } from "lucide-react"
import Image from "next/image"

const enlaces = [
  { nombre: "Servicios", destino: "#servicios" },
  { nombre: "Diferenciales", destino: "#diferenciales" },
  { nombre: "Galería", destino: "#galeria" },
  { nombre: "Testimonios", destino: "#testimonios" },
  { nombre: "Contacto", destino: "#contacto" },
]

export default function Navbar() {
  const [menu_abierto, set_menu_abierto] = useState(false)

  function alternar_menu() {
    set_menu_abierto(!menu_abierto)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo_img.jpeg"
              alt="Roberto Gasfiter Especialista en Fugas"
              width={72}
              height={72}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-titulo hidden sm:block">
              Roberto Solar<span className="text-celeste-oscuro"> | Gasfiter | Especialista en Fugas</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {enlaces.map((enlace) => (
              <a
                key={enlace.destino}
                href={enlace.destino}
                className="text-sm text-gray-600 hover:text-celeste-oscuro transition-colors"
              >
                {enlace.nombre}
              </a>
            ))}
            <a
              href="https://wa.me/56959424699"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-celeste to-celeste-vivo text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-celeste-vivo/30 transition-all duration-300"
            >
              <MessageCircle size={16} />
              Contáctame
            </a>
          </div>

          <button
            onClick={alternar_menu}
            className="md:hidden p-2 text-gray-600"
            aria-label="Abrir menú"
          >
            {menu_abierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menu_abierto && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {enlaces.map((enlace) => (
                <a
                  key={enlace.destino}
                  href={enlace.destino}
                  onClick={alternar_menu}
                  className="px-4 py-2 text-gray-600 hover:text-celeste-oscuro hover:bg-celeste-suave rounded-lg transition-colors"
                >
                  {enlace.nombre}
                </a>
              ))}
              <a
                href="https://wa.me/56959424699"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mx-4 mt-2 bg-gradient-to-r from-celeste to-celeste-vivo text-white px-4 py-2.5 rounded-full text-sm font-medium"
              >
                <MessageCircle size={16} />
                Contáctame
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
