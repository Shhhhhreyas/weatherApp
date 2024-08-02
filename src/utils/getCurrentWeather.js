import axios from "axios";

const getCurrentweather = ({ location = "Indore" }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=74ad76686c48420888865816240208&q=${location}&aqi=no`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error) => reject(error));
  });
};

export default getCurrentweather;
