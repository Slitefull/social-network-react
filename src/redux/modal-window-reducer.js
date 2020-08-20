const IS_MODAL = 'IS_MODAL';

export const modalWindowReducer = (state, action) => {
    switch (action.type) {
        case IS_MODAL: return  { ...state, isModal: !state.isModal }
        default: return state;
    }
}