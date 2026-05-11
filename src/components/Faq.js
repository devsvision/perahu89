const faqs = [
  {
    question: "Where is PERAHU 89 Guest House located?",
    answer:
      "PERAHU 89 Guest House is located at Jl. Gn. Tangkuban Perahu No.89, Kerobokan Kelod, Kuta Utara, Badung, Bali 80361."
  },
  {
    question: "How much are the rooms per night?",
    answer:
      "Room prices start from Rp 300.000 per night for Small Room, Rp 450.000 per night for Medium Room, and Rp 550.000 per night for Large Room."
  },
  {
    question: "Is PERAHU 89 close to Canggu and Seminyak?",
    answer:
      "Yes. The Kerobokan location gives easy access to Canggu, Berawa, Petitenget, and Seminyak for beaches, restaurants, beach clubs, and nightlife."
  },
  {
    question: "How do I book a room?",
    answer:
      "Use any Book Now or WhatsApp button on this website. The room name is filled automatically for faster booking."
  }
];

export function Faq() {
  return `
    <section class="section section--tint" id="faq">
      <div class="section__header">
        <p class="eyebrow">Frequently Asked Questions</p>
        <h2>Helpful Details Before You Book</h2>
      </div>
      <div class="faq-list">
        ${faqs
          .map(
            (item) => `
              <details>
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
              </details>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
