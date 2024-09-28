import { GetAvailableRiders } from "../services/bookings";
import { getItemFromLs } from "../utils/ls";
import { useEffect, useState } from "react";
import useReroute from "./useReroute";

export const useRiders = (key) => {
  const [isLoading, setIsLoading] = useState(true);
  const [riders, setRiders] = useState(getItemFromLs(key) || null);
  const rerouting = useReroute();

  useEffect(() => {
    if (!riders) {
      (async () => {
        setIsLoading(true);
        try {
          const data = await GetAvailableRiders();
          setRiders(data);
          setIsLoading(false);
        } catch (error) {
          const { status } = error.data;
          rerouting(status);
        }
      })();
    }
  }, []);

  return { isLoading, riders };
};
