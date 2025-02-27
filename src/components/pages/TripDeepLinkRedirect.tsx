import { useEffect } from "react";
import { useParams } from "react-router-dom"

const TripDeepLinkRedirect = () => {
  const { id } = useParams();

  useEffect(() => {
    //const deepLink = `travellliapp://trip/${id}`;
    //window.location.href = deepLink;
  }, [id]);

  const handleRedirect = () => {
    const deepLink = `travelli://trip/${id}`;
    window.location.href = deepLink;
};

  return (
    <div className="bg-white text-color3 p-8 rounded-xl max-w-4xl mx-auto mt-24">
      <p>Haz clic en el botón para abrir la app:</p>
      <button onClick={handleRedirect}>Abrir en Travelli</button>
    </div>
  );
}

export default TripDeepLinkRedirect;