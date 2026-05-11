export function Navbar() {
  const links = [
    ["#about", "About"],
    ["#rooms", "Rooms"],
    ["#facilities", "Facilities"],
    ["#gallery", "Gallery"],
    ["#location", "Location"],
    ["#nearby", "Nearby"],
    ["#faq", "FAQ"]
  ];

  return `
    <header class="navbar">
      <div class="nav-center">
        <a class="brand" href="#home" aria-label="PERAHU 89 home">
          <img src="assets/perahu89-logo.png" alt="PERAHU 89 Guest House logo" />
        </a>
        <nav class="navlinks" aria-label="Main navigation">
          ${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
        </nav>
      </div>
      <button class="nav-cta" data-whatsapp>WhatsApp</button>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="mobile-backdrop" data-menu-close></div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
        <div class="mobile-menu__top">
          <img src="assets/perahu89-logo.png" alt="PERAHU 89 Guest House logo" />
          <button class="mobile-menu__close" type="button" aria-label="Close menu" data-menu-close>x</button>
        </div>
        <div class="mobile-menu__links">
          ${links.map(([href, label]) => `<a href="${href}" data-menu-link>${label}</a>`).join("")}
        </div>
        <button class="button button--gold mobile-menu__cta" data-whatsapp>Book via WhatsApp</button>
      </nav>
    </header>
  `;
}
