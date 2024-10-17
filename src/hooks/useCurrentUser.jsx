import { getItemFromLs } from "../utils/ls";
import { useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(getItemFromLs("user") || null);
  
  return user;
};
