// Seccion de presentacion personal de Roberto
import Image from "next/image"
import { MapPin, Wrench, Calendar } from "lucide-react"

const datos = [
  { icono: Calendar, texto: "Más de 30 años de experiencia" },
  { icono: Wrench, texto: "Cientos de trabajos realizados" },
  { icono: MapPin, texto: "Santiago, La Florida y alrededores" },
]

export default function QuienSoy() {
  return (
    <section id="quien-soy" className="py-20 lg:py-28 bg-celeste-suave/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
            <Image
              src="/roberto_gasfiter.jpeg"
              alt="Roberto Solar — Gasfiter certificado"
              width={400}
              height={480}
              className="rounded-2xl shadow-lg object-cover w-44 sm:w-52 md:w-56 lg:w-60"
            />
            <div className="flex flex-col gap-3 sm:gap-4">
              <Image
                src="/r1.jpeg"
                alt="Roberto trabajando"
                width={280}
                height={230}
                className="rounded-2xl shadow-lg object-cover w-36 sm:w-44 md:w-48 lg:w-52 flex-1"
              />
              <Image
                src="/r2.jpeg"
                alt="Roberto en terreno"
                width={280}
                height={230}
                className="rounded-2xl shadow-lg object-cover w-36 sm:w-44 md:w-48 lg:w-52 flex-1"
              />
            </div>
          </div>

          <div>
            <p className="text-celeste-oscuro font-medium text-sm tracking-wide uppercase mb-3">
              Quién soy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-titulo">
              Roberto Solar
            </h2>
            <p className="mt-2 text-lg text-celeste-oscuro font-medium">
              Gasfiter certificado · Especialista en fugas
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Con más de tres décadas dedicadas a la gasfitería, he construido mi
              reputación trabajo a trabajo. Cada cañería reparada, cada
              instalación terminada y cada cliente satisfecho me motivan a seguir
              dando lo mejor de mí.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Creo en el trato cercano, la puntualidad y la transparencia. Cuando
              llego a tu hogar, me comprometo a explicarte el problema, darte un
              presupuesto justo y dejarte tranquilo con un trabajo bien hecho.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {datos.map((item, indice) => (
                <div key={indice} className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
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
    </section>
  )
}
