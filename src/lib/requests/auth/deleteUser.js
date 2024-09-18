import { clientRequest } from "./client";

const deleteUser = async () => {
  console.log("deleting user");
  try {
    const { data } = await clientRequest({
      url: "/auth/delete-account/",
      method: "delete",
    });
    console.log(data, 'this is data i am get');
  } catch (error) {
    console.log(error, 'from deleteuser');
    throw new Error("something is wrong");
    return error;
  }
};

export default deleteUser;
