import { updateBookingData } from "../store/slices/bookride-slice";
import { changeInputValue } from "../store/slices/form-data-slice";
import {
  alertUser,
  changeAuthPage,
  changeModalContent,
  changeVerificationType,
  hideAlert,
  selectARider,
  storeListOfRiders,
  toggleModal,
} from "../store/slices/global-slice";
import { useDispatch } from "react-redux";

const dispatchables = () => {
  const dispatch = useDispatch();

  
  const changeAuthenticationPage = (page) => {
    dispatch(changeAuthPage(page));
  };
  
  const chooseOtpMethod = (method) => {
    console.log(method);
    dispatch(changeInputValue({ key: "message_type", value: method }));
  };

  const changeAuthFormData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(key, value);
    dispatch(changeInputValue({ key, value }));
  };

  const chooseRider = (item) => {
    dispatch(selectARider(item));
  }
  
  const flipModal = (bool) => {
    dispatch(toggleModal(bool));
  };

  const inputDataForBookingRequest = (key, value) => {
    dispatch(updateBookingData({key, value}))
  }

  const openModalWithContent = (content) => {
    dispatch(changeModalContent(content));
  };

  const switchVerificationType = (v_type) => {
    dispatch(changeVerificationType(v_type));
  };

  const showAlert = (msg, time = 5000) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert());
    }, time);
  };

  const updateDriversList = (data) => {
    dispatch(storeListOfRiders(data));
  };


  return {
    chooseOtpMethod,
    changeAuthenticationPage,
    changeAuthFormData,
    chooseRider,
    flipModal,
    inputDataForBookingRequest,
    openModalWithContent,
    showAlert,
    switchVerificationType,
    updateDriversList,
  };
};

export default dispatchables;
