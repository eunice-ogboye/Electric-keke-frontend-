import { Routes, Route } from "react-router-dom";
import OnboardStartPage from "../../components/onboarding/OnboardStartPage";
import OnboardRegister from "../../components/onboarding/OnboardRegister";

const Onboarding = () => {
  return (
    <Routes>
      <Route index element={<OnboardStartPage />} />
      <Route path="/registration" element={<OnboardRegister />} />
    </Routes>
  );
};

export default Onboarding;
