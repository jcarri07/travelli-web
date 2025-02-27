import { useEffect } from "react";
import { useParams } from "react-router-dom"

const TripDeepLinkRedirect = () => {
  const { id } = useParams();

  useEffect(() => {
    alert(`trip id: ${id}`);
    //const deepLink = `travellliapp://trip/${id}`;
    //window.location.href = deepLink;
  }, [id]);

  const handleRedirect = () => {
    const deepLink = `travelli://trip/${id}`;
    console.log(`Redirigiendo a: ${deepLink}`);
    window.location.replace(deepLink);};

  return (
    <div className="bg-white text-color3 p-8 rounded-xl max-w-4xl mx-auto mt-24">
      <p>Haz clic en el botón para abrir la app:</p>
      <button onClick={handleRedirect}>Abrir en Travelli {id}</button>
    </div>
  );
}

export default TripDeepLinkRedirect;