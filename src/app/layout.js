import "./globals.css";

export const metadata = {
  title: "Web amb Next.js",
  description: "Exercici App Router + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body className="min-h-screen bg-slate-50 text-slate-800">{children}</body>
    </html>
  );
}