import axios from "axios";

const getHourlyForecast = ({ location = "Indore" }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=74ad76686c48420888865816240208&q=${location}&aqi=no&days=5&alerts=no`
      )
      .then((resp) => {
        console.log("resp: ", resp.data);
        resolve(resp.data.forecast);
      })
      .catch((error) => reject(error));
  });
};

export default getHourlyForecast;
