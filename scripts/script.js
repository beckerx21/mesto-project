// Закрытие и открытие popup

// Находим форму попап и кнопки открытия/закрытия
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');

// Создаем переменные для изменения полей "имя" и "деятельность"
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameField = document.getElementById('name');
const jobField = document.getElementById('job');

// Реализуем открытие поп-ап, присваиваем полям значения, отображенные на странице
function popupOpen() {
  popup.classList.add('popup_opened');
  nameField.value = profileName.textContent;
  jobField.value = profileJob.textContent;
}

// Добавляем событие на кнопку для открытия формы
popupOpenButton.addEventListener('click', popupOpen);

// Реализуем закрытие поп-ап
function popupClose() {
  popup.classList.remove('popup_opened');
}

// Добавляем событие на кнопку для закрытия формы
popupCloseButton.addEventListener('click', popupClose);

// Находим форму редактирования профиля
const formElement = document.querySelector('#popupProfileEdit');

// Обработчик отправки формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  profileJob.textContent = jobField.value ;
  popupClose();
}

// Отправка формы
formElement.addEventListener('submit', formSubmitHandler);

// Добавление 6 карточек при загрузке страницы
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

// Открытие формы добавления карточки
const placeAddButton = document.querySelector('.profile__add-button');
const popupAddPlace =  document.querySelector('.popup__add-place');

function popupPlaceOpen() {
  popupAddPlace.classList.add('popup_opened');
}

placeAddButton.addEventListener('click', popupPlaceOpen);

// Закрытие формы добавления карточки
function popupPlaceClose() {
  popupAddPlace.classList.remove('popup_opened');
}

const placeCloseButton = document.getElementById('buttonPlaceClose');
placeCloseButton.addEventListener('click', popupPlaceClose);

// Добавление карточки на страницу
const cards = document.querySelector('.cards');

function cardCreate(name,link) {
  const cardTemplate = document.getElementById('card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = `${name}`;
  cardImage.src = `${link}`;
  cardImage.alt = `${name}`;
  cards.prepend(cardElement);
}

initialCards.forEach(element => {
  cardCreate(element.name, element.link);
})


// Находим форму добавления карточки
const formPlace = document.getElementById('popupPlaceAdd');

// Обработчик отправки формы
function formPlaceSubmit(event) {
  event.preventDefault();
  const placeTitle = document.getElementById('placeTitle');
  const placeLink = document.getElementById('placeLink');
  cardCreate(placeTitle.value, placeLink.value);
  popupPlaceClose();
}

// Отправка формы
const placeSubmit = document.getElementById('placeSubmit');
popupPlaceAdd.addEventListener('submit', formPlaceSubmit);

// Лайк карточки
// const buttonLike = document.querySelectorAll('.card__icon');

// buttonLike.forEach(function (btn) {
//   btn.addEventListener('click', function(evt) {
//     const evtTarget = evt.target;
//     evtTarget.classList.toggle('card__icon_active');
//   })
// })

function setLike(event) {
  event.classList.toggle('card__icon_active');
}
