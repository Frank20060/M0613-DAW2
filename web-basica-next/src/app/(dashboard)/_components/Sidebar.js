import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="mb-3 text-sm font-semibold text-slate-500">Tauler</p>
      <nav className="flex flex-col gap-2">
        <Link className="hover:text-blue-600" href="/dashboard">Resum</Link>
        <Link className="hover:text-blue-600" href="/dashboard/settings">Configuració</Link>
      </nav>
    </aside>
  );
}