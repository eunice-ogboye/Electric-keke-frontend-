import { addItemToLs, deletItemFromLs, getItemFromLs } from "../../../lib/ls";
import { clientRequest } from "../client";


const registerUser = async (formData) => {
  const role = getItemFromLs("registeringAs");
  const {
    fullname,
    email,
    password,
    checkPass,
    phone,
    state,
    address,
    message_type,
  } = formData;

  try {
    const { data } = await clientRequest({
      url: "/auth/register-user/",
      method: "post",
      data: {
        fullname,
        address: address,
        state_of_residence: state,
        role,
        email,
        phone,
        password,
        re_password: checkPass,
        message_type,
      },
    });

    console.log(data);
    addItemToLs("userId", data.id);
    // wont delete register as it is needed to detemine verification
    // deletItemFromLs("registerAs");
  } catch (error) {
    const { data } = error.response;
    const dataValues = Object.keys(data);
    let constructedMsg = "";
    dataValues.forEach((item) => {
      if (item === "phone" || item === "email") {
        constructedMsg += ` ${item},`;
      }
    });
    constructedMsg += " has been used";
    throw new Error(constructedMsg);
  }
};

export default registerUser;
