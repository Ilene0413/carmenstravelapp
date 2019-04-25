import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Globe from "../components/Globe";
import dbAPI from "../utils/dbAPI";
import FacebookLoginButton from '../components/FacebookLoginButton';
//import Map from "../components/Map";
import "./Signin.css";



class Signin extends Component {

    state = {
        userData: null, // just store database record.  Do I need the individual fields?
        buttonEnabled: false, // initially disable start button. Only enable if user is logged in
        userName: null,
        userID: null,
        wins: 0,
        losses: 0,
        redirect: false
    }

    loadUserData = (userName, userID) => {
        console.log("loadUserData: userID=" + userID);
        console.log("loadUserData: userName=" + userName);
        dbAPI.getUser(userID)
            .then(res => {
                console.log('Im here')
                if (!res || !res.data.length) { // didn't find so create record
                    let userData = { userid: userID, username: userName, wins: 0, losses: 0 };
                    dbAPI.createUser(userData)
                        .then(res => {
                            this.setState({
                                   userData: res.data,
                                buttonEnabled: true,
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
                        buttonEnabled: true,
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
        console.log("onFacebookLogin");
        if (loginStatus === true) {
            console.log("onFacebookLogin: setState: user.name: " + resultObject.user.name);
            console.log("onFacebookLogin: setState: userID: " + resultObject.user.id);
            this.loadUserData(resultObject.user.name, resultObject.user.id);
        } else {
            alert("Facebook login error");
        }
    }

    startBtnClicked = () => {
        console.log("startBtnClicked")
        this.setState({ redirect: true });
    }

    renderRedirect = () => {
        console.log("renderRedirect");
        if (this.state.redirect) {
            console.log("calling redirect");
            //return <Redirect to='/games' />
            return <Redirect to={{
                pathname: "/games",
                state: {userData: this.state.userData,
                        userName: this.state.userName,
                        userID: this.state.userID,
                        wins: this.state.wins,
                        losses: this.state.losses}
            }} ></Redirect>
        }
    }

    render() {
        return (
            <Container fluid>
                {this.renderRedirect()}
                <Row>
                <Nav wins={this.state.wins} user_name={this.state.userName}></Nav>
                   
                </Row>
                <Row>
                    <Col size="md-10"></Col>
                    <Col size="md-2">
                <FacebookLoginButton onLogin={this.onFacebookLogin}>
                        <div className="fb-login-button" data-size="large" width="15px" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="false" width="1px"></div>
                    </FacebookLoginButton>
                    </Col>
                </Row>
                <Row>
                <Col size="md-10"></Col>
                <Col size="md-2">
                    <button disabled={!this.state.buttonEnabled} onClick={this.startBtnClicked} id="start" size="lg"> Start </button>
                </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Globe/>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Signin;