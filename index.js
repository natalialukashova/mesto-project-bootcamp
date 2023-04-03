const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-btn");
const closeButton = document.querySelector(".popup__close-icon");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".input__title");
const inputDescription = document.querySelector(".input__description");
const popupInputs = document.querySelectorAll(".popup__input");
const saveButton = document.querySelector(".popup__button");

editButton.addEventListener("click", () => {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
  popupInputs.forEach((item) => {
    item.value = "";
  });
});

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const titleValue = inputTitle.value;
  const descriptionValue = inputDescription.value;

  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = descriptionValue;
};

saveButton.addEventListener("submit", handleFormSubmit);
