import "../pages/index.css";
import { enableValidation, cleaningErrorsOfPopup } from "./validation.js";
import { createCard } from "./card.js";
import { initialCards } from "./data.js";
import { openPopup, closePopup } from "./modal.js";
import {
  getCards,
  getCardId,
  postCard,
  deleteCard,
  getProfile,
  patchProfile,
  getAvatar,
  patchAvatar,
} from "./api.js";
import { getProfileInfo, changeProfileInfo, changeAvatar } from "./profile.js";

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
const photoPopupImage = document.querySelector(".popup__photo-popup_image");
const photoPopupFigcaption = document.querySelector(
  ".popup__photo-popup_figcaption"
);
const nameOfNewCard = newCardForm.querySelector(".input__type_name");
const linkOfNewCard = newCardForm.querySelector(".input__type_link");
const changeAvatarButton = document.querySelector(".profile__edit-avatar");
const changeAvatarPopup = document.querySelector(".popup__change-avatar");
const profileAvatar = document.querySelector(".profile__avatar");
const inputAvatarLink = document.querySelector(".input__avatar-link");
const changeAvatarPopupForm = document.querySelector(".form__change-avatar");
const editProfileInfoButton = editPopup.querySelector(".profile__edit_submit");
const createNewCardButtonPopup = newCardPopup.querySelector(".create__button");
const updateAvatarButton =
  changeAvatarPopupForm.querySelector(".avatar__button");

let userId;

export function initalPageInfo() {
  Promise.all([getCards(), getProfile()])
    .then(([cards, user]) => {
      const { _id } = user;
      userId = user._id;
      changeProfileInfo(user);
      changeAvatar(user);
      cards.reverse().forEach((item) => {
        blockForCards.prepend(createCard(item, user));
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

initalPageInfo();

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

export const openChangeAvatarPopup = () => {
  inputAvatarLink.value = "";
  changeAvatarPopupForm.reset();
  cleaningErrorsOfPopup(changeAvatarPopup);
  openPopup(changeAvatarPopup);
};

export const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const titleValue = inputTitle.value;
  const descriptionValue = inputDescription.value;
  const profileInfo = { name: titleValue, about: descriptionValue };
  editProfileInfoButton.textContent = "Сохранение...";
  patchProfile(profileInfo)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileSubtitle.textContent = res.about;
      closePopup(editPopup);
      editProfileInfoButton.textContent = "Сохранить";
    })
    .catch((err) => {
      console.log(err);
      editProfileInfoButton.textContent = "Сохранить";
    });
};

export const handlePlaceSubmit = (evt) => {
  evt.preventDefault();
  const card = { name: nameOfNewCard.value, link: linkOfNewCard.value };
  createNewCardButtonPopup.textContent = "Создание...";

  postCard(card)
    .then((res) => {
      console.log(res);
      return getProfile().then((user) => {
        blockForCards.prepend(createCard(res, user));
        closePopup(newCardPopup);
        createNewCardButtonPopup.textContent = "Создать";
      });
    })
    .catch((err) => {
      console.log(err);
      createNewCardButtonPopup.textContent = "Создать";
    });
};

export const handleChangeAvatarSubmit = (evt) => {
  evt.preventDefault();
  const avatar = { avatar: inputAvatarLink.value };
  updateAvatarButton.textContent = "Сохранение...";
  patchAvatar(avatar)
    .then((res) => {
      profileAvatar.src = res.avatar;
      closePopup(changeAvatarPopup);
      updateAvatarButton.textContent = "Сохранить";
    })
    .catch((err) => {
      console.log(err);
      updateAvatarButton.textContent = "Сохранить";
    });
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

changeAvatarButton.addEventListener("click", openChangeAvatarPopup);

changeAvatarPopupForm.addEventListener("submit", handleChangeAvatarSubmit);

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

// getCards().then((res) => {
//   res.reverse().forEach((item) => {
//     blockForCards.prepend(createCard(item));
//   });
// });

// // отображаем стартовые карточки на странице
// initialCards.reverse().forEach((item) => {
//   blockForCards.prepend(createCard(item));
// });
