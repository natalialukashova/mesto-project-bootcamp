const editPopup = document.querySelector(".popup__edit");
const newCardPopup = document.querySelector('.popup__card');
const editButton = document.querySelector(".profile__edit-btn");
const addNewCardButton = document.querySelector('.profile__button')
const closeButtonList = document.querySelectorAll(".popup__close-icon");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".input__title");
const inputDescription = document.querySelector(".input__description");
const popupInputs = document.querySelectorAll(".popup__input");
const popupForm = document.querySelector(".popup__form");
const saveButton = document.querySelector(".popup__button");
const blockForCards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;
const newCardForm = newCardPopup.querySelector('.form__new_place');

// массив с карточками для стартовой загрузки
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

// отображаем стартовые карточки на странице
initialCards.forEach((item) => {
  blockForCards.append(createCard(item));
});

// функция открытия попапа редактирования профиля
const openEditPopup = () => {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  editPopup.classList.add("popup_opened");
}

editButton.addEventListener("click", openEditPopup);

// функция открытия попапа для добавления новой карточки
const openNewCardPopup = () => {
  newCardForm.reset();
  newCardPopup.classList.add("popup_opened");
}

addNewCardButton.addEventListener('click', openNewCardPopup)


// функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

// навешиваем на кнопку функцию закрытия попапа
closeButtonList.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

// метод, позволяющий редактировать информацию о пользователе
const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const titleValue = inputTitle.value;
  const descriptionValue = inputDescription.value;

  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = descriptionValue;

  closePopup();
};

// навешивание на кнопку и форму метод редактирования информации о пользователе
popupForm.addEventListener("submit", handleFormSubmit);
saveButton.addEventListener("click", handleFormSubmit);
