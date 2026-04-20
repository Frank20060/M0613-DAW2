import Image from "next/image";

export default function SobreLosPollos() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <main>
        <h1 className="text-5xl font-bold text-yellow-800 mb-8 text-center">
          🐔 Sobre los Pollos
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Introducción
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Los pollos (Gallus gallus domesticus) son aves domesticadas que
            pertenecen a la familia de las faisánidas. Descendientes del gallo
            bankiva salvaje de Asia, los pollos han sido criados por humanos
            durante miles de años, convirtiéndose en una de las especies más
            abundantes del planeta. Su biología fascinante incluye adaptaciones
            únicas para la vida en cautiverio y una compleja estructura social.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Anatomía y Fisiología
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-yellow-600 mb-3">
                Sistema Digestivo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Los pollos poseen un sistema digestivo único con un buche (crop)
                donde almacenan comida, una molleja para triturar granos, y un
                ciego que ayuda en la digestión de fibras. Carecen de dientes,
                por lo que ingieren piedras para ayudar en la molienda.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-yellow-600 mb-3">
                Sistema Reproductor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Las gallinas producen huevos mediante ovulación. Un huevo tarda
                aproximadamente 24-26 horas en formarse completamente, pasando
                por diferentes etapas en el oviducto.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-6">
            Los pollos tienen visión tetracromática, percibiendo ultravioletas
            además de los colores visibles para humanos. Su oído es agudo, y
            poseen un sentido del olfato desarrollado. La temperatura corporal
            promedio es de 41-42°C, más alta que la de los mamíferos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Comportamiento y Comunicación
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Los pollos exhiben comportamientos sociales complejos. Viven en
            jerarquías estrictas llamadas "órdenes de picoteo" donde cada ave
            conoce su posición. Los gallos cantan para marcar territorio y
            atraer hembras, mientras que las gallinas emiten sonidos específicos
            para comunicarse con sus polluelos.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Cloqueo maternal:</strong> Las gallinas usan sonidos
              suaves para llamar a sus crías
            </li>
            <li>
              <strong>Canto del gallo:</strong> Anuncia el amanecer y establece
              dominancia
            </li>
            <li>
              <strong>Alarma:</strong> Diferentes llamadas para depredadores
              aéreos vs terrestres
            </li>
            <li>
              <strong>Baile de apareamiento:</strong> Los gallos realizan danzas
              para cortejar
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Reproducción y Desarrollo
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La reproducción en pollos es altamente eficiente. Una gallina puede
            poner hasta 300 huevos al año, aunque en condiciones naturales este
            número es menor. Los polluelos nacen precoces, capaces de caminar y
            comer por sí solos pocas horas después de la eclosión.
          </p>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-yellow-600 mb-3">
              Proceso de Eclosión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Los huevos se incuban durante 21 días. El polluelo usa su diente
              de huevo (un pequeño pico en la punta del pico) para romper la
              cáscara. Una vez fuera, el polluelo absorbe el saco vitelino para
              obtener nutrición durante los primeros días.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Alimentación y Nutrición
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Los pollos son omnívoros oportunistas. En libertad, consumen
            semillas, insectos, gusanos y vegetales. Su dieta incluye proteínas
            (20-25%), carbohidratos (60-70%) y grasas (2-5%). Necesitan calcio
            para la formación de cáscaras de huevo y vitaminas para el
            crecimiento.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Los pollos tienen la capacidad de convertir eficientemente la comida
            en proteína animal, siendo una fuente sostenible de nutrición para
            humanos. Su metabolismo rápido les permite crecer rápidamente,
            alcanzando el peso adulto en solo 6-8 semanas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Adaptaciones Evolutivas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A través de la domesticación, los pollos han desarrollado rasgos que
            los hacen ideales para la vida en granjas: mayor tamaño, producción
            continua de huevos, y docilidad. Sin embargo, esto ha venido con
            costos como reducción en la longevidad y cambios en el
            comportamiento natural. Los pollos salvajes viven hasta 10 años,
            mientras que los domésticos rara vez superan los 5-7 años.
          </p>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-700 italic">
            La biología de los pollos continúa fascinando a científicos y
            criadores por igual, ofreciendo lecciones sobre evolución,
            comportamiento animal y sostenibilidad alimentaria.
          </p>
        </section>
      </main>
    </div>
  );
}
