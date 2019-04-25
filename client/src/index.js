import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNDFjOTc5Zi1jMjMxLTQ1YTUtOTMxYS0zZjM3ZTM0ODc4NjEiLCJpZCI6OTg5MSwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1NTE3NjcwMn0.DWpc1elvsctqDy9Cd5vfBPG49vrPxGrM3xCek2LjFuI';
ReactDOM.render(<App />, document.getElementById('root'));

