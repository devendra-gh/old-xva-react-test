import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from '../Menu';

class Header extends Component {
  render() {
    return (
      <header className='clearfix'>
          <Link to='/' className='logo'>LOGO</Link>
          <Menu />
      </header>
    );
  }
}

export default Header;