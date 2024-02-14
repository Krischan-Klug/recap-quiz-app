//bookmark
const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
//card
const cardAnswerButton = document.querySelector(".card__button-answer");
const cardAnswer = document.querySelector(".card__answer");

cardAnswerButton.addEventListener("click", () => {
  console.log(cardAnswer);

  if (cardAnswer.style.display === "block") {
    cardAnswer.style.display = "none";
    cardAnswerButton.innerHTML = "show answer";
  } else {
    cardAnswer.style.display = "block";
    cardAnswerButton.innerHTML = "hide answer";
  }
});
