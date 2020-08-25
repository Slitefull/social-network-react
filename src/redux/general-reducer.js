const UPDATE_NEW_FILM_LOGO = 'UPDATE_NEW_FILM_LOGO';
const UPDATE_NEW_FILM_TITLE = 'UPDATE_NEW_FILM_TITLE';
const UPDATE_NEW_FILM_YEAR = 'UPDATE_NEW_FILM_YEAR';

const ADD_FILM = 'ADD_FILM';

const initialState = {
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
        filmLogo: '1',
        filmTitle: '2',
        filmYear: '3',

        filmTitleText: 'Печальный кот',
        filmYearText: '2004',
        filmPictureText: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd9_Wz_mbMRa0b9SwARmOwmo6TYN5eDqVYgc_eFE6er6d4jfDLkxIhS23dv3cpCwTtE1dR2ibsGAIPBWZLXLt5oq9gyDEgJM4kCg&usqp=CAU&ec=45690274'
    }

export const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM: {
            return {
                ...state,
                films: [...state.films, { id: 5, logoUrl: state.filmPictureText, title: state.filmTitleText, year: state.filmYearText }],
                filmTitleText: '',
                filmYearText: '',
                filmPictureText: '',
            }
        }

        case UPDATE_NEW_FILM_LOGO: return { ...state, filmPictureText: action.newFilmLogo }
        case UPDATE_NEW_FILM_TITLE: return { ...state, filmTitleText: action.newFilmTitle }
        case UPDATE_NEW_FILM_YEAR: return { ...state, filmYearText: action.newFilmYear }

        default: return state;
    }
}

export const updateNewFilmLogoCreator = filmLogoValue => ({ type: UPDATE_NEW_FILM_LOGO, newFilmLogo: filmLogoValue }); //payload
export const updateNewFilmTitleCreator = filmTitleValue => ({ type: UPDATE_NEW_FILM_TITLE, newFilmTitle: filmTitleValue }); //create norm logic for object film !
export const updateNewFilmYearCreator = filmYearValue => ({ type: UPDATE_NEW_FILM_YEAR, newFilmYear: filmYearValue });

export const addFilmCreator = () => ({ type: ADD_FILM });