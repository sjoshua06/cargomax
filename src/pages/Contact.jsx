import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactHero from "../contact/ContactHero";
import ContactMethods from "../contact/ContactMethods";
import QuoteForm from "../contact/QuoteForm";
import OfficeLocations from "../contact/OfficeLocations";
import ContactCta from "../contact/ContactCta";

import "../styles/contact.css";

function Contact() {
  useDocumentTitle("Contact Us");

  return (
    <main>
      <ContactHero />
      <QuoteForm />
      <ContactMethods />
      <OfficeLocations />
      <ContactCta />
    </main>
  );
}

export default Contact;
