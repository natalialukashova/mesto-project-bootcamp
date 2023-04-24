export const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-7",
  headers: {
    authorization: "27fb503f-c41b-4171-86ae-db527f080999",
    "Content-Type": "application/json",
  },
};

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => {
    err.statusCode = res.status;
    return Promise.reject(err);
  });
}

export function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

export function getCardId(idCard) {
  return fetch(`${config.baseUrl}/cards/${idCard}`, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

export function postCard(data) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function deleteCard(idCard) {
  return fetch(`${config.baseUrl}/cards/${idCard}`, {
    headers: config.headers,
    method: "DELETE",
  }).then(checkResponse);
}

export function getProfile() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

export function patchProfile(data) {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function getAvatar() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

export function patchAvatar(data) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function toggleLike(idCard, isLiked) {
  return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
    headers: config.headers,
    method:  isLiked ? 'DELETE' : 'PUT',
  }).then(checkResponse);
}

// export function putLike(idCard) {
//   return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
//     headers: config.headers,
//     method: "PUT",
//   }).then(checkResponse);
// }

// export function deleteLike(idCard) {
//   return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
//     headers: config.headers,
//     method: "DELETE",
//   }).then(checkResponse);
// }
