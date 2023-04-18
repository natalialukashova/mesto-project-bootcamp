const showInputError = (formElement, inputElement, errorMessage) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add("popup__input_type_error");
   errorElement.textContent = errorMessage;
   errorElement.classList.add("popup__input-error_active");
 };
 
 const hideInputError = (formElement, inputElement) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove("popup__input_type_error");
   errorElement.classList.remove("popup__input-error_active");
   errorElement.textContent = "";
 };
 
 const checkInputValidity = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
     showInputError(formElement, inputElement, inputElement.validationMessage);
   } else {
     hideInputError(formElement, inputElement);
   }
 };
 
 const hasInvalidInput = (inputList) => {
   return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
   });
 };
 
 const toggleButtonState = (inputList, buttonElement) => {
   console.log(hasInvalidInput(inputList));
   if (hasInvalidInput(inputList)) {
     buttonElement.classList.add('popup__button_inactive');
   } else {
     buttonElement.classList.remove('popup__button_inactive');
   }
 };
 
 const setEventListeners = (formElement) => {
   const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
   const buttonElement = formElement.querySelector('.popup__button');
   toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
     inputElement.addEventListener("input", function () {
       checkInputValidity(formElement, inputElement);
     });
   });
 };
 
 const enableValidation = () => {
   const formList = Array.from(document.querySelectorAll(".popup__form"));
   formList.forEach((formElement) => {
     formElement.addEventListener("submit", (evt) => {
       evt.preventDefault();
     });
     setEventListeners(formElement);
   });
 };
 
 enableValidation();
 