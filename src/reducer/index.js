export const initialState = {
  homePage: "login",
  driverAuthProcess: "Identity",
  modal: false,
  modalContent: "ride",
  rider: null,
  support: "faq",
  supportOption: "General",
  user: null,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const {
    homePage,
    modal,
    modalContent,
    rider,
    support,
    user,
    driverAuthProcess,
  } = payload;

  switch (type) {
    case "driverAuth":
      return { ...state, driverAuthProcess };
    case "changeHomePage":
      localStorage.setItem("homePage", JSON.stringify(homePage));
      return { ...state, homePage };
    case "modal":
      // console.log(modal);
      return { ...state, modal };
    case "modalContent":
      return { ...state, modal: true, modalContent };
    case "rider":
      localStorage.setItem("rider", JSON.stringify(rider));
      return { ...state, rider };
    case "support":
      return { ...state, support };
    case "user":
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, user };
    default:
      return state;
  }
};
