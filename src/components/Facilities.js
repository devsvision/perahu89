import { facilities } from "../data.js";

const icons = {
  wifi: "M4 9a12 12 0 0 1 16 0M7 12.5a7 7 0 0 1 10 0M10 16a3 3 0 0 1 4 0",
  kitchen: "M6 3v18M10 3v18M6 8h4M15 3v18M18 3v18",
  pool: "M4 17c2 2 4 2 6 0s4-2 6 0 4 2 6 0M4 21c2 2 4 2 6 0s4-2 6 0 4 2 6 0M8 13V5a3 3 0 0 1 6 0v8",
  vehicle: "M5 15h14l-2-6H7l-2 6ZM7 18h.1M17 18h.1M6 15v3M18 15v3",
  parking: "M7 21V3h6a5 5 0 0 1 0 10H7",
  air: "M4 12h16M8 7h8M9 17h6"
};

function Icon(name) {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="${icons[name]}" />
    </svg>
  `;
}

export function Facilities() {
  return `
    <section class="section section--tint" id="facilities">
      <div class="section__header">
        <p class="eyebrow">Facilities</p>
        <h2>Everything Essential for an Easy Stay</h2>
        <p>Stay connected, move around Bali easily, and enjoy practical comforts included in your visit.</p>
      </div>
      <div class="facility-grid">
        ${facilities
          .map(
            ([icon, label]) => `
              <div class="facility-item">
                ${Icon(icon)}
                <span>${label}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
