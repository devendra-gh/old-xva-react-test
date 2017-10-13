import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { fetchLogout } from '../../actions/login';

class Logout extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        //const {fetchLogout} = this.props;
        //fetchLogout();
    }

    componentWillReceiveProps = (nextProps) => {
        //const { user: {isAuthenticated}} = nextProps;
        //console.log('isAuthenticated', isAuthenticated);
        //return !isAuthenticated && this.props.router.push('/login');
    };

    render() {
        return null;
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    //fetchLogout: bindActionCreators(fetchLogout, dispatch),
});

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);
export default LogoutContainer;