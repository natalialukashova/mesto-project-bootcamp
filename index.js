const editPopup = document.querySelector(".popup__edit");
const newCardPopup = document.querySelector(".popup__card");
const editButton = document.querySelector(".profile__edit-btn");
const addNewCardButton = document.querySelector(".profile__button");
const closeButtonList = document.querySelectorAll(".popup__close-icon");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".input__title");
const inputDescription = document.querySelector(".input__description");
const popupInputs = document.querySelectorAll(".popup__input");
const editPopupForm = editPopup.querySelector(".popup__form");
const saveButton = editPopup.querySelector(".popup__button");
const blockForCards = document.querySelector(".cards");
const cardTemplate = document.getElementById("card").content;
const newCardForm = newCardPopup.querySelector(".form__new_place");
const nameOfNewCard = newCardForm.querySelector(".input__type_name");
const linkOfNewCard = newCardForm.querySelector(".input__type_link");
const photoPopup = document.querySelector(".photo-popup");
const photoPopupImage = document.querySelector(".photo-popup__image");
const photoPopupFigcaption = document.querySelector(".photo-popup__figcaption");

const openPhotoPopup = ({ name, link }) => {
  photoPopupImage.src = link;
  photoPopupImage.alt = name;
  photoPopupFigcaption.textContent = name;
  openPopup(photoPopup);
};

// функция наполнения карточки контентом
const createCard = (item) => {
  const cardElement = cardTemplate
    .querySelector(".card__element")
    .cloneNode(true);

  const likeButton = cardElement.querySelector(".element__button");
  const trashBitton = cardElement.querySelector(".element__trash");
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");

  // метод, позволяющий лайкать карточки
  const handleLike = () => {
    likeButton.classList.toggle("element__button_active");
  };

  // метод, позволяющий удалять карточки
  const deleteCard = () => {
    cardElement.remove();
  };

  const handlePhotoPopup = () => {
    openPhotoPopup(item);
  };

  // навешиваем событие, по которому будут лайкаться карточки
  likeButton.addEventListener("click", handleLike);

  // навешиваем событие, по которому будут удаляться карточки
  trashBitton.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", handlePhotoPopup);

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  return cardElement;
};

// универсальная функция открытия попапов
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

// функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

const cleaningErrorsOfPopup = (popup) => {
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

// функция открытия попапа редактирования профиля
const openEditPopup = () => {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  cleaningErrorsOfPopup(editPopup);
  openPopup(editPopup);
};

editButton.addEventListener("click", openEditPopup);

// функция открытия попапа для добавления новой карточки
const openNewCardPopup = () => {
  newCardForm.reset();
  cleaningErrorsOfPopup(newCardPopup);
  openPopup(newCardPopup);
};

addNewCardButton.addEventListener("click", openNewCardPopup);

// навешиваем на кнопку функцию закрытия попапа
closeButtonList.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

// метод, позволяющий редактировать информацию о пользователе
const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileTitle.textContent = inputTitle.value;
  profileSubtitle.textContent = inputDescription.value;

  closePopup(editPopup);
};
// навешиваем на форму метод редактирования информации о пользователе
editPopupForm.addEventListener("submit", handleEditProfileFormSubmit);

// метод, позволяющий добавлять новую карточку на страницу
const handlePlaceSubmit = (evt) => {
  evt.preventDefault();
  const card = { name: nameOfNewCard.value, link: linkOfNewCard.value };

  blockForCards.prepend(createCard(card));

  closePopup(newCardPopup);
};
// навешиваем на форму метод добавления новой карточки
newCardForm.addEventListener("submit", handlePlaceSubmit);

// отображаем стартовые карточки на странице
initialCards.reverse().forEach((item) => {
  blockForCards.prepend(createCard(item));
});

const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__button",
  errorSelector: ".error",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};


enableValidation(configValidation);