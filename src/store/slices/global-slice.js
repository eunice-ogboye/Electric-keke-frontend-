import { addItemToLs, getItemFromLs } from "../../lib/ls";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: { show: false, msg: "alert" },
  authPage: getItemFromLs("authPage") || "",
  driverAuthProcessStage: "Identity",
  modal: false,
  modalContent: "ride",
  ridersList: getItemFromLs("ridersList") || [],
  rider: null,
  support: "faq",
  supportOption: "General",
  registerAs: "",
  verificationType: "activate",
  loading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    startLoad(state) {
      return { ...state, loading: true };
    },
    finishLoad(state) {
      return { ...state, loading: false };
    },
    storeListOfRiders(state, action) {
      const ridersList = action.payload;
      addItemToLs("ridersList", ridersList);
      return { ...state, ridersList };
    },
    selectARider(state, action) {
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
      // console.log(authPage);
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
    moveToNextDriveAuthStage(state, action) {
      const driverAuthProcessStage = action.payload;
      return { ...state, driverAuthProcessStage };
    },
    changeVerificationType(state, action) {
      const verificationType = action.payload;
      return { ...state, verificationType };
    },
  },
});

export const {
  storeListOfRiders,
  hideAlert,
  alertUser,
  changeAuthPage,
  toggleModal,
  changeModalContent,
  chooseSupport,
  changeRegistryMethod,
  moveToNextDriveAuthStage,
  selectARider,
  changeVerificationType,
  startLoad,
  finishLoad,
} = globalSlice.actions;

export default globalSlice.reducer;
