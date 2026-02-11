import { Geist } from "next/font/google"
import "./globals.css"

const fuente_principal = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata = {
  title: "Roberto Gasfiter | Especialista en Fugas - Santiago, La Florida",
  description:
    "Gasfiter certificado con más de 30 años de experiencia. Especialista en detección y reparación de fugas en Santiago, La Florida, Providencia y alrededores.",
  icons: {
    icon: "/logo_img.jpeg",
  },
}

export default function Layout_principal({ children }) {
  return (
    <html lang="es">
      <body className={`${fuente_principal.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
