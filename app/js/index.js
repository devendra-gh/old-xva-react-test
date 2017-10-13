import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import routes from './routes';
import configureStore from './store';

const store = configureStore();
let app = document.getElementById('app');

function logPageView() {
    {/*onUpdate={() => logPageView()}*/}
    console.log('change when route change')
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>, app
);