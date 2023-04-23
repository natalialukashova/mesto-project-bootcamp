(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{S4:()=>M,R7:()=>G,C_:()=>$,BB:()=>H});var t=function(e){var t=e.querySelector($.formSelector);Array.from(t.querySelectorAll($.inputSelector)).forEach((function(e){e.classList.remove($.inputErrorClass)})),Array.from(t.querySelectorAll($.errorSelector)).forEach((function(e){e.classList.remove($.errorClass),e.textContent=""}));var r=e.querySelector($.buttonSelector);r.disabled=!0,r.classList.add($.inactiveButtonClass)},r=function(e){return e.some((function(e){return!e.validity.valid}))},n={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-7",headers:{authorization:"27fb503f-c41b-4171-86ae-db527f080999","Content-Type":"application/json"}};function o(e){return e.ok?e.json():e.json().then((function(t){return t.statusCode=e.status,Promise.reject(t)}))}function c(){return fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers,method:"GET"}).then(o)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=document.getElementById("card").content,i=function(e,t){console.log(e);var r=u.querySelector(".card__element").cloneNode(!0),c=e.owner._id,i=r.querySelector(".element__button"),l=r.querySelector(".element__trash"),s=r.querySelector(".element__image"),d=r.querySelector(".element__title"),p=r.querySelector(".element__number-like");c!==t._id&&l.remove(),e.likes.some((function(e){return e._id===t._id}))&&i.classList.add("element__button_active");var f,_=function(e){if(Array.isArray(e))return a(e)}(f=e.likes)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(f)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(f)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return i.addEventListener("click",(function(){var r;_.some((function(e){return e._id===t._id}))?(r=e._id,fetch("".concat(n.baseUrl,"/cards/likes/").concat(r),{headers:n.headers,method:"DELETE"}).then(o)).then((function(){p.textContent=_.length-1,i.classList.remove("element__button_active"),_=_.filter((function(e){return e._id!==t._id}))})):function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{headers:n.headers,method:"PUT"}).then(o)}(e._id).then((function(){p.textContent=_.length+1,i.classList.add("element__button_active"),_.push(t)}))})),l.addEventListener("click",(function(){var t;(t=e._id,fetch("".concat(n.baseUrl,"/cards/").concat(t),{headers:n.headers,method:"DELETE"}).then(o)).then((function(){r.remove()}))})),s.addEventListener("click",(function(){H(e)})),s.src=e.link,s.alt=e.name,d.textContent=e.name,p.textContent=e.likes.length,r},l=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",M),e.addEventListener("click",G)},s=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",M),e.removeEventListener("click",G)},d=document.querySelector(".profile__title"),p=document.querySelector(".profile__subtitle"),f=document.querySelector(".profile__avatar");function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_card"),y=document.querySelector(".profile__edit-btn"),h=document.querySelector(".profile__button"),S=document.querySelectorAll(".popup__close-icon"),b=(document.querySelectorAll(".popup__input"),m.querySelector(".popup__form")),q=(m.querySelector(".popup__button"),v.querySelector(".form__new_place")),C=document.querySelector(".cards"),E=document.querySelector(".profile__title"),g=document.querySelector(".profile__subtitle"),L=document.querySelector(".input__title"),A=document.querySelector(".input__description"),k=document.querySelector(".popup__type_photo-popup"),x=document.querySelector(".popup__photo-popup_image"),j=document.querySelector(".popup__photo-popup_figcaption"),w=q.querySelector(".input__type_name"),O=q.querySelector(".input__type_link"),T=document.querySelector(".profile__edit-avatar"),U=document.querySelector(".popup__change-avatar"),P=document.querySelector(".profile__avatar"),B=document.querySelector(".input__avatar-link"),I=document.querySelector(".form__change-avatar"),D=m.querySelector(".profile__edit_submit"),N=v.querySelector(".create__button"),J=I.querySelector(".avatar__button");Promise.all([fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers,method:"GET"}).then(o),c()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,u=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];c._id,c._id,function(e){var t=e.name,r=e.about;d.textContent=t,p.textContent=r}(c),function(e){var t=e.avatar;f.src=t}(c),o.reverse().forEach((function(e){C.prepend(i(e,c))}))})).catch((function(e){console.log(e)}));var M=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");s(t)}},G=function(e){e.currentTarget===e.target&&s(e.currentTarget)},H=function(e){var t=e.name,r=e.link;x.src=r,x.alt=t,j.textContent=t,l(k)};y.addEventListener("click",(function(){L.value=E.textContent,A.value=g.textContent,t(m),l(m)})),h.addEventListener("click",(function(){q.reset(),t(v),l(v)})),S.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){s(t)}))})),b.addEventListener("submit",(function(e){e.preventDefault();var t,r={name:L.value,about:A.value};D.textContent="Сохранение...",(t=r,fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers,method:"PATCH",body:JSON.stringify(t)}).then(o)).then((function(e){E.textContent=e.name,g.textContent=e.about,s(m),D.textContent="Сохранить"})).catch((function(e){console.log(e),D.textContent="Сохранить"}))})),q.addEventListener("submit",(function(e){e.preventDefault();var t,r={name:w.value,link:O.value};N.textContent="Создание...",(t=r,fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers,method:"POST",body:JSON.stringify(t)}).then(o)).then((function(e){return console.log(e),c().then((function(t){C.prepend(i(e,t)),s(v),N.textContent="Создать"}))})).catch((function(e){console.log(e),N.textContent="Создать"}))})),T.addEventListener("click",(function(){B.value="",l(U)})),I.addEventListener("submit",(function(e){e.preventDefault();var t,r={avatar:B.value};J.textContent="Сохранение...",(t=r,fetch("".concat(n.baseUrl,"/users/me/avatar"),{headers:n.headers,method:"PATCH",body:JSON.stringify(t)}).then(o)).then((function(e){P.src=e.avatar,s(U),J.textContent="Сохранить"})).catch((function(e){console.log(e),J.textContent="Сохранить"}))}));var $={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__button",errorSelector:".error",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.buttonSelector);n.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,c,t),function(e,t,n){console.log(r(e)),r(e)?(t.disabled=!0,t.classList.add(n.inactiveButtonClass)):(t.classList.remove(n.inactiveButtonClass),t.disabled=!1)}(n,o,t)}))}))}(t,e)}))}($)})();