document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const sortSelect = document.getElementById("sort-select");
  const cardsBody = document.getElementById("cards-body");
  const cardCount = document.getElementById("card-count");
  const deckGrid = document.getElementById("deck-grid");
  const cardPreview = document.getElementById("card-preview");
  const previewImg = document.getElementById("preview-img");
  const paginationEl = document.getElementById("pagination");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeFilter = "all";
  let selectedDeck = null;
  let expandedCard = null;
  let currentPage = 1;
  let pageSize = 10;

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
        currentPage = 1;
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

  // Build deck chips HTML for a card
  function buildDeckChips(cardName) {
    const decks = CARD_TO_DECKS[cardName] || [];
    if (decks.length === 0) {
      return '<span class="meta-none">Appears across various decks as a format staple</span>';
    }
    return decks.map(dName => {
      const deck = DECKS.find(d => d.name === dName);
      const meta = deck ? deck.meta + "%" : "";
      return `<span class="meta-deck-chip" data-deck="${dName}">${dName}${meta ? ` <span class="chip-meta">${meta}</span>` : ""}</span>`;
    }).join("");
  }

  // Render cards table with pagination
  function renderCards() {
    const allCards = getVisibleCards();
    const totalCards = allCards.length;
    const totalPages = Math.max(1, Math.ceil(totalCards / pageSize));

    if (currentPage > totalPages) currentPage = totalPages;

    const startIdx = (currentPage - 1) * pageSize;
    const pageCards = allCards.slice(startIdx, startIdx + pageSize);

    cardCount.textContent = `(${totalCards} cards)`;

    // Find which cards belong to selected deck
    const highlightCards = new Set();
    if (selectedDeck) {
      const deck = DECKS.find(d => d.name === selectedDeck);
      if (deck) deck.keyCards.forEach(c => highlightCards.add(c));
    }

    let html = "";
    pageCards.forEach((card, i) => {
      const globalIdx = startIdx + i + 1;
      const isHighlighted = highlightCards.has(card.name);
      const isExpanded = expandedCard === card.name;
      const goldfishUrl = `https://www.mtggoldfish.com/price/Standard/${encodeURIComponent(card.name)}`;

      html += `
        <tr class="card-row ${isHighlighted ? "highlighted" : ""} ${isExpanded ? "expanded" : ""}" data-card="${card.name}">
          <td class="rank-col">${globalIdx}</td>
          <td class="card-col">
            <div class="card-name-cell">
              <span class="expand-icon">&#9654;</span>
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
        </tr>`;

      if (isExpanded) {
        html += `
        <tr class="meta-row">
          <td colspan="5">
            <div class="meta-panel">
              <div class="meta-label">Associated Decks</div>
              <div class="meta-deck-list">${buildDeckChips(card.name)}</div>
            </div>
          </td>
        </tr>`;
      }
    });

    cardsBody.innerHTML = html;

    // Attach row click to expand/collapse
    cardsBody.querySelectorAll(".card-row").forEach(row => {
      row.addEventListener("click", (e) => {
        // Don't toggle if they clicked the card name link
        if (e.target.closest(".card-name-link")) return;
        const cardName = row.dataset.card;
        expandedCard = expandedCard === cardName ? null : cardName;
        renderCards();
      });
    });

    // Clicking a deck chip in the meta panel selects that deck
    cardsBody.querySelectorAll(".meta-deck-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        const deckName = chip.dataset.deck;
        selectedDeck = selectedDeck === deckName ? null : deckName;
        deckGrid.querySelectorAll(".deck-card").forEach(d => {
          d.classList.toggle("selected", d.dataset.deck === selectedDeck);
        });
        currentPage = 1;
        renderCards();
      });
    });

    // Attach hover previews
    cardsBody.querySelectorAll(".card-name-link").forEach(link => {
      link.addEventListener("mouseenter", (e) => showPreview(e, link.dataset.cardName));
      link.addEventListener("mousemove", movePreview);
      link.addEventListener("mouseleave", hidePreview);
    });

    renderPagination(totalCards, totalPages);
  }

  // Pagination
  function renderPagination(totalCards, totalPages) {
    if (totalCards <= pageSize && pageSize === 10) {
      paginationEl.innerHTML = "";
      return;
    }

    let html = "";

    // Prev button
    html += `<button class="page-btn" data-page="prev" ${currentPage <= 1 ? "disabled" : ""}>&laquo; Prev</button>`;

    // Page numbers
    const pages = getPageNumbers(currentPage, totalPages);
    pages.forEach(p => {
      if (p === "...") {
        html += `<span class="page-info">...</span>`;
      } else {
        html += `<button class="page-btn ${p === currentPage ? "active" : ""}" data-page="${p}">${p}</button>`;
      }
    });

    // Next button
    html += `<button class="page-btn" data-page="next" ${currentPage >= totalPages ? "disabled" : ""}>Next &raquo;</button>`;

    // Page size selector
    html += `
      <div class="page-size-controls">
        <label>Show:</label>
        <select id="page-size-select">
          <option value="10" ${pageSize === 10 ? "selected" : ""}>10</option>
          <option value="25" ${pageSize === 25 ? "selected" : ""}>25</option>
          <option value="50" ${pageSize === 50 ? "selected" : ""}>50</option>
        </select>
      </div>`;

    paginationEl.innerHTML = html;

    // Attach page button clicks
    paginationEl.querySelectorAll(".page-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.dataset.page;
        if (val === "prev") currentPage--;
        else if (val === "next") currentPage++;
        else currentPage = parseInt(val);
        expandedCard = null;
        renderCards();
        document.querySelector(".cards-section").scrollIntoView({ behavior: "smooth" });
      });
    });

    // Page size change
    const pageSizeSelect = document.getElementById("page-size-select");
    if (pageSizeSelect) {
      pageSizeSelect.addEventListener("change", () => {
        pageSize = parseInt(pageSizeSelect.value);
        currentPage = 1;
        expandedCard = null;
        renderCards();
      });
    }
  }

  // Compute which page numbers to show (with ellipsis)
  function getPageNumbers(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = [];
    pages.push(1);

    if (current > 3) pages.push("...");

    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }

    if (current < total - 2) pages.push("...");

    pages.push(total);
    return pages;
  }

  // Card image preview using Scryfall
  function getScryfallUrl(cardName) {
    return `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}&format=image&version=normal`;
  }

  function showPreview(e, cardName) {
    previewImg.src = getScryfallUrl(cardName);
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
      currentPage = 1;
      expandedCard = null;
      renderCards();
    });
  });

  // Search — reset to page 1
  searchInput.addEventListener("input", () => {
    currentPage = 1;
    expandedCard = null;
    renderCards();
  });

  // Sort — reset to page 1
  sortSelect.addEventListener("change", () => {
    currentPage = 1;
    expandedCard = null;
    renderCards();
  });

  // Init
  renderDecks();
  renderCards();
});
