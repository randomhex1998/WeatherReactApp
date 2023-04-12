import React from "react";
import TehranImg from "../asset/Tehran.jpg";

const Main = () => {
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
