import React from "react";
import SeatList from "./SeatList";
import SeatDeails from "./SeatDeails";
import "./style.css";
const Movie = () => {
  return (
    <div className="bground">
      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-8  ">
            <SeatList />
          </div>
          <div className="col-md-4">
            <SeatDeails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
