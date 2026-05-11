import { rooms } from "../data.js";

export function Rooms() {
  return `
    <section class="section" id="rooms">
      <div class="section__header">
        <p class="eyebrow">Choose Your Room</p>
        <h2>Comfortable Rooms, Clear Prices</h2>
        <p>Simple, honest accommodation for travelers who want a clean Bali stay without overpaying.</p>
      </div>
      <div class="room-grid">
        ${rooms
          .map(
            (room) => `
              <article class="room-card">
                <div class="image-wrap">
                  <img src="${room.image}" alt="${room.name} at PERAHU 89 Guest House" loading="lazy" />
                  <span class="badge ${room.badge === "Limited" ? "badge--limited" : ""}">${room.badge}</span>
                </div>
                <div class="room-card__body">
                  <h3>${room.name}</h3>
                  <p>${room.description}</p>
                  <strong>${room.price}</strong>
                  <button class="button button--dark" data-room="${room.name}">Book Now</button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
