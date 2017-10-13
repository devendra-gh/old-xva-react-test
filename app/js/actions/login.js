import axios from 'axios';
import {requestConfig} from '../config/apiResources'
import {ACTION} from '../constants';

export function fetchLogin(name, password) {
    return dispatch => {
        return axios(requestConfig.login(name))
            .then(res => {
                let results = res && res.data && res.data.results && res.data.results[0],
                    isAdmin = (name === 'Luke Skywalker' && password === '19BBY') || false;

                if(results && name === results.name && password === results.birth_year) {
                    dispatch(fetchLoginSuccess(results, true, isAdmin));
                } else {
                    dispatch(fetchLoginError());
                }
            })
            .catch(err => {
                dispatch(fetchLoginError());
                console.log('Error in fetchLogin action');
                throw err;
            });
    };
}

export const fetchLoginSuccess = (login, isAuthenticated, isAdmin) => {
    return {
        type: ACTION.FETCH_LOGIN_SUCCESS,
        login,
        isAuthenticated: isAuthenticated,
        isAdmin : isAdmin
    }
};

export const fetchLoginError = () => {
    return {
        type: ACTION.FETCH_LOGIN_ERROR,
        isAuthenticated: false,
    }
};

export const fetchLogout = () => {
    return {
        type: ACTION.FETCH_LOGOUT_SUCCESS,
        login: {},
        isAuthenticated: false,
        isAdmin: false
    }
};
