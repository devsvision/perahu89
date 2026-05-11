import { galleryImages } from "../data.js";

export function Gallery() {
  return `
    <section class="section" id="gallery">
      <div class="section__header">
        <p class="eyebrow">Gallery</p>
        <h2>A Calm Bali Base With Local Character</h2>
        <p>Preview the relaxed guest house atmosphere and nearby Bali moments before you book.</p>
      </div>
      <div class="gallery-grid">
        ${galleryImages
          .map(
            (image, index) => `
              <button class="gallery-item gallery-item--${image.layout}" data-lightbox="${image.src}" aria-label="Open ${image.title} photo">
                <img src="${image.src}" alt="${image.title} at PERAHU 89 Guest House Bali" loading="lazy" />
                <span class="gallery-item__caption">
                  <small>${image.tag}</small>
                  <strong>${image.title}</strong>
                </span>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
