import { MapPin, Phone, Mail, FileText } from "lucide-react";

/**
 * Single office / branch location card.
 * Rendered inside OfficeLocations grid.
 * Uses <address> for contact information and semantic anchor IDs
 * so footer links (#chennai, #tuticorin, #bangalore, #mumbai) resolve correctly.
 */
function LocationCard({
  id,
  name,
  type,
  address,
  gstNo,
  phone,
  email,
  mapUrl,
}) {
  return (
    <article id={id} className="location-card">
      <div className="location-card__header">
        <h3 className="location-card__name">{name}</h3>
        {type && <span className="location-card__type">{type}</span>}
      </div>

      <address className="location-card__body">
        <div className="location-card__row">
          <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
          <span>{address}</span>
        </div>

        {gstNo && (
          <div className="location-card__row location-card__gst">
            <FileText size={18} strokeWidth={1.75} aria-hidden="true" />
            <span>{gstNo}</span>
          </div>
        )}

        {phone && (
          <div className="location-card__row">
            <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
            <a href={phone.href}>{phone.display}</a>
          </div>
        )}

        {email && (
          <div className="location-card__row">
            <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
      </address>

      {mapUrl && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-card__map-link"
        >
          Open in Maps &rarr;
        </a>
      )}
    </article>
  );
}

export default LocationCard;
