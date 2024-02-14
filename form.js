const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  function createNewCard() {
    //get data
    let questionText = data.question;
    let answerText = data.answer;
    let tagText = data.tag;

    //create objects
    const articleElement = document.createElement("article");
    const questionElement = document.createElement("h2");
    const buttonElement = document.createElement("button");
  }
  createNewCard;
  console.log(data);

  console.log(questionText);
});
