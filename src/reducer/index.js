export const initialState = {
  homePage: "main",
  driverAuthProcess: "Identity",
  // homePage: "main",
  modal: false,
  modalContent: "ride",
  rider: null,
  support: "faq",
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
    case "support":
      return { ...state, support };
    case "user":
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, user };
    default:
      return state;
  }
};
