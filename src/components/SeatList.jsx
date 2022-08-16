import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";
const SeatList = () => {
  const { ticketList } = useSelector((state) => state.tickets);
  return (
    <d>
      <h1 className="text-center fs-3 fw-bold text-warning">
        ĐẶT VÉ XEM PHIM CYBERLEARN.VN
      </h1>
      <h4 className="text-center text-white mt-3">Màn hình </h4>
      <div className="d-flex justify-content-center">
        <div className="screen">
          <div className="image"></div>
        </div>
      </div>
      <div className="seatGroup ">
        <div className=" mx-5 text-warning d-flex text-center justify-content-around align-items-center fs-5 fw-bolder ">
          {ticketList[0].seats.map((item, index) => {
            return (
              <p key={index} className="fs-4 ms-2 " style={{ width: 0 }}>
                {index + 1}
              </p>
            );
          })}
        </div>
        {ticketList.map((rowSeat, index) => {
          return (
            <div key={index}>
              <div className="d-flex justify-content-between text-warning fs-5 fw-bolder mx-5 mb-2">
                <p style={{ width: "0px" }} className="fw-bolder mt-2 me-3">
                  {rowSeat.row}
                </p>

                <SeatItem rowSeat={rowSeat} />
              </div>
            </div>
          );
        })}
      </div>
    </d>
  );
};

export default SeatList;
