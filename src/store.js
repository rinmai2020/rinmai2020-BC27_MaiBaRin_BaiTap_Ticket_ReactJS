// import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import bookTicketReducer from "./reducers/seatReducer";
const store = configureStore({
  reducer: {
    tickets: bookTicketReducer,
  },
});

export default store;
