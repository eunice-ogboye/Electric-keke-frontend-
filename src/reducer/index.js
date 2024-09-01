export const initialState = {
  onboardingType: "main",
  homePage: "main",
  modal: false,
  modalContent: "ride",
  rider: null
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { onboardingType, homePage, modal, modalContent, rider } = payload;

  switch (type) {
    case "changeBg":
      localStorage.setItem("onboardingType", JSON.stringify(onboardingType));
      return { ...state, onboardingType };
    case "homePage":
      return { ...state, homePage };
    case "modal":
      return { ...state, modal };
    case "modalContent":
      return { ...state, modal: true, modalContent };
    case "rider":
      // console.log(rider)
      localStorage.setItem("rider", JSON.stringify(rider));
      return { ...state, rider };
    default:
      return state;
  }
};
