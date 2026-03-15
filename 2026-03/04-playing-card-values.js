function cardValues(cards) {

  const values = []
    for (let i = 0 ; i < cards.length ; i++){
      if(cards[i].slice(0,1)==="A"){
        values.push(1)
        continue
      }
      if(cards[i].slice(0,1)==="J"||
      cards[i].slice(0,1)==="Q"||
      cards[i].slice(0,1)==="K"||
      cards[i].slice(0,2)==="10"){
        values.push(10)
        continue
      }
      values.push(Number(cards[i].slice(0,1)))
    }
  return values;
}

console.log(cardValues(["3H", "4D", "5S"]))
console.log(cardValues(["AS", "10S", "10H", "6D", "7D"]))
console.log(cardValues(["8D", "QS", "2H", "JC", "9C"]))
console.log(cardValues(["AS", "KS"]))
console.log(cardValues(["10H", "JH", "QH", "KH", "AH"]))

/*Playing Card Values
Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:

An Ace ("A") has a value of 1.
Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.
Suits:

Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").
Card Format:

Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.
*/