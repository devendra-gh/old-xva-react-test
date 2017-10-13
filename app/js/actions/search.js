import axios from 'axios';
import {requestConfig} from '../config/apiResources'
import {ACTION} from '../constants';

export function fetchSearch(input) {
    return dispatch => {
        return axios(requestConfig.search(input))
            .then(res => {
                let results = res && res.data && res.data.results || [];
                dispatch(fetchSearchSuccess(results));
            })
            .catch(err => {
                console.log('Error in fetchLogin action');
                throw err;
            });
    };
}

export const fetchSearchSuccess = (search) => {
    return {
        type: ACTION.FETCH_SEARCH_SUCCESS,
        search,
    }
};
