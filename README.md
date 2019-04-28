# carmenstravelapp

This app is a version of the game **Where in the World is Carmen Sandiego**.  The app can also be used as a travel guide. The app has commercial value by making researching a trip more fun and it can also can be used as a learning tool for adults and children. 

Technology used includes reactjs, react-bootstrap, express, axios, mongoose, mongodb, cesium, resium, tts-speech, react-player, craco, triposo, Pexel api,facebook-login, jsx, es6, javascript, popover buttons, html,  css

The app uses text to speech to add an engaging user experience.

Users are brought to the home page and need to login with their facebook sign-in.  The home page has a globe using the **cesium and resium** technology.  Before starting the game, users are able to explore the world by moving the globe from city to city, searching for places and zooming in on places they want to visit.  They can view it on the globe or in map view.

When the user clicks on the start key, the game begins. 

The app decides randomly the route to take to capture Carmen Sandiego.

In order to find Carmen, users are given up to 3 clues.  Clues can be found by first clicking on the **landmarks** button and then choosing any of the 3 landmarks. After hearing the clue, the user can decide if they need another clue and clicks on another landmark or if they think they know where Carmen is, they can click the **cities** button. The user gets a maximum of 3 clues.

After hearing/reading the clues, the user clicks on the **cities** button, and clicks on the city where they think Carmen is.  If they are correct, that city will appear on the screen with more clues.  If they chose the wrong city, a message appears that the user lost. 

The game continues until a user either finds Carmen or chooses an incorrect city.

Clues given are about the city where Carmen has fled to.

In addition, if a player wants to learn more about the city Carmen is in, they can click on the **more info** button.  There a list of things to see are displayed. The user can then click on any of the items listed and are brought to a webpage giving information about that item.

Users also have the opportunity to add a review about the city by clicking on the **add review** button. If a user wants to read the reviews about the city, the click on the **read review**

Pictures are from various websites and from Pexel api.
Information about the cities is found using the Triposo API.

created by Ilene Cohen, Joann Ireland, Dina Kaytor, and Mukti Pancholi.
April 2019.

