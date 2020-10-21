import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={12}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
            price={8.5}
          />
          <Product
            id={56}
            title="Whirlpool Hob 4 Burner Auto Ignition Gas Stove (Elite Hybrid HD 704 Brass Gas Hob)"
            image="https://m.media-amazon.com/images/I/41MMNYQWlNL.__AC_SY200_.jpg"
            rating={3}
            price={3.5}
          />
        </div>
        <div className="home__row">
          <Product
            id={34}
            title="Apple iPhone 11 (128GB) - Black"
            image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg"
            rating={5}
            price={29.99}
          />
          <Product
            id={78}
            title="Samsung 6.5 kg Semi-Automatic 5 Star Top Loading Washing Machine (WT667QPNDPGXTL, White and Maroon, Double Storm Pulsator)"
            image="https://m.media-amazon.com/images/I/61wzb+5A65L._AC_UL320_.jpg"
            rating={5}
            price={55.5}
          />
          <Product
            id={91}
            title="Bouncefit Smartwatch Blue SFT-2024 Activity Tracker, Blood Pressure, Steps, Heart Rate, Touchscreen iOS and Android Compatible, Water Resistant, Square Black Strap, 1.5 Display"
            image="https://m.media-amazon.com/images/I/5166NE06GNL._AC_UL320_.jpg"
            rating={2}
            price={10.99}
          />
        </div>
        <div className="home__row">
          <Product
            id={95}
            title="HP 21.5-inch (54.6 cm) Ultra-Slim LED Backlit Gaming Monitor - 16:9 FHD, Micro-Edge, 75 Hz Refresh Rate, AMD Free Sync- HP 22F Display - 3AJ92AA#ACJ (Silver)"
            image="https://images-na.ssl-images-amazon.com/images/I/71JWdAjNvGL._SL1500_.jpg"
            rating={1}
            price={22}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
