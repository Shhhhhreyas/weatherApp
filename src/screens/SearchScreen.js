import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import getHourlyForecast from "../utils/hourlyForecast";
import { useNavigate } from "react-router-dom";

export default function SearchScreen() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ marginTop: 64, width: "50%" }}
          placeholder="Search your city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          onClick={() => {
            if (city) {
              getHourlyForecast({ location: city })
                .then((data) => setCurrentWeather(data))
                .catch((error) => {
                  setCurrentWeather();
                  alert(error?.response?.data?.error?.message);
                });
            }
          }}
          style={{
            marginTop: 64,
            height: 30,
            fontSize: 15,
            backgroundColor: "#fff0",
          }}
        >
          Search
        </Button>
      </div>
      {currentWeather ? (
        <div
          style={{
            // height: 200,
            width: 200,
            boxShadow: "1px 1px 10px 1px grey",
            marginTop: 64,
            borderRadius: 16,
            flexDirection: "column",
            padding: 16,
          }}
          onClick={() => {
            navigate("/", { state: { city }, replace: true });
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>{currentWeather?.location?.name}</h3>
            <ArrowForwardIosIcon
              style={{
                alignSelf: "center",
                height: 15,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{ fontSize: 30 }}
            >{`${currentWeather?.current?.temp_c}°`}</p>
            <ThermostatIcon
              style={{
                alignSelf: "center",
                height: 30,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{ fontSize: 16 }}
            >{`${currentWeather?.current?.condition?.text}`}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
