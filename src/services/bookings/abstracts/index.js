import { addItemToLs, getItemFromLs } from "../../../utils/ls";

export const rideStatusUpdateRequest = (status) => {
  const currentRide = getItemFromLs("current-ride");
  const { id } = currentRide;
  return { id, status };
};

export const rideStatusLsUpdate = (status) => {
  const currentRide = getItemFromLs("current-ride");
  addItemToLs("current-ride", { ...currentRide, status });
};
