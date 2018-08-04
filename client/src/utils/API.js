import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getSkillsList: function() {
    return axios.get("https://api.stackexchange.com/2.2/tags?pagesize=50&order=desc&sort=popular&site=stackoverflow");
  }
};
