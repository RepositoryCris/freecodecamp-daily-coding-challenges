/**
 * cardAssignment.js
 * Handles random card distribution for a lottery/bingo-style betting game.
 * Designed as a pure utility module — no side effects, safe to use in React.
 */

// ---------------------------------------------------------------------------
// Shuffle
// ---------------------------------------------------------------------------

const shuffleInPlace = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffle = (array) => shuffleInPlace([...array]);

// ---------------------------------------------------------------------------
// Core Logic
// ---------------------------------------------------------------------------

/**
 * Assigns one unique card to each player.
 * Players can be fewer than cards — leftover cards are simply not dealt.
 * Throws if there are more players than cards.
 *
 * @param {string[]} players
 * @param {number[]} cards
 * @returns {{ name: string, card: number }[]}
 */
const assignCards = (players, cards) => {
  if (players.length > cards.length) {
    throw new Error(
      `assignCards: not enough cards (${cards.length}) for all players (${players.length}).`,
    );
  }

  const shuffledPlayers = shuffle(players);
  const shuffledCards = shuffle(cards);

  // If players = 10 and cards = 24, this naturally deals 10 cards and stops.
  return shuffledPlayers.map((name, index) => ({
    name,
    card: shuffledCards[index],
  }));
};

// ---------------------------------------------------------------------------
// Sorting Helpers
// ---------------------------------------------------------------------------

const sortByCardAsc = (assignments) =>
  [...assignments].sort((a, b) => a.card - b.card);

const sortByCardDesc = (assignments) =>
  [...assignments].sort((a, b) => b.card - a.card);

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

const formatAssignments = (assignments) =>
  assignments.map(({ card, name }) => `${card}: ${name}`).join("\n");

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const playersList = [
  "Arturo",
  "Martha",
  "Ignacio",
  "Carlos",
  "Karina",
  "Judith",
  "Cristian",
  "Mario",
  "Renelia",
  "Sonia",
  "Yael",
  "Gabriel",
];

const cards = Array.from({ length: 24 }, (_, i) => i + 1);

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const assignments = assignCards(playersList, cards);
const sorted = sortByCardAsc(assignments);

console.log(formatAssignments(sorted));

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  shuffle,
  shuffleInPlace,
  assignCards,
  sortByCardAsc,
  sortByCardDesc,
  formatAssignments,
};
