const UPDATE_NEW_FILM_LOGO = 'UPDATE_NEW_FILM_LOGO';
const UPDATE_NEW_FILM_TITLE = 'UPDATE_NEW_FILM_TITLE';
const UPDATE_NEW_FILM_YEAR = 'UPDATE_NEW_FILM_YEAR';

const ADD_FILM = 'ADD_FILM';

export const generalReducer = (state, action) => {
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