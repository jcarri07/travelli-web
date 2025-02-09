const PrivacyPolicies = () => {
  return (
    <div className="bg-white text-color3  p-8 rounded-xl max-w-4xl md:p-12 mx-auto mt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Políticas de Privacidad</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Información Recopilada</h2>
          <p className="mt-2">Travelli recopila y almacena la siguiente información:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Para Viajeros:</strong> Nombre, apellido, correo electrónico, contraseña, edad, dirección y fotografía.
            </li>
            <li>
              <strong>Para Agencias de Viajes:</strong> Nombre de usuario, nombre de la agencia, correo electrónico, contraseña, ubicación, número de teléfono y fotografía.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">2. Uso de la Información</h2>
          <p className="mt-2">
            Travelli utiliza los datos personales únicamente para operar y mejorar la plataforma. Los datos de contacto de los
            usuarios (correo y número de teléfono) están desactivados por defecto y solo se mostrarán si el usuario lo autoriza
            explícitamente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">3. Compartición de Datos</h2>
          <p className="mt-2">
            Travelli no comparte datos personales con terceros salvo en cumplimiento de requerimientos legales o en caso de
            investigaciones por presuntas actividades ilícitas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">4. Protección de Datos</h2>
          <p className="mt-2">
            Travelli implementa medidas de seguridad para proteger los datos de los usuarios contra accesos no autorizados,
            pérdida o robo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">5. Almacenamiento de Información</h2>
          <p className="mt-2">
            Los datos proporcionados se almacenan de forma segura en los servidores de Travelli y se mantienen mientras el
            usuario tenga una cuenta activa en la plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">6. Derechos de los Usuarios</h2>
          <p className="mt-2">
            Los usuarios pueden acceder, actualizar o eliminar su información en cualquier momento desde su perfil. La
            eliminación de cuentas está sujeta a las restricciones mencionadas en los términos y condiciones.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">7. Notificaciones</h2>
          <p className="mt-2">
            Travelli enviará notificaciones relevantes sobre la actividad en la plataforma (por ejemplo, reservaciones,
            aprobaciones de identidad, mensajes) tanto en la aplicación como por correo electrónico.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">8. Cambios en las Políticas</h2>
          <p className="mt-2">
            Travelli se reserva el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán
            notificados a los usuarios a través de la aplicación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">9. Contacto</h2>
          <p className="mt-2">
            Para dudas sobre las políticas de privacidad, puedes contactarnos en:
            <a href="mailto:travellliapp@gmail.com" className="text-blue-600 hover:underline ml-1">travellliapp@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicies;
