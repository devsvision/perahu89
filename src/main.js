import { address, whatsappNumber } from "./data.js";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Rooms } from "./components/Rooms.js";
import { SeoContent } from "./components/SeoContent.js";
import { Facilities } from "./components/Facilities.js";
import { Gallery } from "./components/Gallery.js";
import { Location } from "./components/Location.js";
import { Attractions } from "./components/Attractions.js";
import { Testimonials } from "./components/Testimonials.js";
import { Faq } from "./components/Faq.js";
import { FinalCta } from "./components/FinalCta.js";
import { Footer } from "./components/Footer.js";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Navbar()}
  <main>
    ${Hero()}
    ${SeoContent()}
    ${Rooms()}
    ${Facilities()}
    ${Gallery()}
    ${Location()}
    ${Attractions()}
    ${Testimonials()}
    ${Faq()}
    ${FinalCta()}
  </main>
  ${Footer()}
  ${FloatingWhatsApp()}
  <div class="lightbox" aria-hidden="true">
    <button class="lightbox__close" aria-label="Close gallery preview">x</button>
    <img src="" alt="PERAHU 89 gallery preview" />
  </div>
`;

document.addEventListener("click", (event) => {
  const carousel = event.target.closest("[data-testimonial-carousel]");
  if (carousel && (event.target.closest("[data-carousel-prev]") || event.target.closest("[data-carousel-next]"))) {
    const track = carousel.querySelector("[data-carousel-track]");
    const direction = event.target.closest("[data-carousel-prev]") ? -1 : 1;
    const card = track.querySelector(".testimonial-card");
    const gap = Number.parseInt(getComputedStyle(track).gap, 10) || 0;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth"
    });
  }

  const menuToggle = event.target.closest("[data-menu-toggle]");
  if (menuToggle) {
    const isOpen = document.body.classList.toggle("menu-is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  if (event.target.closest("[data-menu-close]") || event.target.closest("[data-menu-link]")) {
    document.body.classList.remove("menu-is-open");
    document.querySelector("[data-menu-toggle]")?.setAttribute("aria-expanded", "false");
    document.querySelector("[data-menu-toggle]")?.setAttribute("aria-label", "Open menu");
  }

  const bookingButton = event.target.closest("[data-room]");
  if (bookingButton) {
    const room = bookingButton.dataset.room;
    const message = `Halo PERAHU 89, saya ingin booking:\nRoom: ${room}\nDate:\nGuest:`;
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  const whatsappButton = event.target.closest("[data-whatsapp]");
  if (whatsappButton) {
    const message = "Halo PERAHU 89, saya ingin tanya ketersediaan kamar.";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  const galleryItem = event.target.closest("[data-lightbox]");
  if (galleryItem) {
    const lightbox = document.querySelector(".lightbox");
    const image = lightbox.querySelector("img");
    image.src = galleryItem.dataset.lightbox;
    image.alt = galleryItem.querySelector("img").alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  if (event.target.closest(".lightbox__close") || event.target.classList.contains("lightbox")) {
    const lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.body.classList.remove("menu-is-open");
  document.querySelector("[data-menu-toggle]")?.setAttribute("aria-expanded", "false");
  document.querySelector("[data-menu-toggle]")?.setAttribute("aria-label", "Open menu");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
});

document.querySelector(".footer-address").textContent = address;
