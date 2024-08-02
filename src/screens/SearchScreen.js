import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core/";
import getCurrentweather from "../utils/getCurrentWeather";

export default function SearchScreen() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
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
            getCurrentweather({ location: city }).then((data) =>
              setCurrentWeather(data)
            );
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
  );
}
