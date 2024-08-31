export const initialState = {
  onboardingType: "main",
  homePage: "main",
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { onboardingType, homePage } = payload;
  
  switch (type) {
    case "changeBg":
      localStorage.setItem("onboardingType", JSON.stringify(onboardingType));
      return { ...state, onboardingType };
    case "homePage":
      return { ...state, homePage };
    default:
      return state;
  }
};
