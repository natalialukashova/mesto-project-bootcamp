import { openPhotoPopup } from "./modal.js";

const cardTemplate = document.getElementById("card").content;


export const createCard = (item) => {
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

