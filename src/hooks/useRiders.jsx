import { GetAvailableRiders } from "../services/bookings";
import { getItemFromLs } from "../utils/ls";
import { useEffect, useState } from "react";

export const useRiders = (key) => {
  const [isLoading, setIsLoading] = useState(true);
  const [riders, setRiders] = useState(getItemFromLs(key) || null);


  useEffect(() => {
    if (!riders) {
      (async() => {
        setIsLoading(true);
        try {
          const data = await GetAvailableRiders();
          setRiders(data);
          setIsLoading(false)
        } catch (error) {
          console.log(error);
        }
      })
    }
  }, [])

  return {isLoading, riders}
}