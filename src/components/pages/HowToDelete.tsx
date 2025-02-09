import DeleteStep1 from "../../assets/delete_account_step_1.jpeg";
import DeleteStep2 from "../../assets/delete_account_step_2.jpeg";
import DeleteStep3 from "../../assets/delete_account_step_3.jpeg";
import DeleteStep4 from "../../assets/delete_account_step_4.jpeg";
import DeleteStep5 from "../../assets/delete_account_step_5.jpeg";

import { Image } from "../atoms/Image"

const HowToDelete = () => {
    return (
        <div className="bg-white text-color3  p-8 rounded-xl max-w-4xl md:p-12 mx-auto mt-24">
            <div className="flex flex-col mb-10">
                <h1 className="text-3xl font-bold text-center mb-6">Cómo eliminar tu cuenta en Travelli</h1>
                <p>A continuación, te mostramos los pasos para eliminar tu cuenta:</p>
            </div>
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold">Paso 1: Ir al perfil</h2>
                    <p className="mt-2 mb-4">En la pantalla principal, presiona el círculo superior izquierdo que muestra la foto del usuario.</p>
                    <Image as="a" href="/" style={{ height: 24 }} className="w-[8px]" image={DeleteStep1} alt="Step 1" />
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Paso 2: Acceder a las configuraciones</h2>
                    <p className="mt-2 mb-4">Dentro de los datos de tu perfil, presiona el ícono de configuraciones.</p>
                    <Image as="a" href="/" style={{ height: 24 }} className="w-[8px]" image={DeleteStep2} alt="Step 2" />
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Paso 3: Eliminar cuenta</h2>
                    <p className="mt-2 mb-4">En el menú de configuraciones, selecciona la opción "Eliminar cuenta".</p>
                    <Image as="a" href="/" style={{ height: 24 }} className="w-[8px]" image={DeleteStep3} alt="Step 3" />
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Paso 4: Confirmación de eliminación</h2>
                    <p className="mt-2 mb-4">En el modal de confirmación, presiona el botón "Continuar".</p>
                    <Image as="a" href="/" style={{ height: 24 }} className="w-[8px]" image={DeleteStep4} alt="Step 4" />
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Paso 5: Escribir "eliminar"</h2>
                    <p className="mt-2 mb-4">Para finalizar, escribe la palabra "eliminar" en el campo correspondiente para confirmar la eliminación de tu cuenta y luego presionas el boton "Borrar".</p>
                    <Image as="a" href="/" style={{ height: 24 }} className="w-[8px]" image={DeleteStep5} alt="Step 5" />
                </section>
            </div>
        </div>
    )
}

export default HowToDelete;