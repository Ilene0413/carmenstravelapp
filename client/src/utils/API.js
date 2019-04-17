import axios from "axios";



export default {
  

  
  // Gets route
  getRoute: function() {
    
    return axios.get("/api/cities/route/4");
  },
  // Gets the notes for a given city
  getcityNotes: function(city) {
    return axios.get("/api/cities/" + city);
  },

  saveNote: function(city,noteData) {
    return axios.post("api/notes/"+city, noteData);
  },

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  getUser: function(userid) {
    return axios.get("/api/users/" + userid);
  },

  updateUser: function(userid, userData) {
    return axios.put("/api/users/" + userid, userData);
  },

  convertToSpeech: function(text) {
    return axios.get("/api/googletts/" + text);
  },

  getLandmarkImage: function(landmark) {
    return axios.get("/api/pexels/" + landmark);
  },

  getOtherPOI: function(city) {
    return axios.get("api/triposo/" + city);

  }
 
  
};
