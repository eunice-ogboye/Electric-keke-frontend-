export const initialState = {
  onboardingType: "main",
  homePage: "main",
  modal: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { onboardingType, homePage, modal } = payload;

  switch (type) {
    case "changeBg":
      localStorage.setItem("onboardingType", JSON.stringify(onboardingType));
      return { ...state, onboardingType };
    case "homePage":
      return { ...state, homePage };
    case "modal":
      return { ...state, modal };
    default:
      return state;
  }
};
