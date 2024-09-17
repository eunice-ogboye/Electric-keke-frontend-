import { addItemToLs, getItemFromLs } from "../../lib/ls";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rider: "",
  booking_type: "",
  origin: "",
  destination: "",
  price: "",
  package_details: "",
};

const bookRideSlice = createSlice({
  name: "bookride-data",
  initialState,
  reducers: {
    updateBookingData(state, action) {
      const { key, value } = action.payload;
      let lsBookingData = getItemFromLs("book-data") || {};
      lsBookingData = {
        ...lsBookingData,
        [key]: value,
      };
      addItemToLs("book-data", lsBookingData);
      return { ...state, [key]: value };
    },
  },
});

export const { updateBookingData } = bookRideSlice.actions;

export default bookRideSlice.reducer;
