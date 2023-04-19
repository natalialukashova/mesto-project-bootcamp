import { enableValidation } from "./validation";
import {
  closePopup,
  openEditPopup,
  openNewCardPopup,
  handleEditProfileFormSubmit,
  handlePlaceSubmit,
} from "./modal";

const editPopup = document.querySelector(".popup__edit");
const newCardPopup = document.querySelector(".popup__card");
const editButton = document.querySelector(".profile__edit-btn");
const addNewCardButton = document.querySelector(".profile__button");
const closeButtonList = document.querySelectorAll(".popup__close-icon");
const popupInputs = document.querySelectorAll(".popup__input");
const editPopupForm = editPopup.querySelector(".popup__form");
const saveButton = editPopup.querySelector(".popup__button");
const newCardForm = newCardPopup.querySelector(".form__new_place");

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
