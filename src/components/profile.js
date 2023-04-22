import { getProfile } from "./api.js";

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const prifileAvatar = document.querySelector(".profile__avatar");

export function getProfileInfo() {
  return { name: profileTitle.textContent, about: profileSubtitle.textContent };
}

export function changeProfileInfo({ name, about }) {
  profileTitle.textContent = name;
  profileSubtitle.textContent = about;
}

export function changeAvatar({ avatar }) {
  prifileAvatar.src = avatar;
}
