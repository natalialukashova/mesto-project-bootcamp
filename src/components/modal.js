import { closePopupEsc, closePopupOverlay } from './index.js';

// универсальная функция открытия попапов
export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("click", closePopupOverlay);
};

// функция закрытия попапа
export const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  popup.removeEventListener("click", closePopupOverlay);
};
