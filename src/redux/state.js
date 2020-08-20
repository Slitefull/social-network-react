import { generalReducer } from './general-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { modalWindowReducer } from './modal-window-reducer';

const ADD_POST = 'ADD_POST';
const ADD_USER = 'ADD_USER';
const ADD_FILM = 'ADD_FILM';

const UPDATE_NEW_FILM_LOGO = 'UPDATE_NEW_FILM_LOGO';
const UPDATE_NEW_FILM_TITLE = 'UPDATE_NEW_FILM_TITLE';
const UPDATE_NEW_FILM_YEAR = 'UPDATE_NEW_FILM_YEAR';

const IS_MODAL = 'IS_MODAL';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_USER_NAME = 'UPDATE_NEW_USER_NAME';

export default {
    _state: {
        dialogsPage: {
            users: [
                { id: 1, name: 'Max' },
                { id: 2, name: 'Sanya' },
                { id: 3, name: 'Ivan' },
                { id: 4, name: 'Dimon' },
                { id: 5, name: 'Oleg' },
            ],
            newUserName: 'Max',

            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'Hello!' },
                { id: 3, message: 'Darova' },
                { id: 4, message: 'React' },
                { id: 5, message: 'Redux' },
            ],
            newMessageText: 'New Text'
        },
        generalPage: {
            films: [
                {
                    id: 1,
                    logoUrl: 'https://ru.meming.world/images/ru/thumb/7/73/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg',
                    title: "Плачущий кот",
                    year: 2000
                },
                {
                    id: 2,
                    logoUrl: 'https://r3.mt.ru/r20/photo57F6/20082594506-0/png/bp@2x.webp',
                    title: "Кричащий кот",
                    year: 2001
                },
                {
                    id: 3,
                    logoUrl: 'https://ru.meming.world/images/ru/thumb/7/78/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82_3.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82_3.jpg',
                    title: "Грустный кот",
                    year: 2002
                },
                {
                    id: 4,
                    logoUrl: 'https://www.meme-arsenal.com/memes/211bcdd033fcb439f9c11839945fdd97.jpg',
                    title: "Кот в слезах",
                    year: 2003
                }
            ],
            newFilmLogo: '',
            newFilmTitle: '',
            newFilmYear: '',
        },
        modalWindow: {
            isModal: false,
            filmTitleText: 'Печальный кот',
            filmYearText: '2004',
            filmPictureText: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd9_Wz_mbMRa0b9SwARmOwmo6TYN5eDqVYgc_eFE6er6d4jfDLkxIhS23dv3cpCwTtE1dR2ibsGAIPBWZLXLt5oq9gyDEgJM4kCg&usqp=CAU&ec=45690274'
        }
    },
    _callSubscriber: () => console.log('State changed'),

    getState() { return this._state },
    subscribe(observer) { this._callSubscriber = observer },

    dispatch(action) {
        this._state.generalPage = generalReducer(this._state.generalPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.modalWindow = modalWindowReducer(this._state.modalWindow, action);

        this._callSubscriber(this._state);
    }
}

export const isModalCreator = () => ({ type: IS_MODAL });

export const addPostCreator = () => ({ type: ADD_POST });
export const addUserCreator = () => ({ type: ADD_USER });
export const addFilmCreator = () => ({ type: ADD_FILM });

export const updateNewPostTextCreator = postMessage => ({ type: UPDATE_NEW_POST_TEXT, newText: postMessage });
export const updateNewUserNameCreator = userName => ({ type: UPDATE_NEW_USER_NAME, newUser: userName });

export const updateNewFilmLogoCreator = filmLogoValue => ({ type: UPDATE_NEW_FILM_LOGO, newFilmLogo: filmLogoValue });
export const updateNewFilmTitleCreator = filmTitleValue => ({ type: UPDATE_NEW_FILM_TITLE, newFilmTitle: filmTitleValue });
export const updateNewFilmYearCreator = filmYearValue => ({ type: UPDATE_NEW_FILM_YEAR, newFilmYear: filmYearValue });