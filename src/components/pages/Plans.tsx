const PricingPlans = () => {
  const plans = [
    {
      name: "Plan Free Tier",
      price: "0 USD",
      description:
        "Diseñado para agencias pequeñas o aquellas que desean probar la plataforma antes de comprometerse.",
      features: [
        "Acceso limitado",
        "Publicación de 1 viaje",
        "Luego del mes de prueba, debes obtener otro de los planes",
      ],
    },
    {
      name: "Plan Básico",
      price: "$9.99/mes",
      description:
        "Perfecto para agencias en crecimiento que necesitan más flexibilidad y capacidad para promocionar sus viajes.",
      features: [
        "Acceso limitado a las características de la app",
        "Publicación de hasta 5 viajes por mes",
      ],
    },
    {
      name: "Plan Profesional",
      price: "$24.99/mes",
      description:
        "Ideal para agencias que desean aumentar su visibilidad dentro de la plataforma y captar más clientes.",
      features: [
        "Acceso completo a todas las características de la app",
        "Publicación de hasta 15 viajes por mes",
        "Prioridad en la pantalla principal",
      ],
    },
    {
      name: "Plan Multi-Agencias",
      price: "Contáctanos",
      description:
        "Diseñado para grandes agencias o grupos que gestionan múltiples ofertas y requieren máxima visibilidad.",
      features: [
        "Acceso completo a todas las características de la app",
        "Publicación de hasta 30 viajes por mes",
        "Prioridad en la pantalla principal y en las búsquedas",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-color3 sm:text-3xl">
          Planes de Suscripción
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Selecciona el plan que mejor se adapte a las necesidades de tu agencia.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base rounded font-medium text-color3">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm font-light text-color3">{plan.description}</p>
              <p className="mt-4 text-2xl font-semibold text-color3">{plan.price}</p>

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-color3 text-sm flex">
                    <span className="mr-2 text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
                href="mailto:travellliapp@gmail.com"
                className="flex flex-row justify-center items-center mt-10 w-full bg-[#F96611] text-white text-sm py-3 px-4 rounded-2xl hover:bg-[#F96611]"
            >
              {plan.name === "Plan Multi-Agencias" ? "Contáctanos" : "Contáctanos"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
