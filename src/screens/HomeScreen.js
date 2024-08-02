import React, { useEffect, useState } from "react";
import Background from "../assets/homescreenBg.jpg";
import { Button } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TwoDetails from "../components/TwoDetails";
import TwoDetailsVariant from "../components/TwoDetailsVariant";
import getCurrentWeather from "../utils/getCurrentWeather";
import getHourlyForecast from "../utils/hourlyForecast";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getCurrentWeather({ location: "Indore" }).then((data) =>
      setCurrentWeather(data)
    );
    getHourlyForecast({ location: "Indore" }).then((data) => {
      setForecast(data);
    });
  }, []);
  console.log("forecast: ", forecast);
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundImage: `url(${Background})`,
          flex: 1,
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <div style={{ display: "flex", height: "100%" }}>
        <div>
          <div
            style={{
              display: "flex",
              paddingLeft: 64,
              paddingTop: 64,
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <SearchIcon
                style={{
                  alignSelf: "center",
                  height: 30,
                  fontSize: 30,
                  marginRight: 16,
                }}
                color="#fff"
              />
              <Button
                onClick={() => {
                  navigate("/search");
                }}
                style={{
                  height: 30,
                  fontSize: 15,
                  alignSelf: "center",
                  backgroundColor: "#fff0",
                }}
                variant="contained"
              >
                Search by City
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: 120 }}>{currentWeather.temp_c}</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 32,
                }}
              >
                <h1>Indore</h1>
                <h3>{new Date().toDateString()}</h3>
              </div>
              <FilterDramaIcon
                style={{
                  alignSelf: "center",
                  height: 80,
                  fontSize: 100,
                }}
                color="#fff"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 0,
            backdropFilter: "blur(8px)",
            height: "100%",
            paddingTop: 32,
            paddingInline: 64,
            flexDirection: "column",
            width: "30%",
            backgroundColor: "#0005",
          }}
        >
          <h4 style={{ color: "#fff" }}>Current Weather Details</h4>
          <h3 style={{ color: "#fff" }}>{currentWeather.condition?.text}</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TwoDetails
              text1={"Temp max"}
              text2={`${forecast?.forecastday?.[0]?.day?.maxtemp_c}°`}
              Icon={DeviceThermostatIcon}
              iconColor={"#f99"}
            />
            <TwoDetails
              text1={"Temp min"}
              text2={`${forecast?.forecastday?.[0]?.day?.mintemp_c}°`}
              Icon={DeviceThermostatIcon}
              iconColor={"#44f"}
            />
            <TwoDetails
              text1={"Humidity"}
              text2={`${currentWeather.humidity}%`}
              Icon={WaterDropIcon}
              iconColor={"#fff"}
            />
            <TwoDetails
              text1={"Cloudy"}
              text2={`${currentWeather.cloud}%`}
              Icon={FilterDramaIcon}
              iconColor={"#fff"}
            />
            <TwoDetails
              text1={"Wind"}
              text2={`${currentWeather.wind_kph}km/5`}
              Icon={AirIcon}
              iconColor={"#fff"}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#fff",
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <div>
            <h4 style={{ color: "#fff" }}>Hourly Forecast</h4>
            <TwoDetailsVariant
              text1={
                forecast?.forecastday?.[0]?.hour?.[0]?.time?.split(" ")?.[1]
              }
              text2={`${forecast?.forecastday?.[0]?.hour?.[0]?.temp_c}°`}
              text3={forecast?.forecastday?.[0]?.hour?.[0]?.condition?.text}
              Icon={AcUnitIcon}
              iconColor={"#fff"}
            />
            <TwoDetailsVariant
              text1={
                forecast?.forecastday?.[0]?.hour?.[1]?.time?.split(" ")?.[1]
              }
              text2={`${forecast?.forecastday?.[0]?.hour?.[1]?.temp_c}°`}
              text3={forecast?.forecastday?.[0]?.hour?.[1]?.condition?.text}
              Icon={AcUnitIcon}
              iconColor={"#fff"}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#fff",
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <div>
            <h4 style={{ color: "#fff" }}>5 Day Forecast</h4>
          </div>
        </div>
      </div>
    </>
  );
}
