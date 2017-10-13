import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Authentication from './components/Authentication';
import Main from './views';
import Login from './views/Login';
import Search from './views/Search';
import About from './views/About';
import Logout from './views/Logout';
import NotFound from './views/NotFound';

export default (
    <Router history={ browserHistory }>
        <Route path='/login' component={ Login }> </Route>
        <Route path='/' component={ Authentication(Main) }>
            <IndexRoute component={ Search }/>
            <Route path='/about' component={ About }/>
            <Route path='/logout' component={ Logout }/>
        </Route>
        <Route path="*" component={NotFound}> </Route>
    </Router>
)
