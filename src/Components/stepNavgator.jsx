import { useContext } from "react";
import { ActionContext } from "./Store";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import CongratulationCompo from "./CongratulationCompo";

export const StepNavigator = () => {
  const { currentStep, moveToNextStep } = useContext(ActionContext);

  // Render steps based on current step
  switch (currentStep) {
    case 1:
      return <Step1 onComplete={moveToNextStep} />;
    case 2:
      return <Step2 onComplete={moveToNextStep} />;
    case 3:
      return <Step3 onComplete={moveToNextStep} />;
    case 4:
      return <Step4 onComplete={moveToNextStep} />;
    case 5:
      return <CongratulationCompo />;
    default:
      return null;
  }
};
