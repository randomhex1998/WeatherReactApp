import React, { useState } from "react";
import axios from "axios";
import TehranImg from "../asset/Tehran.jpg";

const Main = () => {
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=58a2d482587b71e599e2ec23c971e402";
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const SearchHandler = (event) => {
    if (event.key === "Enter") {
      axios.get(URL).then((response) => {
        console.log(response.data);
      });
    }
  };
  return (
    <div className="main-area" style={{ backgroundImage: `url(${TehranImg})` }}>
      <div className="container">
        <div className="search-input">
          <input
            type="text"
            className="search"
            placeholder="Enter Your Location ..."
          />
        </div>
        <div className="weth-title-area">
          <p className="weth-title">Tehran</p>
          <h2 className="weth-temp">15 F</h2>
        </div>
        <div className="bottom-box-area">
          <div className="bottom-box FeelsLike">
            <h4>15</h4>
            <p>FeelsLike</p>
          </div>
          <div className="bottom-box Humidity">
            <h4>15</h4>
            <p>Humidity</p>
          </div>
          <div className="bottom-box WindSpeed">
            <h4>6 MPH</h4>
            <p>WindSpeed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
