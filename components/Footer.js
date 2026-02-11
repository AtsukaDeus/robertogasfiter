// Pie de pagina con informacion del negocio
import { Phone } from "lucide-react"

const anio_actual = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">
              Roberto Solar{" "}
              <span className="text-celeste-claro">| Gasfiter | Especialista en Fugas</span>
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Gasfiter certificado con más de 30 años de experiencia
              en Santiago, La Florida, Providencia y alrededores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Instalación de cañerías</li>
              <li>Reparación de filtraciones</li>
              <li>Destape de cañerías</li>
              <li>Termos y calefont</li>
              <li>Remodelación de baños</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <a
              href="tel:+56959424699"
              className="flex items-center gap-2 text-celeste-claro hover:text-white transition-colors"
            >
              <Phone size={16} />
              +56 9 5942 4699
            </a>
            <p className="mt-3 text-gray-400 text-sm">Santiago, La Florida y alrededores</p>
            <p className="text-gray-400 text-sm">Lunes a Domingo, 24/7</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {anio_actual} Desarrollado por <a href="https://atsukadeus.github.io/portafolio_minimalista/index.html" className="font-bold text-white" target="_blank">
            @AtsukaDeuss</a>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
