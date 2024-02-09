import React from "react";
import { CaraniOg } from "./CaraniOg";
import "./style.css";

export const DefaultHomePage = () => {
  return (
    <div className="default-home-page">
      <div className="div">
        <div className="overlap">
          <CaraniOg
            className="car-ani"
            leftCar="left car 1.png"
            middleCar="Middle Car 1.png"
            property1="no-hover"
            rightCar="right car 1.png"
          />
          <img className="wave" alt="Wave" src="wave.png" />
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper">
                2025 Avery Carshow
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                New Models. New Innovations.
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-2">Click cars to explore</span>
            </p>
          </div>
          <div className="information">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src="Rectangle 7.png" />
              <div className="text-wrapper-3">Information</div>
            </div>
          </div>
          <div className="concessions">
            <div className="overlap-group">
              <img className="img" alt="Rectangle" src="Rectangle 5.png" />
              <div className="text-wrapper-4">Concessions</div>
            </div>
          </div>
          <div className="buy-tickets">
            <div className="overlap-group">
              <img className="img" alt="Rectangle" src="Rectangle 6.png" />
              <div className="text-wrapper-4">Buy Tickets</div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="overlap-2">
            <img className="arrow" alt="Arrow" src="Arrow.png" />
            <div className="text-wrapper-5">AveryMotors</div>
          </div>
        </div>
        <div className="upper-bar-thingy">
          <div className="overlap-3">
            <div className="overlap-group-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-6">Get Tickets</div>
            </div>
            <div className="logo">
              <img className="element" alt="Element" src="Logo.png" />
              <img className="arrow-2" alt="Arrow" src="Arrow.png" />
            </div>
            <div className="text-wrapper-7">Events</div>
            <div className="text-wrapper-8">Social Media</div>
          </div>
        </div>
      </div>
    </div>
  );
};
