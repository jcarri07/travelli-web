const TermsAndConditions = () => {
  return (
    <>
    <div className="bg-white text-color3 p-8 rounded-xl max-w-4xl mx-auto mt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Términos y Condiciones de uso</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Aceptación de los Términos</h2>
        <p>
          Al utilizar la aplicación Travelli, los usuarios aceptan los términos y condiciones establecidos en este documento. Es obligatorio leer, comprender y aceptar estos términos antes de registrarse o utilizar los servicios ofrecidos por Travelli.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Definiciones</h2>
        <ul className="list-disc list-inside">
          <li><strong>Travelli:</strong> Es una plataforma móvil que facilita la gestión de viajes y reservaciones entre viajeros y agencias de viajes.</li>
          <li><strong>Usuario:</strong> Persona natural mayor de 18 años que se registra en Travelli como viajero o agencia de viajes.</li>
          <li><strong>Viajeros:</strong> Usuarios que utilizan la plataforma para buscar y reservar viajes.</li>
          <li><strong>Agencias de Viajes:</strong> Usuarios que utilizan Travelli para crear, gestionar y promocionar viajes.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Registro de Usuario</h2>
        <p className="mb-2 font-semibold">3.1. Requisitos para Viajeros:</p>
        <p>
          Los viajeros deben proporcionar información precisa y actualizada, como nombre completo, correo electrónico, contraseña, edad (mayor de 18 años), dirección y fotografía. Travelli no permite el registro de menores de 18 años.
        </p>

        <p className="mt-2 font-semibold">3.2. Requisitos para Agencias de Viajes:</p>
        <p>
          Las agencias deben registrar un nombre de usuario, nombre de la agencia, correo electrónico, contraseña, ubicación, número de teléfono y fotografía.
        </p>

        <p className="mt-2 font-semibold">3.3. Veracidad de la Información:</p>
        <p>
          El usuario garantiza que los datos proporcionados son verídicos y acepta que cualquier intento de falsificación resultará en la suspensión o eliminación de la cuenta.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Uso de la Plataforma</h2>
        <p className="mb-2 font-semibold">4.1. Para Viajeros:</p>
        <ul className="list-disc list-inside">
          <li>Los viajeros pueden buscar y reservar viajes, unirse a ellos mediante el registro de asistentes adicionales, y realizar pagos directamente a las agencias mediante los métodos de pago proporcionados.</li>
          <li>Los viajeros deben subir comprobantes de pago dentro de una hora tras realizar una reserva.</li>
          <li>Travelli no es intermediario en transacciones ni responsable de posibles estafas externas a la plataforma.</li>
        </ul>

        <p className="mt-2 font-semibold">4.2. Para Agencias de Viajes:</p>
        <ul className="list-disc list-inside">
          <li>Las agencias pueden crear, editar y cancelar viajes según las políticas establecidas.</li>
          <li>Las agencias deben verificar su identidad antes de gestionar viajes.</li>
          <li>Es responsabilidad de las agencias proporcionar información clara y verídica sobre sus viajes.</li>
        </ul>

        <p className="mt-2 font-semibold">4.3. Prohibiciones:</p>
        <ul className="list-disc list-inside">
          <li>Subir contenido obsceno, pornográfico, violento, racista o que infrinja leyes venezolanas resultará en la suspensión o eliminación de la cuenta.</li>
          <li>Intentos de estafa serán reportados a las autoridades competentes.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">5. Moderación de Contenido y Mecanismos de Seguridad</h2>
        <p>Travelli implementa un sistema de moderación de contenido para garantizar un entorno seguro para los usuarios. Se han habilitado las siguientes medidas:</p>
        <ul className="list-disc list-inside">
          <li>Mecanismo de reporte: Los usuarios pueden denunciar contenido inapropiado o abusivo a través de un botón de "Reportar" disponible en la aplicación.</li>
          <li>Bloqueo de usuarios: Los usuarios pueden bloquear a otros usuarios para evitar interacciones no deseadas.</li>
          <li>Revisión y acción: Travelli se compromete a revisar las denuncias en un plazo de 24 horas y, de ser necesario, eliminar contenido ofensivo y suspender o expulsar al usuario infractor.</li>
          <li>Política de cero tolerancia: No se permite contenido ofensivo, abusivo, discriminatorio o que incite al odio. La reincidencia resultará en la suspensión definitiva de la cuenta.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. Responsabilidad de Travelli</h2>
        <p>
          Travelli actúa únicamente como una plataforma que conecta viajeros y agencias de viajes. Travelli no se hace responsable de:
        </p>
        <ul className="list-disc list-inside">
          <li>Problemas, accidentes o conflictos ocurridos durante un viaje.</li>
          <li>Cualquier incumplimiento entre el viajero y la agencia fuera de la plataforma.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">7. Cancelaciones y Reservaciones</h2>
        <p>
          Las agencias pueden cancelar un viaje si no hay viajeros unidos. Los viajeros pueden cancelar una reserva siguiendo las políticas de cada agencia, pero el reembolso depende directamente de la agencia.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">8. Verificación de Identidad y Edad</h2>
        <p>
          Los viajeros y las agencias deben cumplir con los procesos de verificación solicitados por Travelli. Los menores de 18 años no están permitidos en la plataforma.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">9. Eliminación de Cuenta</h2>
        <p>
          La cuenta de un viajero no puede eliminarse si tiene viajes activos. Las agencias no pueden eliminar su cuenta si tienen viajes en proceso.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">10. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de Travelli, incluyendo el diseño, código y funcionalidades, es propiedad exclusiva de Travelli. Está prohibido el uso no autorizado de cualquier material de la aplicación.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">11. Modificaciones de los Términos</h2>
        <p>
          Travelli se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán notificados a los usuarios y el uso continuo de la aplicación implica la aceptación de los mismos.
        </p>
      </section>
    </div>
    <div className="bg-white text-color3 p-8 rounded-xl max-w-4xl mx-auto mt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Acuerdo de Licencia de Usuario Final (EULA)</h1>
      <p>Este Acuerdo de Licencia de Usuario Final ("EULA") es un acuerdo legal entre usted y Travelli que rige el uso de la aplicación.</p>
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Concesión de Licencia</h2>
        <p>
          Travelli le otorga una licencia limitada, no exclusiva, intransferible y revocable para utilizar la aplicación solo para fines personales y no comerciales.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Restricciones</h2>
        <p>
          Usted no puede:
        </p>
        <ul className="list-disc list-inside">
          <li>Modificar, distribuir, sublicenciar o vender la aplicación o su contenido.</li>
          <li>Usar la aplicación para actividades ilegales o fraudulentas.</li>
          <li>Intentar descompilar o realizar ingeniería inversa sobre el código de la aplicación.</li>         
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">3. Terminación</h2>
        <p>Travelli puede suspender o rescindir su acceso a la aplicación en caso de violación de este EULA o de los términos y condiciones.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">4. Limitación de Responsabilidad</h2>
        <p>Travelli no será responsable de daños indirectos, incidentales o consecuenciales derivados del uso de la aplicación.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">5. Ley Aplicable</h2>
        <p>Este acuerdo se rige por las leyes de Venezuela y cualquier disputa será resuelta en tribunales locales.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">6. Contacto</h2>
        <p>Si tiene alguna pregunta sobre estos términos o el EULA, puede contactarnos a través de nuestro soporte en la aplicación o en nuestro correo electrónico de atención al cliente.</p>
      </section>
    </div>
    </>
  );
};

export default TermsAndConditions;