import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import LocationCard from "./LocationCard";
import { officeLocations } from "../data/contactData";

/**
 * Office locations grid.
 * All addresses are candidate data until verified by CargoMax (PRD §8.5).
 */
function OfficeLocations() {
  return (
    <section className="offices-section" aria-label="Office locations">
      <Container>
        <SectionHeading
          eyebrow="Our Offices"
          title="Find Us"
          description="Reach out to your nearest CargoMax office for personalised assistance."
          align="center"
        />

        <div className="offices-grid">
          {officeLocations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OfficeLocations;
