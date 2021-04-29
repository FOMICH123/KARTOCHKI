// let firstCard, secondCard;
// let cards = document.querySelectorAll(".card");
// cards = [...cards];
// let locked = false;
// function flipCard(event) {
//   if (locked) {
//     return;
//   }

//   event.currentTarget.classList.add("flip");
//   if (!firstCard) {
//     firstCard = event.currentTarget;
//   } else {
//     secondCard = event.currentTarget;
//     if (firstCard.dataset.imageid == secondCard.dataset.imageid) {
//       firstCard.removeEventListener("click", flipCard);
//       secondCard.removeEventListener("click", flipCard);
//       firstCard = false;
//       secondCard = false;
//     } else {
//       locked = true;
//       setTimeout(() => {
//         firstCard.classList.remove("flip");
//         secondCard.classList.remove("flip");
//         firstCard = false;
//         secondCard = false;
//         locked = false;
//       }, 1000);
//     }
//   }
// }
// cards.forEach((card) => card.addEventListener("click", flipCard));

// function shuffle() {
//   for (let i = 0; i < 100; i++) {
//     let ind1 = random(0, 12);
//     let ind2 = random(0, 12);

//     let temp = cards[ind1];
//     cards[ind1] = cards[ind2];
//     cards[ind2] = temp;
//   }
// }

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// let game = document.querySelector(".game");
// game.innerHTML = "";
// shuffle();
// console.log(cards);
// game.append(...cards);
