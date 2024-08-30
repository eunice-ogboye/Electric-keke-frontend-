import { useGlobalContext } from "../context";
import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title + " " + "EcoRide";
  }, [title]);
};

export const useFormType = (type) => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: "changeBg", payload: { imageType: type } });
  }, [type]);
};
