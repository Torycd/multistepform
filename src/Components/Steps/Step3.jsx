import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";
import { ActionContext } from "../Store";

export default function Step3() {
  const { updateInfo } = useContext(ActionContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Personal Info"
        subHeading="Add-ons help enhance your gaming experience."
      />
      {!formSubmitted ? (
        <div className="flex flex-col gap-2">
          {/* Checkbox for Online Service */}
          <div className="flex justify-between p-5 rounded-lg border-2 hover:bg-gray-300">
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
          <div className="flex justify-between p-5 rounded-lg border-2 hover:bg-gray-300">
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
          <div className="flex justify-between p-5 rounded-lg border-2 hover:bg-gray-300">
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
          {/* Navigation buttons */}
          <div className="flex justify-between font-bold">
            <Link to="/steptwo" className="px-4 py-3">
              Go Back
            </Link>
            {/* Button to submit and navigate to the next step */}
            <Button type="button" butName="Next Step" onClick={handleSubmit} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <g fill="none">
                <circle cx="40" cy="40" r="40" fill="#F9818E" />
                <path
                  fill="#E96170"
                  d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                />
                <path
                  fill="#FFF"
                  d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                />
              </g>
            </svg>
          </div>
          <p className="text-center text-xl">Congratulation, proceed to next step!</p>
          <div className="flex justify-end">
            <Link
              className="bg-[#3e52a3] px-4 py-3 rounded-lg text-white"
              to="/stepfour"
            >
              Go to Next Page
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
