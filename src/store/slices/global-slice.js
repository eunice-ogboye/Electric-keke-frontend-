import { addItemToLs, getItemFromLs } from "../../utils/ls";
import { createSlice } from "@reduxjs/toolkit";
import { LockScroll, UnlockScroll } from "../../utils/ScrollLock";

const initialState = {
  alert: { show: false, msg: "alert" },
  modal: false,
  modalContent: "ride",
  modalWidth: "",
  nextDriverAuth: null,
  ridersList: getItemFromLs("ridersList") || [],
  rider: null,
  support: "faq",
  registerAs: "User",
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
    toggleModal(state, action) {
      const modal = action.payload;
      modal ? LockScroll() : UnlockScroll();
      console.log(modal);
      return { ...state, modal };
    },
    changeModalContent(state, action) {
      const { modalContent, modalWidth, nextDriverAuth } = action.payload;
      LockScroll();
      return {
        ...state,
        modal: true,
        modalContent,
        modalWidth,
        nextDriverAuth,
      };
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
    changeVerificationType(state, action) {
      const verificationType = action.payload;
      console.log(verificationType);
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
