// Seccion de contacto con telefono y boton WhatsApp para conversion
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

const datos_contacto = [
  {
    icono: Phone,
    etiqueta: "Teléfono",
    valor: "+56 9 5942 4699",
    enlace: "tel:+56959424699",
  },
  {
    icono: MapPin,
    etiqueta: "Cobertura",
    valor: "Santiago, La Florida y alrededores",
    enlace: null,
  },
  {
    icono: Clock,
    etiqueta: "Horario",
    valor: "Lunes a Domingo, 24/7",
    enlace: null,
  },
]

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <p className="text-celeste-oscuro font-medium mb-2 text-sm tracking-wide uppercase">
                Contacto
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-titulo mb-4">
                ¿Necesitas ayuda?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Escríbenos o llámanos. Respondemos en minutos y te damos un
                presupuesto sin costo.
              </p>

              <div className="flex flex-col gap-5">
                {datos_contacto.map((dato, indice) => {
                  const contenido = (
                    <div key={indice} className="flex items-center gap-4">
                      <div className="shrink-0 w-12 h-12 bg-celeste-suave rounded-xl flex items-center justify-center">
                        <dato.icono size={22} className="text-celeste-oscuro" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{dato.etiqueta}</p>
                        <p className="text-titulo font-semibold">{dato.valor}</p>
                      </div>
                    </div>
                  )

                  if (dato.enlace) {
                    return (
                      <a
                        key={indice}
                        href={dato.enlace}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {contenido}
                      </a>
                    )
                  }

                  return contenido
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-celeste-oscuro via-celeste to-celeste-vivo p-8 lg:p-12 flex flex-col items-center justify-center text-center text-white">
              <MessageCircle size={48} className="mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">
                Escríbenos por WhatsApp
              </h3>
              <p className="text-white/80 mb-8 max-w-sm leading-relaxed">
                Es la forma más rápida de contactarnos. Respuesta inmediata.
              </p>
              <a
                href="https://wa.me/56959424699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-celeste-oscuro px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
