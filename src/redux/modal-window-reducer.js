const IS_MODAL = 'IS_MODAL';

const initialReducer = {
    modalWindow: {
        isModal: false,
    }
}

export const modalWindowReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case IS_MODAL: return  { ...state, isModal: !state.isModal }

        default: return state;
    }
}

export const isModalCreator = () => ({ type: IS_MODAL });