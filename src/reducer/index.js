export const initialState = {
  onboardingType: "main",
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { onboardingType } = payload;
  switch (type) {
    case "changeBg":
      localStorage.setItem("onboardingType", JSON.stringify(onboardingType));
      return { ...state, onboardingType };
    default:
      return state;
  }
};
