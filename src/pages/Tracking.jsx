import useDocumentTitle from "../hooks/useDocumentTitle";
import TrackingHero from "../tracking/TrackingHero";
import TrackingForm from "../tracking/TrackingForm";

import "../styles/tracking.css";

function Tracking() {
  useDocumentTitle("Track Your Shipment");

  return (
    <main>
      <TrackingHero />
      <TrackingForm />
    </main>
  );
}

export default Tracking;
