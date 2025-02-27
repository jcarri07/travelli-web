import { useEffect } from "react";
import { useParams } from "react-router-dom"

const TripDeepLinkRedirect = () => {
  const { id } = useParams();

  useEffect(() => {
    const deepLink = `travellliapp://trip/${id}`;
    window.location.href = deepLink;
  }, [id]);

  // const handleRedirect = () => {
  //   const deepLink = `travellliapp://trip/${id}`;
  //   window.location.replace(deepLink);
  // };

  return (
    <div className="bg-white text-color3 p-8 rounded-xl max-w-4xl mx-auto mt-24">
      <p>Redirigiendo a Travelli</p>
    </div>
  );
}

export default TripDeepLinkRedirect;