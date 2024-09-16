import { addItemToLs } from "../../../lib/ls";
import { axiosCustomizedRequest } from "../axiosCustomized";

const registerUser = async (formData) => {
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
  console.log(formData);
  try {
    const { data } = await axiosCustomizedRequest({
      url: "/auth/register-user/",
      method: "post",
      data: {
        fullname,
        address: address,
        state_of_residence: state,
        role: "User",
        email,
        phone,
        password,
        re_password: checkPass,
        message_type,
      },
    });

    console.log(data);
    addItemToLs("userId", data.id);
  } catch (error) {
    const { data } = error.response;
    const dataValues = Object.values(data);
    console.log(dataValues);
    console.log(error);
    throw new Error("Problem i am tired");
  }
};

export default registerUser;
