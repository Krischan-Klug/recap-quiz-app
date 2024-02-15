const form = document.querySelector(".form");
const articleList = document.querySelector(".card-list");

//Debug
//console.log(form);
//console.log(articleList);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Get data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  function createNewCard() {
    let questionText = data.question;
    let answerText = data.answer;
    let tagText = data.tag.split(",");

    //Debug
    //console.log(tagText);

    //create objects and init classes
    const cardListElement = document.createElement("li");
    cardListElement.classList.add("card-list__item");
    const articleElement = document.createElement("article");
    articleElement.classList.add("card");
    const questionElement = document.createElement("h2");
    questionElement.classList.add("card__question");
    questionElement.textContent = questionText;
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = "show answer";
    buttonElement.classList.add("card__button-answer");
    const answerElement = document.createElement("p");
    answerElement.classList.add("card__answer");
    answerElement.textContent = answerText;
    const tagListElement = document.createElement("ul");
    tagListElement.classList.add("card__tag-list");
    const Tag1Element = document.createElement("li");
    Tag1Element.classList.add("card__tag-list-item");
    Tag1Element.textContent = "#" + tagText[0];
    const Tag2Element = document.createElement("li");
    Tag2Element.classList.add("card__tag-list-item");
    Tag2Element.textContent = "#" + tagText[1];
    const Tag3Element = document.createElement("li");
    Tag3Element.classList.add("card__tag-list-item");
    Tag3Element.textContent = "#" + tagText[2];
    const cardContainerElement = document.createElement("div");
    cardContainerElement.classList.add("card__button-bookmark");
    const cardButtonElement = document.createElement("button");
    cardButtonElement.classList.add("bookmark");
    cardButtonElement.setAttribute("aria-label", "bookmark");

    //fix icon
    cardButtonElement.innerHTML = `
    <svg
        class="bookmark__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
      >
        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
`;

    //place elements
    articleList.appendChild(cardListElement);
    cardListElement.appendChild(articleElement);
    articleElement.appendChild(questionElement);
    articleElement.appendChild(buttonElement);
    articleElement.appendChild(answerElement);
    articleElement.appendChild(tagListElement);
    tagListElement.appendChild(Tag1Element);
    tagListElement.appendChild(Tag2Element);
    tagListElement.appendChild(Tag3Element);
    articleElement.appendChild(cardContainerElement);
    cardContainerElement.appendChild(cardButtonElement);

    console.log("create new card");
  }

  //Create card and reset
  createNewCard();
  event.target.reset();
  event.target.elements.question.focus();

  //bookmark toogle
  const bookmarkButton = document.querySelector(".bookmark");

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });
  //card answer toggle
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
});
