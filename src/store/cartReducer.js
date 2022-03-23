const defaultState = {
    items: []
};

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, items:[...state.items, action.payload]}
        case REMOVE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}