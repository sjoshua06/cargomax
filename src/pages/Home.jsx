import Hero from "../home/Hero";
import CompanyMarquee from "../home/CompanyMarquee";
import GlobalNetwork from "../home/GlobalNetwork";
import ServicesPreview from "../home/ServicesPreview";
import HowWeWork from "../home/HowWeWork";
import TrackingWidget from "../home/TrackingWidget";

function Home() {
  return (
    <main>
      <Hero />
      <CompanyMarquee />
      <GlobalNetwork />
      <ServicesPreview />
      <HowWeWork />
      <TrackingWidget />
    </main>
  );
}

export default Home;
