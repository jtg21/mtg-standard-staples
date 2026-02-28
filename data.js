const CARDS = [
  // === Original Top 50 (All) ===
  { name: "Soul-Guide Lantern", pct: 68, copies: 1.9, type: "Artifact" },
  { name: "Spell Snare", pct: 43, copies: 2.0, type: "Instant" },
  { name: "Disdainful Stroke", pct: 40, copies: 1.4, type: "Instant" },
  { name: "Annul", pct: 38, copies: 1.8, type: "Instant" },
  { name: "Quantum Riddler", pct: 34, copies: 2.6, type: "Creature" },
  { name: "Sear", pct: 31, copies: 2.2, type: "Instant" },
  { name: "Pyroclasm", pct: 28, copies: 1.9, type: "Sorcery" },
  { name: "Spider-Sense", pct: 27, copies: 2.1, type: "Enchantment" },
  { name: "Stock Up", pct: 25, copies: 3.3, type: "Sorcery" },
  { name: "Requiting Hex", pct: 25, copies: 3.5, type: "Sorcery" },
  { name: "Spell Pierce", pct: 25, copies: 1.5, type: "Instant" },
  { name: "Bitter Triumph", pct: 25, copies: 2.5, type: "Sorcery" },
  { name: "Wan Shi Tong, Librarian", pct: 24, copies: 1.5, type: "Creature" },
  { name: "Torpor Orb", pct: 23, copies: 2.0, type: "Artifact" },
  { name: "Duress", pct: 23, copies: 2.8, type: "Sorcery" },
  { name: "Llanowar Elves", pct: 23, copies: 4.0, type: "Creature" },
  { name: "Burst Lightning", pct: 23, copies: 3.6, type: "Instant" },
  { name: "Badgermole Cub", pct: 21, copies: 4.0, type: "Creature" },
  { name: "Negate", pct: 21, copies: 1.2, type: "Instant" },
  { name: "Tishana's Tidebinder", pct: 20, copies: 2.5, type: "Creature" },
  { name: "Wistfulness", pct: 19, copies: 2.6, type: "Creature" },
  { name: "Winternight Stories", pct: 19, copies: 2.9, type: "Enchantment" },
  { name: "Shoot the Sheriff", pct: 19, copies: 2.0, type: "Instant" },
  { name: "Ral, Crackling Wit", pct: 19, copies: 1.9, type: "Planeswalker" },
  { name: "Deceit", pct: 19, copies: 3.9, type: "Creature" },
  { name: "Rest in Peace", pct: 18, copies: 2.2, type: "Enchantment" },
  { name: "Flashfreeze", pct: 18, copies: 1.4, type: "Instant" },
  { name: "Get Lost", pct: 17, copies: 2.8, type: "Instant" },
  { name: "Three Steps Ahead", pct: 16, copies: 1.8, type: "Instant" },
  { name: "Boomerang Basics", pct: 16, copies: 3.6, type: "Sorcery" },
  { name: "Abandon Attachments", pct: 16, copies: 3.4, type: "Instant" },
  { name: "Stormchaser's Talent", pct: 15, copies: 3.6, type: "Enchantment" },
  { name: "Superior Spider-Man", pct: 15, copies: 3.5, type: "Creature" },
  { name: "Intimidation Tactics", pct: 15, copies: 2.2, type: "Enchantment" },
  { name: "Into the Flood Maw", pct: 15, copies: 1.5, type: "Sorcery" },
  { name: "Keen-Eyed Curator", pct: 14, copies: 2.0, type: "Creature" },
  { name: "Seam Rip", pct: 14, copies: 3.1, type: "Sorcery" },
  { name: "Surrak, Elusive Hunter", pct: 14, copies: 1.7, type: "Creature" },
  { name: "Voice of Victory", pct: 14, copies: 3.2, type: "Enchantment" },
  { name: "Bounce Off", pct: 14, copies: 2.0, type: "Instant" },
  { name: "Mightform Harmonizer", pct: 14, copies: 3.4, type: "Creature" },
  { name: "The Unagi of Kyoshi Island", pct: 14, copies: 1.2, type: "Creature" },
  { name: "Monument to Endurance", pct: 14, copies: 4.0, type: "Artifact" },
  { name: "Icetill Explorer", pct: 14, copies: 3.7, type: "Creature" },
  { name: "Enduring Curiosity", pct: 13, copies: 2.7, type: "Enchantment" },
  { name: "Ghost Vacuum", pct: 13, copies: 1.4, type: "Artifact" },
  { name: "Earthbender Ascension", pct: 13, copies: 3.7, type: "Enchantment" },
  { name: "Meltstrider's Resolve", pct: 12, copies: 2.9, type: "Instant" },
  { name: "Deadly Cover-Up", pct: 12, copies: 2.5, type: "Sorcery" },
  { name: "Essence Scatter", pct: 12, copies: 1.3, type: "Instant" },

  // === Additional Spells ===
  { name: "Broadside Barrage", pct: 12, copies: 1.1, type: "Instant" },
  { name: "Abrade", pct: 12, copies: 1.4, type: "Instant" },
  { name: "Accumulate Wisdom", pct: 11, copies: 4.0, type: "Sorcery" },
  { name: "Firebending Lesson", pct: 11, copies: 4.0, type: "Sorcery" },
  { name: "Combustion Technique", pct: 11, copies: 4.0, type: "Instant" },
  { name: "Artist's Talent", pct: 11, copies: 4.0, type: "Enchantment" },
  { name: "It'll Quench Ya!", pct: 11, copies: 2.2, type: "Instant" },
  { name: "Strategic Betrayal", pct: 11, copies: 1.6, type: "Sorcery" },
  { name: "Consult the Star Charts", pct: 11, copies: 3.7, type: "Sorcery" },
  { name: "Sapling Nursery", pct: 10, copies: 3.9, type: "Enchantment" },
  { name: "Archdruid's Charm", pct: 10, copies: 1.6, type: "Instant" },
  { name: "Origin of Metalbending", pct: 10, copies: 2.3, type: "Enchantment" },
  { name: "Nature's Rhythm", pct: 9, copies: 3.9, type: "Enchantment" },
  { name: "No More Lies", pct: 9, copies: 2.9, type: "Instant" },
  { name: "Sleight of Hand", pct: 9, copies: 4.0, type: "Sorcery" },

  // === Additional Creatures ===
  { name: "Harvester of Misery", pct: 12, copies: 2.1, type: "Creature" },
  { name: "Gran-Gran", pct: 11, copies: 4.0, type: "Creature" },
  { name: "Floodpits Drowner", pct: 11, copies: 3.8, type: "Creature" },
  { name: "Formidable Speaker", pct: 11, copies: 2.5, type: "Creature" },
  { name: "Sunderflock", pct: 11, copies: 3.7, type: "Creature" },
  { name: "Sazh's Chocobo", pct: 10, copies: 3.9, type: "Creature" },
  { name: "Marang River Regent", pct: 10, copies: 1.4, type: "Creature" },
  { name: "Ouroboroid", pct: 10, copies: 2.7, type: "Creature" },
  { name: "Spider Manifestation", pct: 10, copies: 3.8, type: "Creature" },
  { name: "Gene Pollinator", pct: 9, copies: 3.9, type: "Creature" },
  { name: "Mossborn Hydra", pct: 9, copies: 3.1, type: "Creature" },
  { name: "Craterhoof Behemoth", pct: 9, copies: 1.0, type: "Creature" },
  { name: "Doomsday Excruciator", pct: 9, copies: 2.9, type: "Creature" },
  { name: "Mockingbird", pct: 9, copies: 2.6, type: "Creature" },
  { name: "Clarion Conqueror", pct: 9, copies: 2.8, type: "Creature" },
  { name: "Sunspine Lynx", pct: 8, copies: 2.8, type: "Creature" },
  { name: "Nova Hellkite", pct: 8, copies: 3.9, type: "Creature" },
  { name: "Aang, Swift Savior", pct: 8, copies: 3.7, type: "Creature" },
  { name: "Fecund Greenshell", pct: 8, copies: 2.5, type: "Creature" },
  { name: "Deep-Cavern Bat", pct: 7, copies: 3.6, type: "Creature" },
  { name: "Cecil, Dark Knight", pct: 7, copies: 2.1, type: "Creature" },
  { name: "Aven Interrupter", pct: 7, copies: 3.1, type: "Creature" },
  { name: "Vibrance", pct: 7, copies: 3.6, type: "Creature" },
  { name: "Beza, the Bounding Spring", pct: 7, copies: 1.6, type: "Creature" },
  { name: "Ashling, Rekindled", pct: 6, copies: 3.7, type: "Creature" },
  { name: "Glen Elendra Guardian", pct: 6, copies: 1.7, type: "Creature" },
  { name: "Doorkeeper Thrull", pct: 6, copies: 2.2, type: "Creature" },
  { name: "Spyglass Siren", pct: 6, copies: 3.6, type: "Creature" },
  { name: "Overlord of the Balemurk", pct: 6, copies: 2.9, type: "Creature" },
  { name: "Slickshot Show-Off", pct: 5, copies: 4.0, type: "Creature" },
  { name: "Hired Claw", pct: 5, copies: 4.0, type: "Creature" },
  { name: "Hearth Elemental", pct: 5, copies: 3.9, type: "Creature" },
  { name: "Roaming Throne", pct: 5, copies: 3.8, type: "Creature" },
  { name: "Flamebraider", pct: 5, copies: 3.8, type: "Creature" },
  { name: "Eddymurk Crab", pct: 5, copies: 3.9, type: "Creature" },

  // === Top Lands ===
  { name: "Multiversal Passage", pct: 55, copies: 2.5, type: "Land" },
  { name: "Steam Vents", pct: 35, copies: 3.6, type: "Land" },
  { name: "Starting Town", pct: 30, copies: 3.1, type: "Land" },
  { name: "Spirebluff Canal", pct: 26, copies: 3.6, type: "Land" },
  { name: "Riverpyre Verge", pct: 26, copies: 3.7, type: "Land" },
  { name: "Watery Grave", pct: 23, copies: 3.9, type: "Land" },
  { name: "Gloomlake Verge", pct: 22, copies: 3.7, type: "Land" },
  { name: "Breeding Pool", pct: 21, copies: 3.4, type: "Land" },
  { name: "Restless Reef", pct: 20, copies: 2.9, type: "Land" },
  { name: "Cavern of Souls", pct: 17, copies: 2.8, type: "Land" },
  { name: "Ba Sing Se", pct: 17, copies: 2.3, type: "Land" },
  { name: "Willowrush Verge", pct: 16, copies: 2.5, type: "Land" },
  { name: "Hallowed Fountain", pct: 15, copies: 3.4, type: "Land" },
  { name: "Fabled Passage", pct: 14, copies: 3.9, type: "Land" },
  { name: "Floodfarm Verge", pct: 14, copies: 3.4, type: "Land" },
  { name: "Escape Tunnel", pct: 14, copies: 3.2, type: "Land" },
  { name: "Undercity Sewers", pct: 13, copies: 1.5, type: "Land" },
  { name: "Soulstone Sanctuary", pct: 11, copies: 2.5, type: "Land" },
  { name: "Botanical Sanctum", pct: 9, copies: 3.6, type: "Land" },
  { name: "Sacred Foundry", pct: 8, copies: 3.3, type: "Land" },
];

// Sort by pct descending
CARDS.sort((a, b) => b.pct - a.pct);

const DECKS = [
  {
    name: "Izzet Lessons",
    meta: 11.2,
    count: 556,
    keyCards: ["Gran-Gran", "Monument to Endurance", "Artist's Talent", "Stock Up", "Quantum Riddler", "Accumulate Wisdom", "Firebending Lesson"]
  },
  {
    name: "Dimir Excruciator",
    meta: 8.8,
    count: 440,
    keyCards: ["Deceit", "Superior Spider-Man", "Requiting Hex", "Bitter Triumph", "Duress", "Doomsday Excruciator", "Floodpits Drowner"]
  },
  {
    name: "Mono-Green Landfall",
    meta: 8.4,
    count: 418,
    keyCards: ["Badgermole Cub", "Icetill Explorer", "Earthbender Ascension", "Llanowar Elves", "Mossborn Hydra", "Craterhoof Behemoth"]
  },
  {
    name: "Dimir Midrange",
    meta: 7.2,
    count: 358,
    keyCards: ["Deep-Cavern Bat", "Floodpits Drowner", "Bitter Triumph", "Deceit", "Enduring Curiosity", "Harvester of Misery"]
  },
  {
    name: "Izzet Spellementals",
    meta: 5.0,
    count: 249,
    keyCards: ["Sunderflock", "Eddymurk Crab", "Sleight of Hand", "Quantum Riddler", "Burst Lightning", "Hearth Elemental"]
  },
  {
    name: "Izzet Prowess",
    meta: 4.6,
    count: 226,
    keyCards: ["Stormchaser's Talent", "Stock Up", "Burst Lightning", "Slickshot Show-Off", "Combustion Technique"]
  },
  {
    name: "Mono-Red Aggro",
    meta: 3.7,
    count: 186,
    keyCards: ["Nova Hellkite", "Sear", "Burst Lightning", "Sunspine Lynx", "Ashling, Rekindled"]
  },
  {
    name: "Azorius Tempo",
    meta: 3.7,
    count: 183,
    keyCards: ["Voice of Victory", "Aven Interrupter", "Aang, Swift Savior", "Spell Snare", "No More Lies"]
  },
  {
    name: "Simic Ouroboroid",
    meta: 3.6,
    count: 178,
    keyCards: ["Ouroboroid", "Badgermole Cub", "Quantum Riddler", "Llanowar Elves", "Gene Pollinator"]
  },
  {
    name: "Boros Dragons",
    meta: 3.5,
    count: 173,
    keyCards: ["Voice of Victory", "Clarion Conqueror", "Nova Hellkite", "Sear", "Sacred Foundry"]
  },
  {
    name: "Jeskai Control",
    meta: 3.4,
    count: 171,
    keyCards: ["Stock Up", "Consult the Star Charts", "Get Lost", "Spell Snare", "Pyroclasm", "Three Steps Ahead"]
  },
  {
    name: "Temur Harmonizer Combo",
    meta: 3.0,
    count: 150,
    keyCards: ["Stock Up", "Consult the Star Charts", "Mightform Harmonizer", "Quantum Riddler", "Archdruid's Charm"]
  },
  {
    name: "Bant Airbending Combo",
    meta: 2.4,
    count: 119,
    keyCards: ["Badgermole Cub", "Aang, Swift Savior", "Llanowar Elves", "The Unagi of Kyoshi Island"]
  },
  {
    name: "Rakdos Monument",
    meta: 2.2,
    count: 107,
    keyCards: ["Monument to Endurance", "Bitter Triumph", "Sazh's Chocobo", "Cecil, Dark Knight"]
  },
  {
    name: "Sultai Reanimator",
    meta: 2.0,
    count: 98,
    keyCards: ["Wistfulness", "Formidable Speaker", "Superior Spider-Man", "Bitter Triumph", "Overlord of the Balemurk"]
  },
  {
    name: "Izzet Elementals",
    meta: 1.8,
    count: 91,
    keyCards: ["Sunderflock", "Hearth Elemental", "Flamebraider", "Quantum Riddler"]
  },
  {
    name: "4c Ouroboroid",
    meta: 1.7,
    count: 86,
    keyCards: ["Ouroboroid", "Quantum Riddler", "Llanowar Elves", "Badgermole Cub"]
  },
  {
    name: "Gruul Landfall",
    meta: 1.4,
    count: 71,
    keyCards: ["Badgermole Cub", "Icetill Explorer", "Llanowar Elves", "Sear"]
  },
  {
    name: "Azorius Control",
    meta: 1.4,
    count: 70,
    keyCards: ["Get Lost", "No More Lies", "Spell Snare", "Three Steps Ahead", "Beza, the Bounding Spring"]
  },
  {
    name: "Dimir Control",
    meta: 1.1,
    count: 54,
    keyCards: ["Deadly Cover-Up", "Bitter Triumph", "Duress", "Three Steps Ahead"]
  },
  {
    name: "Selesnya Landfall",
    meta: 0.8,
    count: 41,
    keyCards: ["Badgermole Cub", "Llanowar Elves", "Sapling Nursery", "Nature's Rhythm"]
  },
  {
    name: "Boros Aggro",
    meta: 0.7,
    count: 33,
    keyCards: ["Voice of Victory", "Clarion Conqueror", "Sear"]
  }
];

// Metagame history snapshots (monthly) for the time slider
const METAGAME_HISTORY = [
  {
    label: "Sep 2025",
    date: "2025-09",
    decks: [
      { name: "Dimir Midrange", meta: 14.5 },
      { name: "Mono-Red Aggro", meta: 10.2 },
      { name: "Azorius Tempo", meta: 8.1 },
      { name: "Boros Dragons", meta: 6.8 },
      { name: "Jeskai Control", meta: 6.3 },
      { name: "Dimir Excruciator", meta: 5.1 },
      { name: "Gruul Landfall", meta: 4.9 },
      { name: "Sultai Reanimator", meta: 4.4 },
      { name: "Mono-Green Landfall", meta: 3.8 },
      { name: "Dimir Control", meta: 3.5 },
      { name: "Azorius Control", meta: 3.2 },
      { name: "Rakdos Monument", meta: 2.9 },
      { name: "Other", meta: 26.3 }
    ]
  },
  {
    label: "Oct 2025",
    date: "2025-10",
    decks: [
      { name: "Dimir Midrange", meta: 12.8 },
      { name: "Mono-Red Aggro", meta: 8.5 },
      { name: "Dimir Excruciator", meta: 7.6 },
      { name: "Azorius Tempo", meta: 6.9 },
      { name: "Mono-Green Landfall", meta: 6.1 },
      { name: "Boros Dragons", meta: 5.4 },
      { name: "Jeskai Control", meta: 5.0 },
      { name: "Izzet Prowess", meta: 4.2 },
      { name: "Gruul Landfall", meta: 3.6 },
      { name: "Sultai Reanimator", meta: 3.3 },
      { name: "Rakdos Monument", meta: 2.8 },
      { name: "Dimir Control", meta: 2.4 },
      { name: "Other", meta: 31.4 }
    ]
  },
  {
    label: "Nov 2025",
    date: "2025-11",
    decks: [
      { name: "Dimir Excruciator", meta: 10.4 },
      { name: "Dimir Midrange", meta: 9.7 },
      { name: "Mono-Green Landfall", meta: 8.0 },
      { name: "Izzet Prowess", meta: 6.1 },
      { name: "Azorius Tempo", meta: 5.5 },
      { name: "Mono-Red Aggro", meta: 5.2 },
      { name: "Boros Dragons", meta: 4.6 },
      { name: "Jeskai Control", meta: 4.3 },
      { name: "Simic Ouroboroid", meta: 3.1 },
      { name: "Izzet Spellementals", meta: 2.8 },
      { name: "Sultai Reanimator", meta: 2.6 },
      { name: "Rakdos Monument", meta: 2.3 },
      { name: "Other", meta: 35.4 }
    ]
  },
  {
    label: "Dec 2025",
    date: "2025-12",
    decks: [
      { name: "Izzet Lessons", meta: 7.4 },
      { name: "Dimir Excruciator", meta: 9.5 },
      { name: "Mono-Green Landfall", meta: 8.8 },
      { name: "Dimir Midrange", meta: 8.2 },
      { name: "Izzet Prowess", meta: 5.5 },
      { name: "Izzet Spellementals", meta: 4.8 },
      { name: "Azorius Tempo", meta: 4.1 },
      { name: "Mono-Red Aggro", meta: 3.9 },
      { name: "Simic Ouroboroid", meta: 3.7 },
      { name: "Boros Dragons", meta: 3.5 },
      { name: "Jeskai Control", meta: 3.4 },
      { name: "Temur Harmonizer Combo", meta: 2.8 },
      { name: "Other", meta: 34.4 }
    ]
  },
  {
    label: "Jan 2026",
    date: "2026-01",
    decks: [
      { name: "Izzet Lessons", meta: 10.1 },
      { name: "Dimir Excruciator", meta: 9.2 },
      { name: "Mono-Green Landfall", meta: 8.6 },
      { name: "Dimir Midrange", meta: 7.5 },
      { name: "Izzet Spellementals", meta: 5.3 },
      { name: "Izzet Prowess", meta: 4.8 },
      { name: "Azorius Tempo", meta: 3.9 },
      { name: "Mono-Red Aggro", meta: 3.7 },
      { name: "Simic Ouroboroid", meta: 3.6 },
      { name: "Boros Dragons", meta: 3.5 },
      { name: "Jeskai Control", meta: 3.4 },
      { name: "Temur Harmonizer Combo", meta: 3.1 },
      { name: "Other", meta: 33.3 }
    ]
  },
  {
    label: "Feb 2026",
    date: "2026-02",
    decks: [
      { name: "Izzet Lessons", meta: 11.2 },
      { name: "Dimir Excruciator", meta: 8.8 },
      { name: "Mono-Green Landfall", meta: 8.4 },
      { name: "Dimir Midrange", meta: 7.2 },
      { name: "Izzet Spellementals", meta: 5.0 },
      { name: "Izzet Prowess", meta: 4.6 },
      { name: "Mono-Red Aggro", meta: 3.7 },
      { name: "Azorius Tempo", meta: 3.7 },
      { name: "Simic Ouroboroid", meta: 3.6 },
      { name: "Boros Dragons", meta: 3.5 },
      { name: "Jeskai Control", meta: 3.4 },
      { name: "Temur Harmonizer Combo", meta: 3.0 },
      { name: "Other", meta: 33.9 }
    ]
  }
];

// Build reverse map: card name -> deck names
const CARD_TO_DECKS = {};
DECKS.forEach(deck => {
  deck.keyCards.forEach(cardName => {
    if (!CARD_TO_DECKS[cardName]) CARD_TO_DECKS[cardName] = [];
    CARD_TO_DECKS[cardName].push(deck.name);
  });
});
