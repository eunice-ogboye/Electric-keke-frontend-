import { Routes, Route } from "react-router-dom";
import OnboardStartPage from "@/features/onboarding/components/OnboardStartPage";
import OnboardRegister from "@/features/onboarding/components/OnboardRegister";

const Onboarding = () => {
  return (
    <Routes>
      <Route index element={<OnboardStartPage />} />
      <Route path="/registration" element={<OnboardRegister />} />
    </Routes>
  );
};

export default Onboarding;
