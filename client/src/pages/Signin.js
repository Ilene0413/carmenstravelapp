import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Col, Row, Container } from "../components/Grid";
import Globe from "../components/Globe";
import dbAPI from "../utils/dbAPI";
import FacebookLoginButton from '../components/FacebookLoginButton';
import { Link } from "react-router-dom";
import "./Signin.css";



class Signin extends Component {

    state = {
        userData: null, // just store database record.  Do I need the individual fields?
        disabled: true,
        // buttonEnabled: false, // initially disable start button. Only enable if user is logged in
        userName: null,
        userID: null,
        wins: 0,
        losses: 0,
        redirect: false
    }

    loadUserData = (userName, userID) => {
        dbAPI.getUser(userID)
            .then(res => {
                if (!res || !res.data.length) { // didn't find so create record
                    let userData = { userid: userID, username: userName, wins: 0, losses: 0 };
                    dbAPI.createUser(userData)
                        .then(res => {
                            this.setState({
                                userData: res.data,
                                // buttonEnabled: true,
                                disabled: false,
                                userName: res.data.username,
                                userID: res.data.userid,
                                wins: res.data.wins,
                                losses: res.data.losses
                            })
                        })
                        .catch(err => (console.log("error creating User: " + err)));
                }
                else {
                    this.setState({
                        userData: res.data[0],
                        // buttonEnabled: true,
                        disabled: false,
                        userName: res.data[0].username,
                        userID: res.data[0].userid,
                        wins: res.data[0].wins,
                        losses: res.data[0].losses
                    })
                }
            })
            .catch(err => console.log(err));
    };

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({disabled: false});
            this.loadUserData(resultObject.user.name, resultObject.user.id);
        } else {
            //alert("Facebook login error");
            console.log("Facebook login error");
        }
    }

    startBtnClicked = () => {
        this.setState({ redirect: true });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            //return <Redirect to='/games' />
            return <Redirect to={{
                pathname: "/games",
                state: {
                    userData: this.state.userData,
                    userName: this.state.userName,
                    userID: this.state.userID,
                    wins: this.state.wins,
                    losses: this.state.losses
                }
            }} ></Redirect>
        }
    }

    render() {
        return (
            <Container fluid>
                {this.renderRedirect()}
                <Row>
                    <Col size="md-10">
                        <h1 className="sigin navbar navbar-expand-sm navbar-dark bg-primary">
                            <Link className="navbar-brand" to="/">
                                <img className="pull-left" id="logo" src="/images/carmensandiego.jpeg" alt="" style={{ width: 100, marginTop: -4 }} />
                                Carmen's Travel App
                             </Link>
                            <div>
                            </div>
                        </h1>
                    </Col>
                    <div>
                    <Col size="md-1">
                        <FacebookLoginButton onLogin={this.onFacebookLogin}>
                            <div className="fb-login-button" data-size="large" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="false" width="10px"></div>
                        </FacebookLoginButton>
                    </Col>
                    <Col size="md-1">
                        <button onClick={this.startBtnClicked} disabled={this.state.disabled} id="start" size="lg"> Start Game </button>
                        {/* <button onClick={this.startBtnClicked} disabled={!this.state.buttonEnabled} id="start" size="lg"> Start Game </button> */}

                    </Col>
                    </div>
                </Row>
                <Row>
                    <Col size="md-10">
                        <Globe />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Signin;