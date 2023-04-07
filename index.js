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

// функция наполнения карточки контентом
const createCard = (item) => {
  const cardElement = cardTemplate
    .querySelector(".card__element")
    .cloneNode(true);
  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;
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

// функция открытия попапа редактирования профиля
const openEditPopup = () => {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  openPopup(editPopup);
};

editButton.addEventListener("click", openEditPopup);

// функция открытия попапа для добавления новой карточки
const openNewCardPopup = () => {
  newCardForm.reset();
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

// ищем все кнопки лайков, удаления карточек и картинки на странице
const likeButtonList = document.querySelectorAll(".element__button");
const trashBittonList = document.querySelectorAll(".element__trash");
const cardImageList = document.querySelectorAll(".card__image");
const photoPopup = document.querySelector(".photo-popup");
const photoPopupImage = document.querySelector(".photo-popup__image");
const photoPopupFigcaption = document.querySelector(".photo-popup__figcaption");

// метод, позволяющий лайкать карточки
const handleLike = (evt) => {
  evt.preventDefault();

  evt.target.classList.toggle("element__button_active");
};

// метод, позволяющий удалять карточки
const deleteCard = (evt) => {
  evt.preventDefault();

  console.log(evt.target.parentNode.remove());
};

const createPhotoPopup = ({ name, link }) => {
  photoPopupImage.src = link;
  photoPopupImage.alt = name;
  photoPopupFigcaption.textContent = name;
  return photoPopup;
}

const openPhotoPopup = (evt) => {
  evt.preventDefault();

  openPopup(createPhotoPopup);
};

// навешиваем событие, по которому будут лайкаться карточки
likeButtonList.forEach((button) => {
  button.addEventListener("click", handleLike);
});

// навешиваем событие, по которому будут удаляться карточки
trashBittonList.forEach((button) => {
  button.addEventListener("click", deleteCard);
});

cardImageList.forEach((img) => {
  img.addEventListener("click", openPhotoPopup);
});
