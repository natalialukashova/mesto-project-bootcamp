import { openPhotoPopup } from "./index.js";
import { deleteCard, toggleLike } from "./api.js";

const cardTemplate = document.getElementById("card").content;

export const createCard = (item, user) => {
  console.log(item);
  const cardElement = cardTemplate
    .querySelector(".card__element")
    .cloneNode(true);

  const ownerId = item.owner._id;

  const likeButton = cardElement.querySelector(".element__button");
  const trashButton = cardElement.querySelector(".element__trash");
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const cardLikes = cardElement.querySelector(".element__number-like");

  if (ownerId !== user._id) {
    trashButton.remove();
  }

  if (
    item.likes.some((userLike) => {
      return userLike._id === user._id;
    })
  ) {
    likeButton.classList.add("element__button_active");
  }

  // метод, позволяющий лайкать карточки
  const handleLike = () => {
    toggleLike(
      item._id,
      item.likes.some((usr) => usr._id === user._id)
    )
      .then(({ likes }) => {
        item.likes = likes;
        cardLikes.textContent = item.likes.length;
        if (item.likes.map((usr) => usr._id).includes(user._id)) {
          likeButton.classList.add("element__button_active");
        } else {
          likeButton.classList.remove("element__button_active");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // метод, позволяющий удалять карточки
  const handlerDeleteCard = () => {
    deleteCard(item._id)
      .then(() => {
        cardElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhotoPopup = () => {
    openPhotoPopup(item);
  };

  // навешиваем событие, по которому будут лайкаться карточки
  likeButton.addEventListener("click", handleLike);

  // навешиваем событие, по которому будут удаляться карточки
  trashButton.addEventListener("click", handlerDeleteCard);

  cardImage.addEventListener("click", handlePhotoPopup);

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardLikes.textContent = item.likes.length;
  return cardElement;
};
