import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
const SeatItem = ({ rowSeat }) => {
  const { bookedList } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const handleTicked = (seat) => {
    dispatch({ type: "tickedSeat", seat });
  };
  return (
    <>
      {rowSeat.seats.map((seat, index) => {
        const indexSeat = bookedList.findIndex(
          (item) => item.name === seat.name
        );
        return (
          <button
            key={index}
            disabled={seat.booked}
            className={cn(
              `seat ${
                indexSeat !== -1
                  ? "bg-success text-white "
                  : "white border border-warning"
              }`,
              {
                seatBooked: seat.booked,
              }
            )}
            onClick={() => handleTicked(seat)}
          >
            {index + 1}
          </button>
        );
      })}
    </>
  );
};

export default SeatItem;
