// Grilla de servicios ofrecidos con iconos y hover elegante
import { Wrench, Droplets, ShowerHead, Waves, Flame, Hammer, AirVent, CircleDot, Fuel } from "lucide-react"

const lista_servicios = [
  {
    icono: Wrench,
    titulo: "Instalación de cañerías",
    descripcion:
      "Instalación y reemplazo de cañerías de agua potable y alcantarillado con materiales de primera.",
  },
  {
    icono: Droplets,
    titulo: "Reparación de filtraciones",
    descripcion:
      "Detección y reparación de filtraciones en muros, techos y conexiones sin romper de más.",
  },
  {
    icono: ShowerHead,
    titulo: "Instalación de artefactos",
    descripcion:
      "Montaje de lavaplatos, WC, lavamanos, duchas y tinas con terminación profesional.",
  },
  {
    icono: Waves,
    titulo: "Destape de cañerías",
    descripcion:
      "Destape mecánico y con equipos profesionales para todo tipo de obstrucciones.",
  },
  {
    icono: Flame,
    titulo: "Termos y calefont",
    descripcion:
      "Instalación, mantención y reparación de sistemas de agua caliente.",
  },
  {
    icono: Hammer,
    titulo: "Remodelación de baños",
    descripcion:
      "Remodelación completa de baños y cocinas con instalaciones sanitarias incluidas.",
  },
  {
    icono: AirVent,
    titulo: "Aire acondicionado",
    descripcion:
      "Instalación y mantención de equipos de aire acondicionado split y centralizados.",
  },
  {
    icono: CircleDot,
    titulo: "Alcantarillado",
    descripcion:
      "Reparación, mantención y destape de redes de alcantarillado residencial e industrial.",
  },
  {
    icono: Fuel,
    titulo: "Gas",
    descripcion:
      "Instalación y reparación de redes de gas, certificación SEC y detección de fugas de gas.",
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-celeste-oscuro font-medium mb-2 text-sm tracking-wide uppercase">
            Nuestros servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-titulo">
            Todo lo que necesitas en gasfitería
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lista_servicios.map((servicio, indice) => (
            <div
              key={indice}
              className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-celeste-vivo/15 hover:border-celeste-vivo/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-celeste-suave rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-celeste group-hover:to-celeste-vivo transition-all duration-300">
                <servicio.icono
                  size={28}
                  className="text-celeste-oscuro group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-titulo mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
