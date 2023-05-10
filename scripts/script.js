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

// Создаем переменные для реализация увеличения фото
const photoZoom = document.querySelector('.popup__photo');
const photoZoomAlt = document.querySelector('.popup__photo-title');
const popupPhotoAdd = document.querySelector('.popup__photoAdd')
const photoZoomClose = document.querySelector('#buttonPhotoClose');

// Закрытие увеличенного фото
function popupPhotoClose() {
  popupPhotoAdd.classList.remove('popup_opened');
}

photoZoomClose.addEventListener('click', popupPhotoClose);

// Функция создания карточек
const cards = document.querySelector('.cards');

function cardCreate(name,link) {
  const cardTemplate = document.getElementById('card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = `${name}`;
  cardImage.src = `${link}`;
  cardImage.alt = `${name}`;

  // Реализация лайка
  cardElement.querySelector('.card__icon').addEventListener('click', function(event) {
    event.target.classList.toggle('card__icon_active');
  })

  // Реализация удаления карточек
  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  })

  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    const imageLink = evt.target.getAttribute('src');
    const imageTitle = evt.target.alt;
    const imageAlt = evt.target.getAttribute('alt');
    photoZoom.setAttribute('src', imageLink);
    photoZoomAlt.setAttribute('alt', imageAlt);
    photoZoomAlt.textContent = imageTitle;
    popupPhotoAdd.classList.add('popup_opened');
  })

  return cardElement;

}

// Добавление первых 6 карточек на страницу
initialCards.forEach(element => {
  cards.append(cardCreate(element.name, element.link));
})

// Функция добавления карточек
function formPlaceSubmit(event) {
  event.preventDefault();
  const placeTitle = document.getElementById('placeTitle');
  const placeLink = document.getElementById('placeLink');
  cards.prepend(cardCreate(placeTitle.value, placeLink.value));
  popupPlaceClose();
}

// Обработка формы добавления карточки
const formPlace = document.querySelector('#popupPlaceAdd');
formPlace.addEventListener('submit', formPlaceSubmit);




