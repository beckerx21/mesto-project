// Объявление всех переменных

// Настройка профиля
const profilePopup = document.querySelector('.popup__profile');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#buttonProfileClose');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameField = document.querySelector('#name');
const jobField = document.querySelector('#job');
const profileForm = document.querySelector('#popupProfileEdit');

// Создание карточки
const cards = document.querySelector('.cards');

// Добавление карточки
const placeAddButton = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('.popup__add-place');
const placeCloseButton = document.querySelector('#buttonPlaceClose');
const placeTitle = document.querySelector('#placeTitle');
const placeLink = document.querySelector('#placeLink');
const placeForm = document.querySelector('#popupPlaceAdd');

// Попап с картинкой
const popupPhotoZoom = document.querySelector('.popup__photo-zoom')
const photoZoom = document.querySelector('.popup__photo');
const photoZoomAlt = document.querySelector('.popup__photo-title');
const photoCloseButton = document.querySelector('#buttonPhotoClose');

// Универсальные функции открытия и закрытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Реализуем открытие поп-ап профиля, присваиваем полям значения, отображенные на странице
function openProfilePopup() {
  openPopup(profilePopup);
  nameField.value = profileName.textContent;
  jobField.value = profileJob.textContent;
}

// Добавляем событие на кнопку для открытия формы
profileOpenButton.addEventListener('click', openProfilePopup);

// Добавляем событие на кнопку для закрытия формы
profileCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});

// Обработчик отправки формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  profileJob.textContent = jobField.value;
  closePopup(profilePopup);
}

// Отправка формы
profileForm.addEventListener('submit', handleProfileFormSubmit);

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

// Открытие и закрытие popup добавления карточки
placeAddButton.addEventListener('click', () => {
  openPopup(popupAddPlace);
});

placeCloseButton.addEventListener('click', () => {
  closePopup(popupAddPlace);
});

// Закрытие попапа с картинкой
photoCloseButton.addEventListener('click', () => {
  closePopup(popupPhotoZoom);
});

// Функция создания карточек
function createCard(name, link) {
  const cardTemplate = document.getElementById('card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = `${name}`;
  cardImage.src = `${link}`;
  cardImage.alt = `${name}`;

  // Реализация лайка
  cardElement.querySelector('.card__icon').addEventListener('click', function (event) {
    event.target.classList.toggle('card__icon_active');
  })

  // Реализация удаления карточек
  cardElement.querySelector('.card__trash').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  })

  cardImage.addEventListener('click', () => {
    photoZoom.setAttribute('src', link);
    photoZoomAlt.setAttribute('alt', name);
    photoZoomAlt.textContent = name;
    openPopup(popupPhotoZoom);
  })

  return cardElement;
}

// Добавление первых 6 карточек на страницу
initialCards.forEach(element => {
  cards.append(createCard(element.name, element.link));
})

// Функция добавления карточек
function handleCardFormSubmit(event) {
  event.preventDefault();
  cards.prepend(createCard(placeTitle.value, placeLink.value));
  closePopup(popupAddPlace);
  event.target.reset();
}

// Обработка формы добавления карточки
placeForm.addEventListener('submit', handleCardFormSubmit);




