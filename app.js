document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const sortSelect = document.getElementById("sort-select");
  const cardsBody = document.getElementById("cards-body");
  const cardCount = document.getElementById("card-count");
  const deckGrid = document.getElementById("deck-grid");
  const cardPreview = document.getElementById("card-preview");
  const previewImg = document.getElementById("preview-img");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeFilter = "all";
  let selectedDeck = null;
  let imageCache = {};

  // Render decks
  function renderDecks() {
    deckGrid.innerHTML = DECKS.map(deck => `
      <div class="deck-card" data-deck="${deck.name}">
        <div class="deck-header">
          <span class="deck-name">${deck.name}</span>
          <span class="deck-meta">${deck.meta}%</span>
        </div>
        <div class="deck-cards-list">
          ${deck.keyCards.map(c => `<span class="deck-card-tag">${c}</span>`).join("")}
        </div>
      </div>
    `).join("");

    deckGrid.querySelectorAll(".deck-card").forEach(el => {
      el.addEventListener("click", () => {
        const deckName = el.dataset.deck;
        if (selectedDeck === deckName) {
          selectedDeck = null;
          el.classList.remove("selected");
        } else {
          selectedDeck = deckName;
          deckGrid.querySelectorAll(".deck-card").forEach(d => d.classList.remove("selected"));
          el.classList.add("selected");
        }
        renderCards();
      });
    });
  }

  // Get filtered + sorted cards
  function getVisibleCards() {
    let cards = [...CARDS];
    const query = searchInput.value.toLowerCase().trim();

    if (query) {
      cards = cards.filter(c => c.name.toLowerCase().includes(query));
    }

    if (activeFilter !== "all") {
      cards = cards.filter(c => c.type === activeFilter);
    }

    const sort = sortSelect.value;
    switch (sort) {
      case "percent-desc": cards.sort((a, b) => b.pct - a.pct); break;
      case "percent-asc": cards.sort((a, b) => a.pct - b.pct); break;
      case "copies-desc": cards.sort((a, b) => b.copies - a.copies); break;
      case "name-asc": cards.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    return cards;
  }

  // Render cards table
  function renderCards() {
    const cards = getVisibleCards();
    cardCount.textContent = `(${cards.length} cards)`;

    // Find which cards belong to selected deck
    const highlightCards = new Set();
    if (selectedDeck) {
      const deck = DECKS.find(d => d.name === selectedDeck);
      if (deck) deck.keyCards.forEach(c => highlightCards.add(c));
    }

    cardsBody.innerHTML = cards.map((card, i) => {
      const decks = CARD_TO_DECKS[card.name] || [];
      const isHighlighted = highlightCards.has(card.name);
      const goldfishUrl = `https://www.mtggoldfish.com/price/Standard/${encodeURIComponent(card.name)}`;

      return `
        <tr class="${isHighlighted ? "highlighted" : ""}" data-card="${card.name}">
          <td class="rank-col">${i + 1}</td>
          <td class="card-col">
            <div class="card-name-cell">
              <a class="card-name-link" href="${goldfishUrl}" target="_blank"
                 data-card-name="${card.name}">${card.name}</a>
            </div>
          </td>
          <td class="type-col">
            <span class="type-badge type-${card.type}">${card.type}</span>
          </td>
          <td class="pct-col">
            <div class="pct-bar-wrapper">
              <span class="pct-value">${card.pct}%</span>
              <div class="pct-bar">
                <div class="pct-bar-fill" style="width: ${card.pct}%"></div>
              </div>
            </div>
          </td>
          <td class="copies-col">
            <span class="copies-value">${card.copies.toFixed(1)}</span>
          </td>
          <td class="decks-col">
            <div class="deck-tags">
              ${decks.map(d => `<span class="deck-tag">${d}</span>`).join("")}
              ${decks.length === 0 ? '<span class="deck-tag">Various</span>' : ""}
            </div>
          </td>
        </tr>
      `;
    }).join("");

    // Attach hover previews
    cardsBody.querySelectorAll(".card-name-link").forEach(link => {
      link.addEventListener("mouseenter", (e) => showPreview(e, link.dataset.cardName));
      link.addEventListener("mousemove", movePreview);
      link.addEventListener("mouseleave", hidePreview);
    });
  }

  // Card image preview using Scryfall
  function getScryfallUrl(cardName) {
    return `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}&format=image&version=normal`;
  }

  function showPreview(e, cardName) {
    const imgUrl = getScryfallUrl(cardName);
    previewImg.src = imgUrl;
    cardPreview.style.display = "block";
    movePreview(e);
  }

  function movePreview(e) {
    const x = e.clientX + 20;
    const y = e.clientY - 150;
    const maxX = window.innerWidth - 280;
    const maxY = window.innerHeight - 380;
    cardPreview.style.left = Math.min(x, maxX) + "px";
    cardPreview.style.top = Math.max(10, Math.min(y, maxY)) + "px";
  }

  function hidePreview() {
    cardPreview.style.display = "none";
    previewImg.src = "";
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderCards();
    });
  });

  // Search
  searchInput.addEventListener("input", () => renderCards());

  // Sort
  sortSelect.addEventListener("change", () => renderCards());

  // Init
  renderDecks();
  renderCards();
});
