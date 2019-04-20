import React, { Component } from 'react';

class FacebookLogin extends Component {

    componentDidMount() {
        console.log("componentDidMount");
        document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    componentWillUnmount() {
        document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    /**
     * Init FB object and check Facebook Login status
     */
    initializeFacebookLogin = () => {
        console.log("initializeFacebookLogin");
        this.FB = window.FB;
        this.checkLoginStatus();
    }

    /**
     * Check login status
     */
    checkLoginStatus = () => {
        console.log("checkLoginStatus");
        this.FB.getLoginStatus(this.facebookLoginHandler);
    }

    /**
     * Check login status and call login api is user is not logged in
     */
    facebookLogin = () => {
        console.log("facebookLogin");
        if (!this.FB) return;

        this.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                this.facebookLoginHandler(response);
            } else {
                this.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
            }
        });
    }

    /**
     * Handle login response
     */
    facebookLoginHandler = response => {
        console.log("facebookLoginHandler");
        if (response.status === 'connected') {
            this.FB.api('/me', userData => {
                let result = {
                    ...response,
                    user: userData
                };
                this.props.onLogin(true, result);
            });
        } else {
            this.props.onLogin(false);
        }
    }

    render() {
        let { children } = this.props;
        return (
            <div onClick={this.facebookLogin}>
                {children}
            </div>
        );
    }
};

export default FacebookLogin;