export const initialState = {
  authType: "main",
  homePage: "main",
  modal: false,
  modalContent: "ride",
  rider: null,
  support: "faq",
  user: null,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const {
    authType,
    homePage,
    modal,
    modalContent,
    rider,
    support,
    userNumber,
    user,
  } = payload;

  switch (type) {
    case "changeAuthBg":
      localStorage.setItem("authType", JSON.stringify(authType));
      return { ...state, authType };
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
      const users = [{ role: "rider" }, { role: "passenger" }];
      localStorage.setItem("user", JSON.stringify(users[userNumber]));
      return { ...state, user: users[userNumber] };
    case "setUser":
      return { ...state, user };
    default:
      return state;
  }
};
