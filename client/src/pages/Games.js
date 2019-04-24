import React, { Component } from "react";
import { ButtonToolbar } from 'react-bootstrap';
import Nav from "../components/Nav";
import LandmarkBtn from "../components/LandmarkBtn";
import NextCityBtn from "../components/NextCityBtn";
import MoreInfoBtn from "../components/MoreInfoBtn";
import NotesBtn from "../components/NotesBtn";
import ImgComp from "../components/ImgComp";
import ClueComp from "../components/ClueComp";
import Alert from "../components/StatusAlert";
import DesComp from "../components/DesComp";
import dbAPI from "../utils/dbAPI";
import { Col, Row, Container } from "../components/Grid";
import Speech from 'speak-tts';

// state is below. I am setting some default values for testing components
const speech = new Speech();
class Games extends Component {

    state = {
        game: [],
        gameIndex: 0, // start with index 0
        image: null,
        imageText: "Carmen San Diego",
        maxCities: 0,
        landmarks: [],
        cities: [],
        currentCity: null,
        clues: [],
        cardimages: [],
        correctCity: null,
        selectedLandmark: -1, // initializing to a non-valid value to begin
        cityInfoText: null,
        clueTitle: null,
        clueText: null,
        clueImage: null,
        statusText: null,
        statusColor: null,
        statusIsVisible: false,
        pointsOfInterest: [],
        wins: 0,
        losses: 0,
        gameOn: true
    };

    constructor(props) {
        console.log("Games: constructor");
        super(props);
        this.state.wins = this.props.location.state.wins;
        this.state.losses = this.props.location.state.losses;
        speech.init({
            'volume': 1,
            'lang': 'en-US',
            'rate': 1,
            'pitch': 1,
            'voice': 'Google UK English Female',
            'splitSentences': true,
            'listeners': {
                'onvoiceschanged': (voices) => {
                    console.log("Event voiceschanged", voices)
                }
            }
        }).then((data) => {
            console.log("Speech is read, voices are available", data)
        }).catch(e => {
            console.error("An error occured while initializing : ", e)
        })
    }

    componentDidMount() {



        // login come from Signin.js.  It is passed in props.location via the Redirect
        console.log("componentDidMount: props.location: " + JSON.stringify(this.props.location));

        // Loading Game
        this.loadGame();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.login !== prevProps.login) {
            console.log("componentDidUpdate: login: " + this.props.login);
        }
    }

    updateUser = () => {
        let userData = { userid: this.props.location.state.userID,
                        wins: this.state.wins,
                        losses: this.state.losses 
                    };
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
        let currentCity = citiesData[index].name;
        let landmarksArray = citiesData[index].places;
        let correctCity = citiesData[index + 1].name; // correct city is next one in array
        let cluesArray = citiesData[index + 1].clues; // need to look at next element to get clues for correct city
        let imagesArray = citiesData[index].cardimages;
        let aerialImage = citiesData[index].aerialimage;
        let citiesArray = citiesData[index + 1].choices;
        citiesArray.push(correctCity); // push correct city into array of choices
        // need to randomize citiesArray as we don't want the correct choice to always be the last one
        this.myShuffler(citiesArray);

        this.setState({
            cityInfoText: cityInfo,
            currentCity: currentCity,
            landmarks: landmarksArray,
            correctCity: correctCity,
            clues: cluesArray,
            cardimages: imagesArray,
            cities: citiesArray,
            gameIndex: index,
            clueTitle: "Instruction",
            clueText: "Select landmark to get first clue",
            clueImage: "./images/questionMark.png",
            image: aerialImage,  // set image of new city here
            imageText: ("Image of " + citiesData[index].name)
        });
        speech.speak({
            text: cityInfo,
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
        this.moreInfoPopoverSelect();
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
                    gameOn: true,
                    statusText: "",
                    statusIsVisible: false
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
                    imageText: this.state.landmarks[parseInt(selection)],
                    clueImage: this.state.cardimages[parseInt(selection)],
                    clueTitle: "Clue from Witness",
                    clueText: this.state.clues[parseInt(selection)]

                });
                speech.speak({
                    text: this.state.clueText,
                }).then(() => {
                    console.log("Success !")
                }).catch(e => {
                    console.error("An error occurred :", e)
                })

            });


    }

    moreInfoPopoverSelect = () => {
        console.log("moreInfoPopoverSelect");
        dbAPI.getPOI(this.state.currentCity)
            .then(response => {
                console.log("Back from triposo");
                console.log(response.data);
                let poiArray = [];
                response.data.results.forEach( result => poiArray.push(result.name) );
                this.setState({ pointsOfInterest: poiArray });
 
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
                this.setState({
                    wins: wins,
                    statusText: "You Found Carmen!",
                    statusColor: "success",
                    statusIsVisible: true,
                    gameOn: false
                });
                this.updateUser(); // update wins in user db

            }
            else { // load next city/landmark/clue
                this.setupCurrentClue(this.state.game, (this.state.gameIndex + 1));
                // TODO Change picture to new city instead of alert
                //alert("Correct!");
                // instead of above alert, we should change the image to that of the city the
                // person selected.  Then when they click on a landmark, change the image to
                // that of the landmark
            }
        }
        else {// incorrect city selected
            // set user score and alert user lost
            // give option to play again?
            let losses = this.state.losses;
            losses++;
            this.setState({
                losses: losses,
                statusText: "You lost!",
                statusColor: "warning",
                statusIsVisible: true,
                gameOn: false
            });
            this.updateUser(); // update losses in user db
        }

    }



    render() {
        return (
            <Container fluid>
                <Nav wins={this.state.wins}
                    user_name={this.props.location.state.userID}></Nav>
                <Row>
                    <Col size="md-8">
                        <DesComp text={this.state.cityInfoText} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-8">
                        <ImgComp image={this.state.image} title={this.state.imageText} />
                    </Col>
                    <Col size="md-4">
                        <ClueComp title={this.state.clueTitle} text={this.state.clueText} cardimage={this.state.clueImage} />
                        {/* put description component here with text={this.state.cityInfoText}*/}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
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
                                title={this.state.currentCity}
                                text={this.state.pointsOfInterest}
                                onSelect={this.moreInfoPopoverSelect}                               
                            />
                            <NotesBtn btn_text="Reviews"
                                id="reviews"
                                title="reviews"
                                />
                        </ButtonToolbar>
                    </Col>
                    <Col size="md-6">
                        <Alert color={this.state.statusColor} text={this.state.statusText} isVisible={this.state.statusIsVisible} />
                    </Col>
                </Row>


            </Container >
        );
    }
}


export default Games;