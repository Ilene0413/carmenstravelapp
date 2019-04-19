import axios from "axios";

export default {
  // Gets all cities
  getCities: function() {
    return axios.get("/api/cities");
  },
  // Gets the city with the given name
  getCity: function(name) {
    return axios.get("/api/cities/" + name);
  },
  // Gets Cities in random order.  Number is used to determine how many documents to return.  We should always 
  // pass MAX
  getCitiesRandom: function(number) {
    return axios.get("/api/cities/route/" + number);
  },
  // Get all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Get specific user by name
  getUser: function(name) {
    return axios.get("/api/users/" + name);
  },
  // Update user 
  updateUser(userData) {
    return axios.put("/api/users", userData);
  },
  // Create user
  createUser(userData) {
    return axios.post("/api/users", userData);
  }
};
