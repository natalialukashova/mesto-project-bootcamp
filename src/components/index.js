import "../pages/index.css";
import { enableValidation, cleaningErrorsOfPopup } from "./validation.js";
import { createCard } from "./card.js";
import { initialCards } from "./data.js";
import { openPopup, closePopup } from './modal.js'

const editPopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_card");
const editButton = document.querySelector(".profile__edit-btn");
const addNewCardButton = document.querySelector(".profile__button");
const closeButtonList = document.querySelectorAll(".popup__close-icon");
const popupInputs = document.querySelectorAll(".popup__input");
const editPopupForm = editPopup.querySelector(".popup__form");
const saveButton = editPopup.querySelector(".popup__button");
const newCardForm = newCardPopup.querySelector(".form__new_place");
const blockForCards = document.querySelector(".cards");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".input__title");
const inputDescription = document.querySelector(".input__description");
const photoPopup = document.querySelector(".popup__type_photo-popup");
const photoPopupImage = document.querySelector(".photo-popup__image");
const photoPopupFigcaption = document.querySelector(".popup__photo-popup_figcaption");
const nameOfNewCard = newCardForm.querySelector(".input__type_name");
const linkOfNewCard = newCardForm.querySelector(".input__type_link");

export const openPhotoPopup = ({ name, link }) => {
  photoPopupImage.src = link;
  photoPopupImage.alt = name;
  photoPopupFigcaption.textContent = name;
  openPopup(photoPopup);
};

export const openEditPopup = () => {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  cleaningErrorsOfPopup(editPopup);
  openPopup(editPopup);
};

export const openNewCardPopup = () => {
  newCardForm.reset();
  cleaningErrorsOfPopup(newCardPopup);
  openPopup(newCardPopup);
};

export const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileTitle.textContent = inputTitle.value;
  profileSubtitle.textContent = inputDescription.value;

  closePopup(editPopup);
};

export const handlePlaceSubmit = (evt) => {
  evt.preventDefault();
  const card = { name: nameOfNewCard.value, link: linkOfNewCard.value };

  blockForCards.prepend(createCard(card));

  closePopup(newCardPopup);
};

// функция закрытия попапа клавишей Esc
export const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

// функция закрытия попапа по клику на оверлей
export const closePopupOverlay = (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
};

editButton.addEventListener("click", openEditPopup);

addNewCardButton.addEventListener("click", openNewCardPopup);

// навешиваем на кнопку функцию закрытия попапа
closeButtonList.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

editPopupForm.addEventListener("submit", handleEditProfileFormSubmit);

newCardForm.addEventListener("submit", handlePlaceSubmit);

export const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__button",
  errorSelector: ".error",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

enableValidation(configValidation);

// отображаем стартовые карточки на странице
initialCards.reverse().forEach((item) => {
  blockForCards.prepend(createCard(item));
});
