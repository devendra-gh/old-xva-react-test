let initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_SUCCESS':
            return action.search;

        default:
            return state;
    }
};