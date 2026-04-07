import Sidebar from "../_components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="mx-auto grid max-w-5xl gap-6 px-6 py-10 md:grid-cols-[220px_1fr]">
      <Sidebar />
      <div className="rounded-lg border bg-white p-6 shadow-sm">{children}</div>
    </section>
  );
}