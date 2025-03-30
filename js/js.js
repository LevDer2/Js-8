const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = "";
for (let i = 0; i < friends.length; i += 1) {
    string += friends[i];
    if (i < friends.length -1) {
        string += (", ")
    }
};

console.log(string);

const easy = friends.join(", ")
console.log(easy);

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  console.log(cards);
  const cardToRemove = 'Карточка-3';
  const index = cards.indexOf(cardToRemove);
  cards.splice(index, 1)
console.log(cards);
const cardToInsert = 'Карточка-6';
cards.push("Карточка-6");
console.log(cards);
const cardToUpdate = 'Карточка-4';
const index2 = cards.indexOf(cardToUpdate);
cards.splice(index2, 1, 'Карточка-3', 'Карточка-4');
console.log(cards);