import { addItemToLs, getItemFromLs } from "../../../../lib/ls";

export const rideStatusUpdateRequest = (status) => {
  const currentRide = getItemFromLs("current-ride");
  const { id } = currentRide;
  return { id, status };
};

export const rideStatusLsUpdate = (status) => {
  const currentRide = getItemFromLs("current-ride");
  addItemToLs("current-ride", { ...currentRide, status });
};
