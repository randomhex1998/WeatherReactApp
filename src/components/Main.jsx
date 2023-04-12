import React from "react";
import TehranImg from "../asset/Tehran.jpg";

const Main = () => {
  return (
    <div className="main-area" style={{ backgroundImage: `url(${TehranImg})` }}>
      <div className="container">
        <div className="search-input">
          <input type="text" className="search" />
        </div>
        <div className="weth-title-area">
          <p className="weth-title">Tehran</p>
          <h2 className="weth-temp">15 F</h2>
        </div>
        <div className="bottom-box">
          <div className="Feels Like">15</div>
          <div className="Humidity">49</div>
          <div className="Wind Speed">123 MPH</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
