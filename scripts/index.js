const initialCards = [
  {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
},
{
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
},
{
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
},
{
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
},
{
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
},
{
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
},

];

// elements
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubheader = document.querySelector(".profile__subheader");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubheaderInput = document.querySelector("#profile-subheader-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileModalBtn = document.querySelector("#modal-profile-button");
const profileModalBtnClose = document.querySelector("#profile-edit-modal");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list")

// functions
function closePopup(){
  profileModalBtnClose.classList.remove("modal_opened");
}

function getCardElement(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__text");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

// event handlers
function handleProfileEditSubmit(e){
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubheader.textContent = profileSubheaderInput.value;
  console.log("TAlly Man");
  closePopup();
}

// event listeners
profileEditBtn.addEventListener("click", ()=>{
  profileTitleInput.value = profileTitle.textContent;
  profileSubheaderInput.value = profileSubheader.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileModalBtn.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) =>{
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
})