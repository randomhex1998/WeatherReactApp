import React, { useState } from "react";
import axios from "axios";
import sunSet from "../asset/sunset.jpg";

const Main = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=58a2d482587b71e599e2ec23c971e402`;

  const SearchHandler = (event) => {
    if (event.key === "Enter") {
      axios.get(URL).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div
      className="main-area"
      style={{
        backgroundImage: `${
          data.name == location
            ? `url(${require(`../asset/${location}.jpg`)}) `
            : `url(${sunSet})`
        }`,
      }}>
      <div className="container">
        <div className="search-input">
          <input
            type="text"
            className="search"
            placeholder="Enter Your Location ..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={SearchHandler}
          />
        </div>
        <div className="weth-title-area">
          <p className="weth-title">{data.name}</p>
          <h2 className="weth-temp">
            {data.main ? ((data.main.temp - 32) / 1.8).toFixed(1) + "°C" : null}
          </h2>
        </div>
        <div className="bottom-box-area">
          <div className="bottom-box FeelsLike">
            <h4>{data.main ? data.main.feels_like : null}</h4>
            <p>FeelsLike</p>
          </div>
          <div className="bottom-box Humidity">
            <h4>{data.main ? data.main.humidity : null}</h4>
            <p>Humidity</p>
          </div>
          <div className="bottom-box WindSpeed">
            <h4>{data.wind ? data.wind.speed : null}</h4>
            <p>WindSpeed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
