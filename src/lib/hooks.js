import { useDispatch } from "react-redux";
// import { useGlobalContext } from "../context";
import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title + " " + "EcoRide";
  }, [title]);
};

// export const useFormType = (type) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch({ type: "changeHomePage", payload: { imageType: type } });
//   }, [type]);
// };
