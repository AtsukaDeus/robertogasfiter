// Seccion principal con titulo, subtitulo y tarjeta de beneficios
import { Shield, Clock, Award } from "lucide-react"
import Image from "next/image"

const beneficios = [
  { icono: Clock, texto: "Llegamos lo más rápido posible" },
  { icono: Shield, texto: "Garantía en cada trabajo" },
  { icono: Award, texto: "+30 años de experiencia" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-celeste-suave via-white to-celeste-vivo/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-celeste-oscuro font-medium mb-4 text-sm tracking-wide uppercase">
              Gasfiter certificado · Especialista en fugas
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-titulo leading-tight">
              Soluciones sanitarias{" "}
              <span className="bg-gradient-to-r from-celeste-oscuro to-celeste-vivo bg-clip-text text-transparent">confiables</span> para tu
              hogar
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              Gasfiter certificado con más de 30 años de experiencia en
              Santiago, La Florida, Providencia y alrededores. Trabajo limpio, puntual y con garantía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-gradient-to-r from-celeste to-celeste-vivo text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-celeste-vivo/25"
              >
                Solicitar Presupuesto
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center border-2 border-celeste text-celeste-oscuro px-8 py-3.5 rounded-full font-medium hover:bg-celeste-suave transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:ml-auto max-w-md w-full gap-6">
            <Image
              src="/logo_img.jpeg"
              alt="Roberto Gasfiter Especialista en Fugas"
              width={220}
              height={220}
              className="rounded-2xl shadow-lg"
            />
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 w-full border-t-4 border-celeste-vivo">
              <h3 className="text-lg font-semibold text-titulo mb-6">
                ¿Por qué elegirnos?
              </h3>
            <div className="flex flex-col gap-5">
              {beneficios.map((item, indice) => (
                <div key={indice} className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 bg-celeste-suave rounded-xl flex items-center justify-center">
                    <item.icono size={24} className="text-celeste-oscuro" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {item.texto}
                  </span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
