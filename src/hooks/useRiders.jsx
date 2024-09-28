import { GetAvailableRiders } from "../services/bookings";
import { getItemFromLs } from "../utils/ls";
import { useEffect, useState } from "react";

export const useRiders = (key) => {
  const [isLoading, setIsLoading] = useState(true);
  const [riders, setRiders] = useState(getItemFromLs(key) || null);


  useEffect(() => {
    console.log("whats popping")
    if (!riders) {
      (async() => {
        setIsLoading(true);
        try {
          const data = await GetAvailableRiders();
          setRiders(data);
          // console.log(data)
          setIsLoading(false)
        } catch (error) {
          console.log(error);
        }
      })()
    }
  }, [])

  return {isLoading, riders}
}