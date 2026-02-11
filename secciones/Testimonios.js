// Tarjetas de testimonios con estrellas de valoracion
import { Star } from "lucide-react"

const lista_testimonios = [
  {
    nombre: "María González",
    ubicacion: "Las Condes",
    texto:
      "Excelente servicio. Roberto llegó a la hora acordada, solucionó la filtración en mi baño y dejó todo impecable. Muy recomendable.",
    estrellas: 5,
  },
  {
    nombre: "Carlos Muñoz",
    ubicacion: "Providencia",
    texto:
      "Lo llamé por una emergencia un domingo y llegó en 40 minutos. Profesional, honesto y con precios justos. Ya es mi gasfiter de confianza.",
    estrellas: 5,
  },
  {
    nombre: "Andrea Soto",
    ubicacion: "Ñuñoa",
    texto:
      "Nos remodeló el baño completo. El resultado quedó increíble. Cumplió con los plazos y el presupuesto. 100% satisfecha.",
    estrellas: 5,
  },
]

function Estrellas({ cantidad }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: cantidad }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-celeste-suave/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-celeste-oscuro font-medium mb-2 text-sm tracking-wide uppercase">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-titulo">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lista_testimonios.map((testimonio, indice) => (
            <div
              key={indice}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Estrellas cantidad={testimonio.estrellas} />
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                &ldquo;{testimonio.texto}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-semibold text-titulo text-sm">
                  {testimonio.nombre}
                </p>
                <p className="text-gray-500 text-xs">{testimonio.ubicacion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
