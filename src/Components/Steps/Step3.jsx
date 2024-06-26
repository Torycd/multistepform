import PropTypes from "prop-types";
import { useState, useContext } from "react";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";
import { ActionContext } from "../Store";

export default function Step3({ onComplete }) {
  const { updateInfo, moveToPreviousStep } = useContext(ActionContext);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleSubmit = () => {
    const selectedInfo = {
      onlineService: selectedCheckboxes.onlineService,
      largerStorage: selectedCheckboxes.largerStorage,
      customizableProfile: selectedCheckboxes.customizableProfile,
    };

    updateInfo(selectedInfo);
    onComplete();
  };

  return (
    <div className="py-10 h-full w-full flex flex-col">
      <HeadStep
        heading="Personal Info"
        subHeading="Add-ons help enhance your gaming experience."
      />

      <div className="flex flex-col justify-between h-full mt-4 gap-4">
        {/* Checkbox for Online Service */}
        <div className="flex flex-col gap-4">
          <div
            className={`flex justify-between p-5 rounded-lg border-2 border-blue-800 hover:bg-gray-300 ${
              selectedCheckboxes.onlineService && "bg-gray-300"
            }`}
          >
            <div className="flex gap-10">
              <input
                type="checkbox"
                checked={selectedCheckboxes.onlineService}
                onChange={() => handleCheckboxChange("onlineService")}
              />
              <div className="font-bold">
                <h2>Online service</h2>
                <p className="opacity-50">Access to multiplayer games</p>
              </div>
            </div>
            <p>+$1/mo</p>
          </div>
          {/* Checkbox for Larger Storage */}
          <div
            className={`flex justify-between p-5 rounded-lg border-2 border-blue-800 hover:bg-gray-300 ${
              selectedCheckboxes.largerStorage && "bg-gray-300"
            }`}
          >
            <div className="flex gap-10">
              <input
                type="checkbox"
                checked={selectedCheckboxes.largerStorage}
                onChange={() => handleCheckboxChange("largerStorage")}
              />
              <div className="font-bold">
                <h2>Larger storage</h2>
                <p className="opacity-50">Access to multiplayer games</p>
              </div>
            </div>
            <p>+$2/mo</p>
          </div>
          {/* Checkbox for Customizable Profile */}
          <div
            className={`flex justify-between p-5 rounded-lg border-2 border-blue-800 hover:bg-gray-300 ${
              selectedCheckboxes.customizableProfile && "bg-gray-300"
            }`}
          >
            <div className="flex gap-10">
              <input
                type="checkbox"
                checked={selectedCheckboxes.customizableProfile}
                onChange={() => handleCheckboxChange("customizableProfile")}
              />
              <div className="font-bold">
                <h2>Customizable Profile</h2>
                <p className="opacity-50">Customize theme on your profile</p>
              </div>
            </div>
            <p>+$2/mo</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between font-bold">
          <button
            to="/steptwo"
            className="px-4 py-3"
            onClick={moveToPreviousStep}
          >
            Go Back
          </button>
          {/* Button to submit and navigate to the next step */}
          <Button type="button" butName="Next Step" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

Step3.propTypes = {
  onComplete: PropTypes.func,
};
