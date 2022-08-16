import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SeatDeails = () => {
  const { bookedList } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const handleRemove = (seatName) => {
    dispatch({ type: "removeSeat", seatName });
  };
  return (
    <>
      <h1 className="text-center text-white fs-4 fw-bold pb-5 ">
        DANH SÁCH GHẾ BẠN CHỌN
      </h1>
      <div className="mt-5 text-white">
        <div>
          <button className="typeSeat bg-warning me-3 mb-3"></button>
          <span className="fw-bold">Ghế đã đặt</span>
        </div>
        <div>
          <button className="typeSeat bg-success me-3 mb-3"></button>
          <span className="fw-bold">Ghế đang chọn</span>
        </div>
        <div>
          <button className="typeSeat border border-warning bg-white me-3"></button>
          <span className="fw-bold">Ghế chưa đặt</span>
        </div>
      </div>
      <table className="table mt-5 table-bordered">
        <thead>
          <tr className="text-white fw-bold">
            <td>Số ghế</td>
            <td>Giá</td>
            <td>Huỷ</td>
          </tr>
        </thead>
        <tbody className="text-warning fw-bold">
          {bookedList.map((seat, index) => {
            return (
              <tr key={index}>
                <td>{seat.name}</td>
                <td>{Number(seat.price).toLocaleString()}</td>
                <td>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-danger"
                    onClick={() => handleRemove(seat.name)}
                  >
                    X
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="text-white  fw-bold">
          <tr>
            <td>Tổng tiền</td>
            <td>
              {bookedList
                .reduce((total, seat) => {
                  return (total += seat.price);
                }, 0)
                .toLocaleString()}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default SeatDeails;
