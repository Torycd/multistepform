import PropTypes from "prop-types";
import { useContext } from "react";
import { ActionContext } from "../Store";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step4({ onComplete }) {
  const { plans, infos } = useContext(ActionContext);

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

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Finishing up"
        subHeading="Double-check everything looks before confirming"
      />
      <div className="bg-slate-200 p-5 rounded-lg space-y-3 font-bold ">
        <ul className="border-b border-black">
          {plans.map((item, index) => (
            <li key={index} className="flex justify-between py-5 opacity-70">
              <h2 className="text-[16px]">{item.plans.name}</h2>
              <p className="text-xl">${item.plans.price}/mo</p>
            </li>
          ))}
        </ul>

        <ul>
          {infos.map((item, index) => (
            <li key={index} className="space-y-3 py-5  opacity-70">
              {item.infos.onlineService ? (
                <div className="flex justify-between">
                  <h2 >Online Service:</h2>
                  <span>
                    <p>+$1/mo</p>
                  </span>
                </div>
              ) : null}
              {item.infos.largerStorage ? (
                <div className="flex justify-between">
                  <h2>Larger Storage:</h2>
                  <span>
                    <p>+$2/mo</p>
                  </span>
                </div>
              ) : null}
              {item.infos.customizableProfile ? (
                <div className="flex justify-between">
                  <h2>Customizable Profile:</h2>
                  <span>
                    <p>+$3/mo</p>
                  </span>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="flex justify-between opacity-70">
          <h2>Total Price:</h2>
          <p>${totalPrice}/mo</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" butName="Confirm" onClick={handleFinish} />
      </div>
    </div>
  );
}
Step4.propTypes = {
  onComplete: PropTypes.func
}