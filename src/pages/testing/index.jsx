import React from "react";
import riders from "../../mock-data/riders";
import { testWithRiders } from "./hoc/testWithRiders";
import RegularList from "../../components/shared/RegularList";
import TestRider from "./components/TestRider";

const UserRiderComponent = testWithRiders(TestRider);

const Testing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 home-pad">
      <RegularList
        itemsToDisplay={riders}
        resourceName="rider"
        itemComponent={UserRiderComponent}
      />
    </div>
  );
};

export default Testing;
