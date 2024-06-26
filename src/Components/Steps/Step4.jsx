import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ActionContext } from "../Store";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step4({ onComplete }) {
  const { plans, infos, moveToPreviousStep } = useContext(ActionContext);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const totalPlanPrice = plans.reduce((acc, item) => acc + item.plans.price, 0);

  const totalOptionPrice = infos.reduce((acc, item) => {
    let optionPrice = 0;
    if (item.infos.onlineService) optionPrice += 1;
    if (item.infos.largerStorage) optionPrice += 2;
    if (item.infos.customizableProfile) optionPrice += 3;
    return acc + optionPrice;
  }, 0);

  const totalPrice = totalPlanPrice + totalOptionPrice;
  const handleFinish = () => {
    onComplete();
  };
  const handleChange = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };
  return (
    <div className="py-10 gap-2 h-full flex flex-col">
      <HeadStep
        heading="Finishing up"
        subHeading="Double-check everything looks before confirming"
      />
      <div className="h-full flex flex-col justify-between gap-4">
        <div className="bg-[#DEDEDE] p-4 rounded-lg  font-bold ">
          <ul className="border-b border-black">
            {plans.map((item, index) => (
              <>
                <li
                  key={index}
                  className="flex justify-between py-5 sm:text-xl opacity-70"
                >
                  <h2>{item.plans.name}</h2>
                  <p>
                    {isYearlyBilling
                      ? `$${item.plans.price * 10}/yr`
                      : `$${item.plans.price}/mo`}
                  </p>
                </li>
                <button className="underline opacity-30 text-[16px]" onClick={handleChange}>
                  Change
                </button>
              </>
            ))}
          </ul>

          <ul className="text-[16px]">
            {infos.map((item, index) => (
              <li key={index} className="space-y-3 py-5 opacity-50">
                {item.infos.onlineService ? (
                  <div className="flex justify-between">
                    <h2>Online Service:</h2>
                    <span>
                      <p>{isYearlyBilling ? "+$10/yr" : "+$1/mo"}</p>
                    </span>
                  </div>
                ) : <div className="hidden"></div>}
                {item.infos.largerStorage ? (
                  <div className="flex justify-between">
                    <h2>Larger Storage:</h2>
                    <span>
                      <p>{isYearlyBilling ? "+$20/yr" : "+$2/mo"}</p>
                    </span>
                  </div>
                ) : <div className="hidden"></div>}
                {item.infos.customizableProfile ? (
                  <div className="flex justify-between">
                    <h2>Customizable Profile:</h2>
                    <span>
                      <p>{isYearlyBilling ? "+$30/yr" : "+$3/mo"}</p>
                    </span>
                  </div>
                ) : <div className="hidden"></div>}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between opacity-70 px-10 font-bold">
          <h2 className="text-[16px] opacity-50">Total (Per Month)</h2>
          <p className="text-blue-800 sm:text-xl">
            {isYearlyBilling ? `$${totalPrice * 10}/yr` : `$${totalPrice}/mo`}
          </p>
        </div>
        <div className="flex justify-between font-bold">
          <button
            to="/steptwo"
            className="px-4 py-3"
            onClick={moveToPreviousStep}
          >
            Go Back
          </button>
          <Button type="submit" butName="Confirm" onClick={handleFinish} />
        </div>
      </div>
    </div>
  );
}
Step4.propTypes = {
  onComplete: PropTypes.func,
};
