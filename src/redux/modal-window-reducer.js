const IS_MODAL = 'IS_MODAL';

export const modalWindowReducer = (state, action) => {
    if (action.type === IS_MODAL) {
        state.isModal = !state.isModal;
    }

    return state;
}