import ContactForm from "@/src/app/(site)/components/ContactForm";

export default function ContactePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Contacte</h1>
      <p className="text-slate-600">Escriu-nos a contacte@exemple.com</p>
      <ContactForm />
    </section>
  );
}