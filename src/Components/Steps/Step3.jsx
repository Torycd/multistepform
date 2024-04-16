import { Link } from "react-router-dom";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step3() {
  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Personal Info"
        subHeading="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between p-5 rounded-lg border-2" >
          <div className="flex gap-10">
            <input type="checkbox" />
            <div className="font-bold">
              <h2>Online service</h2>
              <p className="opacity-50">Access to multiplayer games</p>
            </div>
          </div>
          <p>+$1/mo</p>
        </div>
        {/*  */}
        <div className="flex justify-between p-5 rounded-lg border-2">
          <div className="flex gap-10">
            <input type="checkbox" className="checked:bg-purple-900" />
            <div className="font-bold">
              <h2>larger storage</h2>
              <p className="opacity-50">Access to multiplayer games</p>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>
        {/*  */}
        <div className="flex justify-between p-5 rounded-lg border-2">
          <div className="flex gap-10">
            <input type="checkbox" />
            <div className="font-bold">
              <h2>Customizable Profile</h2>
              <p className="opacity-50">Customize theme on your profile</p>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>
        <div className="flex justify-between font-bold">
          <Link to="/steptwo" className="px-4 py-3">
            Go Back
          </Link>
          <Button type="submit" link="/stepfour" />
        </div>
      </div>
    </div>
  );
}
