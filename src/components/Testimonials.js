import { testimonials } from "../data.js";

export function Testimonials() {
  return `
    <section class="section" id="testimonials">
      <div class="section__header">
        <p class="eyebrow">Guest Reviews</p>
        <h2>Trusted by Travelers Looking for Value</h2>
      </div>
      <div class="testimonial-carousel" data-testimonial-carousel>
        <button class="carousel-button carousel-button--prev" type="button" aria-label="Previous guest review" data-carousel-prev>
          &lt;
        </button>
        <div class="testimonial-track" data-carousel-track>
          ${testimonials
            .map(
              (item) => `
                <article class="testimonial-card">
                  <div class="testimonial-card__top">
                    <img src="${item.avatar}" alt="${item.name} from ${item.country}" loading="lazy" />
                    <div>
                      <strong>${item.name}</strong>
                      <span>${item.country}</span>
                    </div>
                  </div>
                  <div class="stars" aria-label="5 star rating">
                    <span></span><span></span><span></span><span></span><span></span>
                    <em>5.0 / 5</em>
                  </div>
                  <p>"${item.review}"</p>
                </article>
              `
            )
            .join("")}
        </div>
        <button class="carousel-button carousel-button--next" type="button" aria-label="Next guest review" data-carousel-next>
          &gt;
        </button>
      </div>
    </section>
  `;
}
