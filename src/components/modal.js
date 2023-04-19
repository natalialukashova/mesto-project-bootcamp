import { configValidation } from "./index";

const editPopup = document.querySelector(".popup__edit");
const newCardPopup = document.querySelector(".popup__card");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".input__title");
const inputDescription = document.querySelector(".input__description");
const photoPopup = document.querySelector(".photo-popup");
const photoPopupImage = document.querySelector(".photo-popup__image");
const photoPopupFigcaption = document.querySelector(".photo-popup__figcaption");
const newCardForm = newCardPopup.querySelector(".form__new_place");
const nameOfNewCard = newCardForm.querySelector(".input__type_name");
const linkOfNewCard = newCardForm.querySelector(".input__type_link");
const blockForCards = document.querySelector(".cards");

export const openPhotoPopup = ({ name, link }) => {
   photoPopupImage.src = link;
   photoPopupImage.alt = name;
   photoPopupFigcaption.textContent = name;
   openPopup(photoPopup);
 };

 // универсальная функция открытия попапов
 export const openPopup = (popup) => {
   popup.classList.add("popup_opened");
   document.addEventListener("keydown", closePopupEsc);
   popup.addEventListener('click', closePopupOverlay)
 };
 
 // функция закрытия попапа
 export const closePopup = (popup) => {
   popup.classList.remove("popup_opened");
   document.removeEventListener("keydown", closePopupEsc);
   popup.removeEventListener("click", closePopupOverlay);
 };
 
 // функция закрытия попапа клавишей Esc
 export const closePopupEsc = (evt) => {
   if (evt.key === 'Escape') {
     const openedPopup = document.querySelector(".popup_opened");
     closePopup(openedPopup);
   }
 }
 
 // функция закрытия попапа по клику на оверлей
 export const closePopupOverlay = (evt) => {
   if (evt.currentTarget === evt.target) {
     closePopup(evt.currentTarget);
   }
 }

 export const cleaningErrorsOfPopup = (popup) => {
   const popupForm = popup.querySelector(configValidation.formSelector);
   const popupInputsList = Array.from(
     popupForm.querySelectorAll(configValidation.inputSelector)
   );
   popupInputsList.forEach((inputElement) => {
     inputElement.classList.remove(configValidation.inputErrorClass);
   });
   const errorElementsList = Array.from(
     popupForm.querySelectorAll(configValidation.errorSelector)
   );
   errorElementsList.forEach((errorElement) => {
     errorElement.classList.remove(configValidation.errorClass);
     errorElement.textContent = "";
   });
   const buttonElement = popup.querySelector(configValidation.buttonSelector);
   buttonElement.disabled = true;
   buttonElement.classList.add(configValidation.inactiveButtonClass);
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