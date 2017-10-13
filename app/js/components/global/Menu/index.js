import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    render() {
        return (
            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
        );
    }
}

export default Menu;
