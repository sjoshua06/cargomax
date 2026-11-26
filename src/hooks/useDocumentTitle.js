import { useEffect } from "react";

/**
 * Sets `document.title` for the current route.
 *
 *   useDocumentTitle("Contact Us");
 *   // → "Contact Us | CargoMax"
 *
 * Pass nothing or falsy to reset to the default brand title.
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | CargoMax`
      : "CargoMax | Freight Forwarding & Logistics";
  }, [title]);
}
