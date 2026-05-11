import { attractions } from "../data.js";

export function Attractions() {
  return `
    <section class="section section--tint" id="nearby">
      <div class="section__header">
        <p class="eyebrow">Nearby Attractions</p>
        <h2>Close to Beaches, Wellness, Dining, and Nightlife</h2>
        <p>PERAHU 89 gives you an affordable starting point for the places international travelers love most.</p>
      </div>
      <div class="attraction-grid">
        ${attractions
          .map(
            (place) => `
              <article class="attraction-card">
                <img src="${place.image}" alt="${place.name} near PERAHU 89 Guest House" loading="lazy" />
                <div>
                  <span class="attraction-distance">${place.distance} from PERAHU 89</span>
                  <h3>${place.name}</h3>
                  <strong>${place.highlights}</strong>
                  <p>${place.description}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
