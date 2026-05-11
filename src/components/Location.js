import { address } from "../data.js";

export function Location() {
  return `
    <section class="section section--split" id="location">
      <div class="location-copy">
        <p class="eyebrow">Location</p>
        <h2>Stay in Kerobokan, Minutes From Bali Favorites</h2>
        <p>${address}</p>
        <button class="button button--gold" data-whatsapp>Ask Availability</button>
      </div>
      <div class="map-frame">
        <iframe
          title="PERAHU 89 Guest House location map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=-8.678379331374153,115.17406808263769&z=16&output=embed">
        </iframe>
      </div>
    </section>
  `;
}
