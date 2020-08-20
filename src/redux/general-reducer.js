const ADD_FILM = 'ADD_FILM';

const UPDATE_NEW_FILM_LOGO = 'UPDATE_NEW_FILM_LOGO';
const UPDATE_NEW_FILM_TITLE = 'UPDATE_NEW_FILM_TITLE';
const UPDATE_NEW_FILM_YEAR = 'UPDATE_NEW_FILM_YEAR';

export const generalReducer = (state, action) => {
    switch (action.type) {
        case ADD_FILM: {
            return ({
                ...state,
                films: [...state.films, {
                    id: 5,
                    logoUrl: state.filmPictureText,
                    title: state.filmTitleText,
                    year: state.filmYearText
                }],
                filmTitleText: '',
                filmYearText: '',
                filmPictureText: '',
            })
        }
        case UPDATE_NEW_FILM_LOGO: return { ...state, newFilmLogo: action.newFilmLogo }
        case UPDATE_NEW_FILM_TITLE: return { ...state, newFilmTitle: action.newFilmTitle }
        case UPDATE_NEW_FILM_YEAR: return { ...state, newFilmYear: action.newFilmYear }

        default: return state;
    }
}