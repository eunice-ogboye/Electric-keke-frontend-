import { useDispatch } from "react-redux";
// import { useGlobalContext } from "../context";
import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title + " " + "EcoRide";
  }, [title]);
};

