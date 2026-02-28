const CARDS = [
  { rank: 1, name: "Soul-Guide Lantern", pct: 68, copies: 1.9, type: "Artifact" },
  { rank: 2, name: "Spell Snare", pct: 43, copies: 2.0, type: "Instant" },
  { rank: 3, name: "Disdainful Stroke", pct: 40, copies: 1.4, type: "Instant" },
  { rank: 4, name: "Annul", pct: 38, copies: 1.8, type: "Instant" },
  { rank: 5, name: "Quantum Riddler", pct: 34, copies: 2.6, type: "Creature" },
  { rank: 6, name: "Sear", pct: 31, copies: 2.2, type: "Instant" },
  { rank: 7, name: "Pyroclasm", pct: 28, copies: 1.9, type: "Sorcery" },
  { rank: 8, name: "Spider-Sense", pct: 27, copies: 2.1, type: "Enchantment" },
  { rank: 9, name: "Stock Up", pct: 25, copies: 3.3, type: "Sorcery" },
  { rank: 10, name: "Requiting Hex", pct: 25, copies: 3.5, type: "Sorcery" },
  { rank: 11, name: "Spell Pierce", pct: 25, copies: 1.5, type: "Instant" },
  { rank: 12, name: "Bitter Triumph", pct: 25, copies: 2.5, type: "Sorcery" },
  { rank: 13, name: "Wan Shi Tong, Librarian", pct: 24, copies: 1.5, type: "Planeswalker" },
  { rank: 14, name: "Torpor Orb", pct: 23, copies: 2.0, type: "Artifact" },
  { rank: 15, name: "Duress", pct: 23, copies: 2.8, type: "Sorcery" },
  { rank: 16, name: "Llanowar Elves", pct: 23, copies: 4.0, type: "Creature" },
  { rank: 17, name: "Burst Lightning", pct: 23, copies: 3.6, type: "Instant" },
  { rank: 18, name: "Badgermole Cub", pct: 21, copies: 4.0, type: "Creature" },
  { rank: 19, name: "Negate", pct: 21, copies: 1.2, type: "Instant" },
  { rank: 20, name: "Tishana's Tidebinder", pct: 20, copies: 2.5, type: "Creature" },
  { rank: 21, name: "Wistfulness", pct: 19, copies: 2.6, type: "Sorcery" },
  { rank: 22, name: "Winternight Stories", pct: 19, copies: 2.9, type: "Enchantment" },
  { rank: 23, name: "Shoot the Sheriff", pct: 19, copies: 2.0, type: "Instant" },
  { rank: 24, name: "Ral, Crackling Wit", pct: 19, copies: 1.9, type: "Planeswalker" },
  { rank: 25, name: "Deceit", pct: 19, copies: 3.9, type: "Instant" },
  { rank: 26, name: "Rest in Peace", pct: 18, copies: 2.2, type: "Enchantment" },
  { rank: 27, name: "Flashfreeze", pct: 18, copies: 1.4, type: "Instant" },
  { rank: 28, name: "Get Lost", pct: 17, copies: 2.8, type: "Instant" },
  { rank: 29, name: "Three Steps Ahead", pct: 16, copies: 1.8, type: "Sorcery" },
  { rank: 30, name: "Boomerang Basics", pct: 16, copies: 3.6, type: "Sorcery" },
  { rank: 31, name: "Abandon Attachments", pct: 16, copies: 3.4, type: "Instant" },
  { rank: 32, name: "Stormchaser's Talent", pct: 15, copies: 3.6, type: "Enchantment" },
  { rank: 33, name: "Superior Spider-Man", pct: 15, copies: 3.5, type: "Creature" },
  { rank: 34, name: "Intimidation Tactics", pct: 15, copies: 2.2, type: "Enchantment" },
  { rank: 35, name: "Into the Flood Maw", pct: 15, copies: 1.5, type: "Sorcery" },
  { rank: 36, name: "Keen-Eyed Curator", pct: 14, copies: 2.0, type: "Creature" },
  { rank: 37, name: "Seam Rip", pct: 14, copies: 3.1, type: "Sorcery" },
  { rank: 38, name: "Surrak, Elusive Hunter", pct: 14, copies: 1.7, type: "Creature" },
  { rank: 39, name: "Voice of Victory", pct: 14, copies: 3.2, type: "Enchantment" },
  { rank: 40, name: "Bounce Off", pct: 14, copies: 2.0, type: "Instant" },
  { rank: 41, name: "Mightform Harmonizer", pct: 14, copies: 3.4, type: "Creature" },
  { rank: 42, name: "The Unagi of Kyoshi Island", pct: 14, copies: 1.2, type: "Creature" },
  { rank: 43, name: "Monument to Endurance", pct: 14, copies: 4.0, type: "Artifact" },
  { rank: 44, name: "Icetill Explorer", pct: 14, copies: 3.7, type: "Creature" },
  { rank: 45, name: "Enduring Curiosity", pct: 13, copies: 2.7, type: "Enchantment" },
  { rank: 46, name: "Ghost Vacuum", pct: 13, copies: 1.4, type: "Artifact" },
  { rank: 47, name: "Earthbender Ascension", pct: 13, copies: 3.7, type: "Enchantment" },
  { rank: 48, name: "Meltstrider's Resolve", pct: 12, copies: 2.9, type: "Instant" },
  { rank: 49, name: "Deadly Cover-Up", pct: 12, copies: 2.5, type: "Sorcery" },
  { rank: 50, name: "Essence Scatter", pct: 12, copies: 1.3, type: "Instant" },
];

const DECKS = [
  {
    name: "Izzet Lessons",
    meta: 11.2,
    count: 556,
    keyCards: ["Gran-Gran", "Monument to Endurance", "Artist's Talent", "Stock Up", "Quantum Riddler"]
  },
  {
    name: "Dimir Excruciator",
    meta: 8.8,
    count: 440,
    keyCards: ["Deceit", "Superior Spider-Man", "Requiting Hex", "Bitter Triumph", "Duress"]
  },
  {
    name: "Mono-Green Landfall",
    meta: 8.4,
    count: 418,
    keyCards: ["Badgermole Cub", "Icetill Explorer", "Earthbender Ascension", "Llanowar Elves"]
  },
  {
    name: "Dimir Midrange",
    meta: 7.2,
    count: 358,
    keyCards: ["Kaito, Bane of Nightmares", "Floodpits Drowner", "Deep-Cavern Bat", "Bitter Triumph", "Deceit"]
  },
  {
    name: "Izzet Spellementals",
    meta: 5.0,
    count: 249,
    keyCards: ["Sunderflock", "Eddymurk Crab", "Sleight of Hand", "Quantum Riddler", "Burst Lightning"]
  },
  {
    name: "Izzet Prowess",
    meta: 4.6,
    count: 226,
    keyCards: ["Astrologian's Planisphere", "Stock Up", "Stormchaser's Talent", "Burst Lightning"]
  },
  {
    name: "Mono-Red Aggro",
    meta: 3.7,
    count: 186,
    keyCards: ["Hexing Squelcher", "Razorkin Needlehead", "Nova Hellkite", "Sear", "Burst Lightning"]
  },
  {
    name: "Azorius Tempo",
    meta: 3.7,
    count: 183,
    keyCards: ["Voice of Victory", "Aven Interrupter", "Aang, Swift Savior", "Spell Snare"]
  },
  {
    name: "Simic Ouroboroid",
    meta: 3.6,
    count: 178,
    keyCards: ["Ouroboroid", "Badgermole Cub", "Quantum Riddler", "Llanowar Elves"]
  },
  {
    name: "Boros Dragons",
    meta: 3.5,
    count: 173,
    keyCards: ["Voice of Victory", "Clarion Conqueror", "Nova Hellkite", "Sear"]
  },
  {
    name: "Jeskai Control",
    meta: 3.4,
    count: 171,
    keyCards: ["Stock Up", "Consult the Star Charts", "Get Lost", "Spell Snare", "Pyroclasm"]
  },
  {
    name: "Temur Harmonizer Combo",
    meta: 3.0,
    count: 150,
    keyCards: ["Stock Up", "Consult the Star Charts", "Mightform Harmonizer", "Quantum Riddler"]
  },
  {
    name: "Bant Airbending Combo",
    meta: 2.4,
    count: 119,
    keyCards: ["Badgermole Cub", "Appa, Steadfast Guardian", "Aang, Swift Savior", "Llanowar Elves"]
  },
  {
    name: "Rakdos Monument",
    meta: 2.2,
    count: 107,
    keyCards: ["Moonshadow", "Monument to Endurance", "Bloodghast", "Bitter Triumph"]
  },
  {
    name: "Sultai Reanimator",
    meta: 2.0,
    count: 98,
    keyCards: ["Wistfulness", "Formidable Speaker", "Superior Spider-Man", "Bitter Triumph"]
  }
];

// Build a reverse map: card name -> deck names it appears in
const CARD_TO_DECKS = {};
DECKS.forEach(deck => {
  deck.keyCards.forEach(cardName => {
    if (!CARD_TO_DECKS[cardName]) CARD_TO_DECKS[cardName] = [];
    CARD_TO_DECKS[cardName].push(deck.name);
  });
});
