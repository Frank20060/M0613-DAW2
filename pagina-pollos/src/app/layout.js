import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Página de Pollos - Noticias sobre Pollos",
  description: "Tu fuente de noticias y información sobre pollos",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 shadow-md border-b-4 border-yellow-700 sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-center">
              <ul className="flex space-x-8 text-white font-semibold text-sm md:text-base ">
                <li>
                  <a
                    href="/"
                    className="hover:text-yellow-100 transition-colors duration-300 relative group pb-1 text-xl"
                  >
                    Corral
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/notihuevo"
                    className="hover:text-yellow-100 transition-colors duration-300 relative group pb-1 text-xl"
                  >
                    notiHuevo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/sobre-los-pollos"
                    className="hover:text-yellow-100 transition-colors duration-300 relative group pb-1 text-xl"
                  >
                    Sobre nosPollos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 shadow-lg border-t-4 border-yellow-700 mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="text-white">
                <p className="font-semibold mb-2 text-lg">
                  🐔 PolloHub Noticias
                </p>
                <p className="text-sm text-yellow-100">
                  Tu fuente no confiable de noticias sobre pollos y avicultura.
                </p>
              </div>
              <div className="text-white text-right md:text-left">
                <div className="flex flex-col md:flex-row gap-3 md:justify-end">
                  <a
                    href="/new-add"
                    className="inline-flex items-center justify-center gap-2 bg-white text-yellow-600 hover:bg-yellow-50 font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow hover:shadow-lg"
                  >
                    Añadir Noticia
                  </a>
                  <a
                    href="/notihuevo"
                    className="inline-flex items-center justify-center gap-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Ver Noticias
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-yellow-700 pt-4">
              <p className="text-center text-yellow-50 text-xs md:text-sm">
                © 2026 PolloHub Noticias • Noticias generadas con IA • by Frank
                Villar Redondo
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
