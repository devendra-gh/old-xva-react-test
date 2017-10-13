import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default function Authentication(Component) {

    class AuthenticatedComponent extends Component {
        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const {user: {isAuthenticated}} = this.props;
            return !isAuthenticated && this.props.router.push('/login');
        }

        render() {
            return (
                this.props.user.isAuthenticated
                    ? <Component { ...this.props } />
                    : null
            )
        }
    }

    const mapStateToProps = (state) => ({
        user: state.user,
    });

    const AuthenticatedComponentContainer = connect(mapStateToProps)(AuthenticatedComponent);
    return withRouter(AuthenticatedComponentContainer);
}