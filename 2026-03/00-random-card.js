const getRandom = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return random;
};

class Player {
  constructor(name, card) {
    this.name = name;
    this.card = card;
  }
}

const assignRandomCards = (players, cards) => {
  const copyPlayers = [...players];
  const copyCards = [...cards];
  const selectedPlayers = [];
  const selectedCards = [];
  let currentPlayers = [];
  let removedCard = "";
  let removedPlayer = "";

  const iterations = players.length;

  for (let i = 0; i < iterations; i++) {
    const randomCard = getRandom(copyCards);
    removedCard = copyCards.splice(randomCard, 1)[0];
    selectedCards.push(removedCard);

    const randomPlayer = getRandom(copyPlayers);
    removedPlayer = copyPlayers.splice(randomPlayer, 1)[0];
    selectedPlayers.push(removedPlayer);

    const newPlayer = new Player(selectedPlayers[i], selectedCards[i]);

    currentPlayers.push(newPlayer);
  }

  return currentPlayers;
};

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

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const assign = assignRandomCards(playersList, cards);

const sortedByCardAsc = [...assign].sort((a, b) => a.card - b.card);

console.log(sortedByCardAsc.map((p) => `${p.card}: ${p.name}`).join("\n"));
//console.table(sortedByCardAsc, ["name", "card"]);
//assign.forEach((player) => console.log(player));
//assign.map((p) => console.log(`card: ${p.card} - ${p.name}`));
//console.table(assign);
