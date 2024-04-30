import PropTypes from "prop-types";
import StepNav from "./Steps/StepNav"; // Assuming StepNav is exported correctly

export default function Indicator({ currentStep }) {
  return (
    <div className="w-full h-full rounded-lg text-white p-10 z-40">
      <div className="flex flex-col space-y-8">
        <StepNav
          stage="1"
          info="Your info"
          navlink=""
          isActive={currentStep === 1}
        />
        <StepNav
          stage="2"
          info="Select plan"
          navlink="steptwo"
          isActive={currentStep === 2}
        />
        <StepNav
          stage="3"
          info="Add-ons"
          navlink="stepthree"
          isActive={currentStep === 3}
        />
        <StepNav
          stage="4"
          info="Summary"
          navlink="stepfour"
          isActive={currentStep === 4}
        />
      </div>
    </div>
  );
}

Indicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
