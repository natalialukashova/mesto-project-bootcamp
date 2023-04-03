const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-btn");
const closeButton = document.querySelector(".popup__close-icon");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".input__title");
const inputDescription = document.querySelector(".input__description");
const popupInputs = document.querySelectorAll(".popup__input");
const popupForm = document.querySelector('.popup__form');
const saveButton = document.querySelector(".popup__button");

editButton.addEventListener("click", () => {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
});

const closePopup = () => {
   popup.classList.remove("popup_opened");
  popupInputs.forEach((item) => {
    item.value = "";
  });
}

closeButton.addEventListener("click", closePopup);

const handleFormSubmit = (evt) => {
  console.log(profileTitle.textContent);
  evt.preventDefault();

  const titleValue = inputTitle.value;
  const descriptionValue = inputDescription.value;

  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = descriptionValue;
   closePopup();
};

popupForm.addEventListener("submit", handleFormSubmit);
saveButton.addEventListener('click', handleFormSubmit);