import { addItemToLs, getItemFromLs } from "@/utils/ls";
import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const openUploadModal = () => {
    console.log(isUploadModalOpen);
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    console.log(isUploadModalOpen)
    setIsUploadModalOpen(false);
  };

  return (
    <OnboardingContext.Provider
      value={{ isUploadModalOpen, openUploadModal, closeUploadModal }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useGlobalOnboardContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("no onboarding context");
  }
  return context;
};
