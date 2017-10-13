import React from "react";
import {Link} from 'react-router';

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import '../../styles/index.css';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }

}

export default Main;
