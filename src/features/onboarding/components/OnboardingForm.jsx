import { addItemToLs, getItemFromLs } from "@/utils/ls";
import React, { Children, cloneElement, isValidElement, useState } from "react";

const OnboardingForm = ({ children, runOnFinish, runOnStart }) => {
  const [currentProcessIndex, setCurrentProcessIndex] = useState(
    getItemFromLs("onboarding-process") || 0
  );

  const nextProcess = () => {
    const nextProcessIndex = currentProcessIndex + 1;

    if (nextProcessIndex < children.length) {
      setCurrentProcessIndex(nextProcessIndex);
      addItemToLs("onboarding-process", nextProcessIndex);
    } else {
      runOnFinish();
    }
  };

  const prevProcess = () => {
    const prevProcessIndex = currentProcessIndex - 1;

    if (prevProcessIndex >= 0) {
      setCurrentProcessIndex(prevProcessIndex);
      addItemToLs("onboarding-process", prevProcessIndex);
    } else {
      runOnStart();
    }
  };


  const currentChild = Children.toArray(children)[currentProcessIndex];
  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, {
      nextProcess,
      prevProcess,
    });
  }

  return currentChild;
};

export default OnboardingForm;
