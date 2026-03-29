const getRandom = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return random;
};

const randomCard = (players, cards) => {
  const selectedPlayers = [];
  const selectedCards = [];

  function Person(player, card) {
    this.player = player;
    this.card = card;
  }

  let peopleObject = [];
  let removedCard = "";
  let removedPlayer = "";

  const quantityOfRolls = players.length;
  // index manages the quantity of rolls that the program will give
  for (let i = 0; i < quantityOfRolls; i++) {
    //console.log(i);

    //console.log(cards);
    //console.log(selectedCards);
    const randomCard = getRandom(cards);
    removedCard = Number(cards.splice(randomCard, 1));
    selectedCards.push(removedCard);

    //console.log(players);
    //console.log(selectedPlayers);
    const randomPlayer = getRandom(players);
    removedPlayer = String(players.splice(randomPlayer, 1));

    selectedPlayers.push(removedPlayer);

    const object = new Person(selectedPlayers[i], selectedCards[i]);

    peopleObject.push(object);

    //console.log(`Player ${game.player} will play with #${game.card} card`);
    console.log(
      `Player ${selectedPlayers[i]} will play with #${selectedCards[i]} card`,
    );
  }

  //console.log(players);
  console.log(selectedPlayers);
  //console.log(cards);
  console.log(selectedCards);

  peopleObject.map((element) => {
    console.log(`${element.player} plays ${element.card}`);
  });

  return "game";
};

const players = [
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

let test = randomCard(players, cards);

console.log(test);
/*
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
console.log(getRandom(cards));
*/
