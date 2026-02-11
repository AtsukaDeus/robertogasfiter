// Grilla de ventajas competitivas del servicio
import { Zap, ShieldCheck, FileText, Settings, Headphones } from "lucide-react"

const lista_diferenciales = [
  {
    icono: Zap,
    titulo: "Respuesta rápida",
    descripcion: "Llegamos lo más rápido posible para emergencias en Santiago.",
  },
  {
    icono: ShieldCheck,
    titulo: "Garantía en trabajos",
    descripcion: "Todos nuestros trabajos cuentan con garantía.",
  },
  {
    icono: FileText,
    titulo: "Presupuesto sin costo",
    descripcion: "Evaluamos tu problema y te cotizamos sin compromiso.",
  },
  {
    icono: Settings,
    titulo: "Herramientas profesionales",
    descripcion: "Equipos de última generación para trabajos limpios y precisos.",
  },
]

export default function Diferenciales() {
  return (
    <section id="diferenciales" className="py-20 lg:py-28 bg-celeste-suave/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-celeste-oscuro font-medium mb-2 text-sm tracking-wide uppercase">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-titulo">
            Lo que nos diferencia
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lista_diferenciales.map((item, indice) => (
            <div key={indice} className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm ring-1 ring-celeste-vivo/20 flex items-center justify-center mx-auto mb-4">
                <item.icono size={32} className="text-celeste-vivo" />
              </div>
              <h3 className="text-lg font-semibold text-titulo mb-2">
                {item.titulo}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
