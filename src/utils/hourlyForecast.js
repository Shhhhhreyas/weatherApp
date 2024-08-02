import axios from "axios";

const getHourlyForecast = ({ location = "Indore" }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=74ad76686c48420888865816240208&q=${location}&aqi=no&days=5&alerts=yes`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error) => reject(error));
  });
};

export default getHourlyForecast;
