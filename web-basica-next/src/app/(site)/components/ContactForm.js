"use client"; //Para que renderice en el local (le decimos que sea componente de cliente (si no lo hacemos son componentes de servidor que se renderizan en servidor))

import { useState } from "react";

export default function ContactForm() {
  const [enviat, setEnviat] = useState(false);

  return (
    <div className="space-y-3 rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-600">
        Component de <strong>client</strong>: estat local i esdeveniment al clic (sense enviar dades reals).
      </p>
      <button
        type="button"
        onClick={() => setEnviat(true)}
        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Simular enviament
      </button>
      {enviat && (
        <p className="text-sm font-medium text-green-700" role="status">
          Missatge registrat (simulació).
        </p>
      )}
    </div>
  );
}