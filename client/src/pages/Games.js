import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Nav from "../components/Nav";
import LandmarkBtn from "../components/LandmarkBtn";
import NextCityBtn from "../components/NextCityBtn";
import MoreInfoBtn from "../components/MoreInfoBtn";
import AddReviewBtn from "../components/AddReviewBtn";
import NotesBtn from "../components/NotesBtn";
import ImgComp from "../components/ImgComp";
import ClueComp from "../components/ClueComp";
import StatusAlert from "../components/StatusAlert";
import DesComp from "../components/DesComp";
import dbAPI from "../utils/dbAPI";
import { Col, Row, Container } from "../components/Grid";
import Speech from 'speak-tts';
import Input from "../components/Form"

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
        landmarkImages: [],
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
        notestext: "",
        notes: [],
        wins: 0,
        losses: 0,
        gameOn: true,
        reviewsOpen: false
    };

    constructor(props) {
        console.log("Games: constructor");
        super(props);
        this.state.wins = this.props.location.state.wins;
        this.state.losses = this.props.location.state.losses;

    }

    componentDidMount() {



        // login come from Signin.js.  It is passed in props.location via the Redirect
        console.log("componentDidMount: props.location: " + JSON.stringify(this.props.location));
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
            // Loading Game
            this.loadGame();
        }).catch(e => {
            console.error("An error occured while initializing : ", e)
        })


    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.login !== prevProps.login) {
            console.log("componentDidUpdate: login: " + this.props.login);
        }
    }

    updateUser = (wins, losses) => {
        let userData = {
            userid: this.props.location.state.userID,
            username: this.props.location.state.userName,
            wins: wins,
            losses: losses
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
        let landmarkImagesArray = citiesData[index].placeImages;
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
            landmarkImages: landmarkImagesArray,
            correctCity: correctCity,
            clues: cluesArray,
            cardimages: imagesArray,
            cities: citiesArray,
            gameIndex: index,
            clueTitle: "Instruction",
            clueText: "Select landmarks to get clues. Fly to the next city when you think you know where Carmen has gone.",
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
        //this.moreInfoPopoverSelect(currentCity);
        this.getReviews(currentCity);
    }

    jail = () => {
        // let statusColor=""
        if (this.state.statusColor === "success") {
            return (<div>
                <img src="/images/Carmen-Jail-3.gif" alt="" align="middle" style={{ "width": "490px", "height": "627px" }}>
                </img>

            </div>
            );
        }
        return <img src="/images/carmen-in-Paris.gif" alt="" align="middle" style={{ "width": "490px", "height": "630px" }}>
        </img>
    }

    loadGame = () => {
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

        if (this.state.gameOn === false) {
            console.log("landmarkBtnSelection: game ended and user didn't ask to restart");
            return;
        }
        let landmarkName = this.state.landmarks[selection];
        let landmarkImage = this.state.landmarkImages[selection];
        console.log("Landmark name = " + landmarkName);

        // axios.get("/api/pexels/" + landmarkName)
        if (landmarkImage === "") {


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
        else {
            this.setState({
                selectedLandmark: selection,
                image: this.state.landmarkImages[parseInt(selection)],
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


        }


    }

    moreInfoPopoverSelect = () => {
        let city = this.state.currentCity;
        console.log("moreInfoPopoverSelect with " + city);
        dbAPI.getPOI(city)
            .then(response => {
                console.log("Back from triposo");
                console.log(response.data);
                let poiArray = [];

                response.data.results.forEach(result => {
                    let currentPOI = { name: result.name, link: result.attribution[0].url };
                    poiArray.push(currentPOI)
                });
                this.setState({ pointsOfInterest: poiArray });

            });

    }


    getReviews = city => {
        console.log("getReviews with " + city);
        dbAPI.getCity(city)
            .then(response => {
                console.log("Back from getCity");
                console.log(response.data);
                let notesArray = [];
                response.data[0].notes.forEach(result => {
                    let currentNote = { note: result.body, author: result.username };
                    notesArray.push(currentNote)
                });
                this.setState({ notes: notesArray });

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
                let losses = this.state.losses;
                this.setState({
                    wins: wins,
                    statusText: "You Won!",
                    statusColor: "success",
                    statusIsVisible: true,
                    gameOn: false
                });
                this.updateUser(wins, losses); // update wins in user db

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
            let wins = this.state.wins;
            this.setState({
                losses: losses,
                statusText: "You lost!",
                statusColor: "warning",
                statusIsVisible: true,
                gameOn: false
            });
            this.updateUser(wins, losses); // update losses in user db
        }

    }

    handleInputChange = (event) => {
        this.setState({ notestext: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.notestext);
    }

    openReviews = () => {
        (this.state.reviewsOpen) ? this.setState({
            reviewsOpen: false
        }) : this.setState({
            reviewsOpen: true
        })
    }

    render() {
        console.log(this.state.currentCity);
        return (
            <Container fluid>
                <Nav wins={this.state.wins}
                    user_name={this.props.location.state.userName}></Nav>
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
                        {/* <ClueComp title={this.state.clueTitle} text={this.state.clueText} cardimage={this.state.clueImage} />*/}
                        {/* put description component here with text={this.state.cityInfoText}*/}

                        {/* <jail statusColor={} /> */}
                        {!this.state.gameOn ?
                            this.jail()
                            : <ClueComp title={this.state.clueTitle} text={this.state.clueText} cardimage={this.state.clueImage} />
                        }

                    </Col>
                </Row>

                <Row>
                    <Col size="md-3">
                        <ButtonToolbar className="btn_toolbar">
                            <ButtonGroup className="mr-2">
                                <LandmarkBtn btn_text="Landmarks"
                                    id="landmarks"
                                    landmark_1={this.state.landmarks[0]}
                                    landmark_2={this.state.landmarks[1]}
                                    landmark_3={this.state.landmarks[2]}
                                    onSelect={this.landmarkBtnSelect}
                                />
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <NextCityBtn btn_text="Cities"
                                    id="Cities"
                                    city_1={this.state.cities[0]}
                                    city_2={this.state.cities[1]}
                                    city_3={this.state.cities[2]}
                                    city_4={this.state.cities[3]}
                                    onSelect={this.nextCityBtnSelect}
                                />
                            </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        <Col size="md-4">
                            <ButtonToolbar>
                                <div>
                                <ButtonGroup className="mr-2">
                                    <MoreInfoBtn btn_text="More Info"
                                        id="MoreInfo"
                                        title={this.state.currentCity}
                                        text={this.state.pointsOfInterest}
                                        onClick={this.moreInfoPopoverSelect}
                                    />
                                </ButtonGroup>

                                <ButtonGroup className="mr-2">
                                    <NotesBtn btn_text="Reviews"
                                        id="reviews"
                                        text={this.state.notes}
                                    />
                                </ButtonGroup>
                                </div>
                                <ButtonGroup className="mr-2" >
                                    <AddReviewBtn btn_text="Add a review"
                                        id="reviews"
                                        username={this.state.username}
                                        onClick={this.openReviews}
                                        currentCity={this.state.currentCity}
                                    />

                                    {
                                        (this.state.reviewsOpen) ?
                                            <Input onChange={this.handleInputChange} onClick={this.handleInputChange.handleSubmit} />
                                            :
                                            " "
                                    }
                                </ButtonGroup>
                            </ButtonToolbar>

                        </Col>

                        <Col size="md-5" style={{ textAlign: "right" }}>
                            <StatusAlert color={this.state.statusColor} text={this.state.statusText} isVisible={this.state.statusIsVisible} />
                        </Col>

                </Row>
            </Container >
                );
            }
        }
        
        
export default Games;