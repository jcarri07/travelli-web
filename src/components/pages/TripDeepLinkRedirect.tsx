import { useEffect } from "react";
import { useParams } from "react-router-dom"

const TripDeepLinkRedirect = () => {
  const { id } = useParams();

  useEffect(() => {
    //const deepLink = `travellliapp://trip/${id}`;
    //window.location.href = deepLink;
  }, [id]);

  return (
    <div>
      <p>Redirigiendo a Travelli</p>
    </div>
  );
}

export default TripDeepLinkRedirect;