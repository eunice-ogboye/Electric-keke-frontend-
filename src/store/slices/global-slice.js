import { add } from "date-fns";
import { addItemToLs, getItemFromLs } from "../../lib/ls";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: { show: false, msg: "alert" },
  authPage: getItemFromLs("authPage") || "",
  driverAuthProcess: "Identity",
  modal: false,
  modalContent: "ride",
  riders: getItemFromLs('riders') || [],
  rider: null,
  support: "faq",
  supportOption: "General",
  registerAs: "",
  verificationType: "activate",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    ridersListing(state, action) {
      const riders = action.payload;
      addItemToLs('riders', riders);
      return { ...state, riders };
    },
    riderSelection(state, action) {
      const rider = action.payload;
      addItemToLs("rider", rider);
      return { ...state, rider };
    },
    alertUser(state, action) {
      const msg = action.payload;
      return {
        ...state,
        alert: {
          show: true,
          msg,
        },
      };
    },
    hideAlert(state, action) {
      return { ...state, alert: { show: false, msg: "" } };
    },
    changeAuthPage(state, action) {
      const authPage = action.payload;
      console.log(authPage);
      addItemToLs("authPage", authPage);
      return { ...state, authPage };
    },
    toggleModal(state, action) {
      const modal = action.payload;
      console.log(modal);
      return { ...state, modal };
    },
    changeModalContent(state, action) {
      const modalContent = action.payload;
      console.log(modalContent);
      return { ...state, modal: true, modalContent };
    },
    chooseSupport(state, action) {
      const support = action.payload;
      return { ...state, support };
    },
    changeRegistryMethod(state, action) {
      const registerAs = action.payload;
      addItemToLs("registeringAs", registerAs);
      return { ...state, registerAs };
    },
    driveAuth(state, action) {
      const driverAuthProcess = action.payload;
      return { ...state, driverAuthProcess };
    },
    changeVerificationType(state, action) {
      const verificationType = action.payload;
      return { ...state, verificationType };
    },
  },
});

export const {
  ridersListing,
  hideAlert,
  alertUser,
  changeAuthPage,
  toggleModal,
  changeModalContent,
  chooseSupport,
  changeRegistryMethod,
  driveAuth,
  riderSelection,
  changeVerificationType,
} = globalSlice.actions;

export default globalSlice.reducer;
