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
      <body className="min-h-screen flex flex-col">
        <header className="bg-yellow-600 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex space-x-6 justify-center text-white font-semibold">
              <li>
                <a href="/" className="hover:text-yellow-200 transition-colors">
                  Corral
                </a>
              </li>
              <li>
                <a href="/notihuevo" className="hover:text-yellow-200 transition-colors">
                  notiHuevo
                </a>
              </li>
              <li>
                <a
                  href="/sobre-los-pollos"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Sobre nosPollos
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-yellow-600 shadow-lg mt-auto">
          <div className="container mx-auto px-4 py-4">
            <p className="text-center text-white text-sm">
              © 2026 Pollos Noticias. by Frank Villar Redondo (Noticias generadas con IA).
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
