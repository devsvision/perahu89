export function Hero() {
  return `
    <section class="hero" id="home">
      <div class="hero__shade"></div>
      <div class="hero__content">
        <p class="eyebrow">Limited Rooms Available in Kerobokan</p>
        <h1>Stay Comfortable in Bali</h1>
        <p class="hero__subtitle">Affordable comfort in the heart of Kerobokan, close to Canggu, Seminyak, beaches, cafes, and Bali's best sunset spots.</p>
        <div class="hero__actions">
          <button class="button button--gold" data-whatsapp>Book via WhatsApp</button>
          <a class="button button--ghost" href="#rooms">View Rooms</a>
        </div>
        <div class="trust-strip" aria-label="Guest house highlights">
          <span>Affordable Luxury Stay</span>
          <span>Fast WhatsApp Booking</span>
          <span>Free Parking</span>
        </div>
      </div>
    </section>
  `;
}
