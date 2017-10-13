let initialState = {
    login: {},
    isAuthenticated: false,
    isAdmin: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOGIN_SUCCESS':
            return {
                ...state,
                login: action.login,
                isAuthenticated: action.isAuthenticated,
                isAdmin : action.isAdmin
            };

        case 'FETCH_LOGIN_ERROR':
            debugger
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
            };

        case 'FETCH_LOGOUT_SUCCESS':
            return {
                ...state,
                login: action.login,
                isAuthenticated: action.isAuthenticated,
                isAdmin : action.isAdmin
            };

        default:
            return state;
    }
};