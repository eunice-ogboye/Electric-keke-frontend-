import { addItemToLs, getItemFromLs } from "./ls";

export const rideStatusUpdateRequest = (status) => {
  const currentRide = getItemFromLs("current-ride");
  const { id } = currentRide;
  return { id, status };
};

export const rideStatusLsUpdate = (status) => {
  const currentRide = getItemFromLs("current-ride");
  addItemToLs("current-ride", { ...currentRide, status });
};

const getValuesFromObject = (obj) => {
  return Object.values(obj);
};

const getTotal = (data) => {
  const total = data.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return total;
};
