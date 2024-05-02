function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__text");
  // set the path to the image to the link field of the object
  cardImageEl.src = initialCards.link;
  // set the image alt text to the name field of the object
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}
