import PropTypes from "prop-types";
import StepNav from "./Steps/StepNav"; // Assuming StepNav is exported correctly

export default function Indicator({ currentStep }) {
  return (
    <div className="w-full h-full rounded-lg text-white p-2 md:p-10 z-40">
      <div className="flex md:flex-col justify-center space-x-5 md:space-y-8 md:space-x-0">
        <StepNav stage="1" info="Your info" isActive={currentStep === 1} />
        <StepNav stage="2" info="Select plan" isActive={currentStep === 2} />
        <StepNav stage="3" info="Add-ons" isActive={currentStep === 3} />
        <StepNav
          stage="4"
          info="Summary"
          isActive={currentStep === 4 || currentStep === 5}
        />
      </div>
    </div>
  );
}

Indicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
