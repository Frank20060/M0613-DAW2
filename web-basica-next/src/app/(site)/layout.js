'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation' // Para usarlo tiene que ser un componente de cliente

export default function SiteLayout({ children }) {
  const pathname = usePathname()
  return (
    <>
      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-6 px-6 py-4">
          <Link className={`font-medium hover:text-blue-600 ${pathname === '/' ? 'text-blue-600' : ''}`} href="/">Inici</Link>
          <Link className={`font-medium hover:text-blue-600 ${pathname === '/sobre' ? 'text-blue-600' : ''}`} href="/sobre">Sobre</Link>
          <Link className={`font-medium hover:text-blue-600 ${pathname === '/serveis' ? 'text-blue-600' : ''}`} href="/serveis">Serveis</Link>
          <Link className={`font-medium hover:text-blue-600 ${pathname === '/contacte' ? 'text-blue-600' : ''}`} href="/contacte">Contacte</Link>
          <Link className={`font-medium hover:text-blue-600 ${pathname === '/blog' ? 'text-blue-600' : ''}`} href="/blog">Blog</Link>
          <Link className={`font-medium hover:text-blue-600 ${pathname === '/api-demo' ? 'text-blue-600' : ''}`} href="/api-demo">API demo</Link>
          <Link className="font-medium hover:text-blue-600" href="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </>
  );
}