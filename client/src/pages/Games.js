import React, { Component } from "react";
import { ButtonToolbar } from 'react-bootstrap';
import Nav from "../components/Nav";
//import Map from "../components/Map";
import LandmarkBtn from "../components/LandmarkBtn";
import NextCityBtn from "../components/NextCityBtn";
import MoreInfoBtn from "../components/MoreInfoBtn";
import ImgComp from "../components/ImgComp";
import ClueComp from "../components/ClueComp";
import dbAPI from "../utils/dbAPI";
import { Col, Row, Container } from "../components/Grid";


//import { set } from "mongoose";
//import { List, ListItem } from "../components/List";

// state is below. I am setting some default values for testing components
class Games extends Component {
    state = {
        userData: null,
        game: [],
        gameIndex: 0, // start with index 0

        image: "./images/carmensandiego.jpeg",
        maxCities: 0,
        landmarks: [],
        cities: [],
        clues: [],
        cardimages: [],
        correctCity: null,
        selectedLandmark: -1, // initializing to a non-valid value to begin
        cityInfoText: null,
        clueText: null,
        wins: 0,
        gameOn: true
    };

    componentDidMount() {
        // need to get login info from facebook api. 
        // if not logged in, don't display anything and ask user to login.
        console.log("componentDidMount: props.userID: " + this.props.login);

        // TODO: Load User

        // Loading Game
        this.loadGame();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.login !== prevProps.login) {
            console.log("componentDidUpdate: login: " + this.props.login);
            //this.loadGames(this.props.login);
        }
    }

    loadUser = (login) => {
        dbAPI.getUser(login)
            .then(res =>
                this.setState({ user: res.data })
            )
            .catch(err => console.log(err));
    };

    updateUser = userData => {
        dbAPI.updateUser(userData)
            .then(res => console.log("User Data Updated"))
            .catch(err => console.log(err));
    };

    myShuffler = arr => {
        console.log("in myShuffler");

        // Using Fisher-Yates Algo
        // https://www.kirupa.com/html5/shuffling_array_js.htm
        for (let i = arr.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
        }
    }


    setupCurrentClue = (citiesData, index) => {
        console.log("setupCurrentClue: index: " + index);
        let cityInfo = citiesData[index].summary;
        let landmarksArray = citiesData[index].places;
        let correctCity = citiesData[index + 1].name; // correct city is next one in array
        let cluesArray = citiesData[index + 1].clues; // need to look at next element to get clues for correct city
        let imagesArray = citiesData[index].cardimages;
        let citiesArray = citiesData[index + 1].choices;
        citiesArray.push(correctCity); // push correct city into array of choices
        // need to randomize citiesArray as we don't want the correct choice to always be the last one
        this.myShuffler(citiesArray);

        this.setState({
            cityInfoText: cityInfo,
            landmarks: landmarksArray,
            correctCity: correctCity,
            clues: cluesArray,
            cardimages: imagesArray,
            cities: citiesArray,
            gameIndex: index,
            clueText: "",
            cardImage: ""
        });
    }

    loadGame = () => {
        console.log("loadGame");
        let number = 5; // number of documents (cities) to get back randomly
        dbAPI.getCitiesRandom(number)
            .then(res => {
                this.setState({
                    game: res.data,
                    gameIndex: 0, // start with index 0
                    maxCities: res.data.length,
                    correctCity: null,
                    selectedLandmark: -1,
                    cityInfoText: null,
                    clueText: "",
                    cardImage: "",
                    gameOn: true
                });
                this.setupCurrentClue(res.data, 0); // 0 is since this is the first clue (start with index 0)
            })
            .catch(err => console.log(err));
    }

    // Button Selection Handlers Below:
    landmarkBtnSelect = selection => {
        console.log("landmarkBtnSelection: Selection: " + selection);

        if (this.state.gameOn === false) {
            console.log("landmarkBtnSelection: game ended and user didn't ask to restart");
            return;
        }
        let landmarkName = this.state.landmarks[selection];
        console.log("Landmark name = " + landmarkName);

        // axios.get("/api/pexels/" + landmarkName)
        dbAPI.getLandmarkImage(landmarkName)
            .then(response => {
                console.log("Back from pexels");
                console.log(response.data);


                this.setState({
                    selectedLandmark: selection,
                    image: response.data,
                    cardImage: this.state.cardimages[parseInt(selection)],
                    clueText: this.state.clues[parseInt(selection)]

                });

            });

    }

    nextCityBtnSelect = selection => {
        console.log("nextCityBtnSelection: Selection: " + selection);

        if (this.state.gameOn === false) {
            console.log("nextCityBtnSelect: game ended and user didn't ask to restart");
            return;
        }

        // correct city selected
        if (selection === this.state.correctCity) {
            console.log("nextCityBtnSelect: gameIndex: " + this.state.gameIndex + " maxCities: " + this.state.maxCities);
            if (this.state.gameIndex === (this.state.maxCities - 2)) {
                // increment wins
                let wins = this.state.wins;
                wins++;
                this.setState({ wins: wins });
                // set users score and alert won because this was last city/clue
                // give option to play again?
                if (window.confirm("You Found Carmen! Do you want to play again?") === true) {
                    // user selected ok so load new Game
                    this.loadGame();
                }
                else {
                    // What should we do here? Need to STOP the game
                    this.setState({ gameOn: false });
                }

            }
            else { // load next city/landmark/clue
                this.setupCurrentClue(this.state.game, (this.state.gameIndex + 1));
                alert("Correct!");
                // instead of above alert, we should change the image to that of the city the
                // person selected.  Then when they click on a landmark, change the image to
                // that of the landmark
            }
        }
        else {// incorrect city selected
            // set user score and alert user lost
            // give option to play again?
            if (window.confirm("You lost! Do you want to play again?") === true) {
                // user selected ok so load new Game
                this.loadGame();
            }
            else {
                // What should we do here?  Need to STOP the game
                this.setState({ gameOn: false });
            }
        }

    }

    render() {
        return (
            <Container fluid>
                <Nav wins={this.state.wins}></Nav>
                <Row>
                    <Col size="md-8">
                        <ImgComp image={this.state.image} title="Carmen San Diego" />
                    </Col>
                    <Col size="md-4">
                        {/* put description component here with text={this.state.cityInfoText}*/}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    </Col>
                </Row>
                <Row>
                    <Col size="md-8">
                        <ButtonToolbar className="btn_toolbar">
                            <LandmarkBtn btn_text="Landmarks"
                                id="landmarks"
                                landmark_1={this.state.landmarks[0]}
                                landmark_2={this.state.landmarks[1]}
                                landmark_3={this.state.landmarks[2]}
                                onSelect={this.landmarkBtnSelect}
                            />
                            <NextCityBtn btn_text="Cities"
                                id="Cities"
                                city_1={this.state.cities[0]}
                                city_2={this.state.cities[1]}
                                city_3={this.state.cities[2]}
                                city_4={this.state.cities[3]}
                                onSelect={this.nextCityBtnSelect}
                            />
                            <MoreInfoBtn btn_text="More Info"
                                id="MoreInfo"
                                title="More Info"
                                text=""
                            />
                            {/* comment/note button goes here */}
                        </ButtonToolbar>
                    </Col>
                    <Col size="md-4">
                        <ClueComp text={this.state.clueText} cardimage={this.state.cardImage}>



                        </ClueComp>



                    </Col>
                </Row>
                

            </Container >
        );
    }
}

export default Games;