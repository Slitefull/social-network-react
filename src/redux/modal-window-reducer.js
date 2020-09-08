const IS_MODAL = 'IS_MODAL';

const initialState = { isModal: false }

export const modalWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_MODAL: return  { ...state, isModal: !state.isModal }

        default: return state;
    }
}

export const modalToggle = () => ({ type: IS_MODAL });
