// Pagina principal que compone todas las secciones de la landing
import Navbar from "@/components/Navbar"
import Hero from "@/secciones/Hero"
import QuienSoy from "@/secciones/QuienSoy"
import Servicios from "@/secciones/Servicios"
import Diferenciales from "@/secciones/Diferenciales"
import Galeria from "@/secciones/Galeria"
import Testimonios from "@/secciones/Testimonios"
import Contacto from "@/secciones/Contacto"
import Footer from "@/components/Footer"
import Whatsapp_button from "@/components/Whatsapp_button"

export default function Pagina_principal() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienSoy />
        <Servicios />
        <Diferenciales />
        <Galeria />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp_button />
    </>
  )
}
