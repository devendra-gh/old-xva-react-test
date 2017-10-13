import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BeatLoader } from 'react-spinners';
import { fetchLogin } from '../../actions/login';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            // name: 'Luke Skywalker',
            // pswd: '19BBY',
            //name: 'Padmé Amidala',
            //pswd: '46BBY',
            name: null,
            pswd: null,
            isLoading : false
        };
    }

    componentWillReceiveProps = (nextProps) => {
        const { user } = nextProps;

        this.setState({ isLoading: false });

        if(user && user.isAuthenticated) {
            this.props.router.push('/');
        } else {
            this.props.router.push('/login');
        }
    };

    userNameHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    passwordHandler = (e) => {
        this.setState({
            pswd: e.target.value
        });
    };

    fetchLoginHandler = () => {
        const {fetchLogin} = this.props;
        if(this.state.name && this.state.pswd) {
            this.setState({ isLoading: true});
            fetchLogin(this.state.name, this.state.pswd);
        } else {
            alert('Please Enter Username and Password')
        }
    };

    render() {
        const { isLoading } = this.state;
        return (
            <div className='login-section'>
                <div className='form-group'>
                    <input onBlur={this.userNameHandler} defaultValue={this.state.name} type="text" placeholder="Username" />
                </div>
                <div className='form-group'>
                    <input onBlur={this.passwordHandler} defaultValue={this.state.pswd} type="password" placeholder="Password" />
                </div>
                <div className='form-group'>
                    <button onClick={this.fetchLoginHandler}>Login</button>
                </div>

                {
                    isLoading
                    ? <div className='sweet-loading'><BeatLoader color={'#14ad8e'} /></div>
                    : null
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: bindActionCreators(fetchLogin, dispatch),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;