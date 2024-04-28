import { useContext } from "react";
import { ActionContext } from "../Store";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step4() {
  const { summarys, plans, infos } = useContext(ActionContext);

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Finishing up"
        subHeading="Double-check everything looks before confirming"
      />
      <div className="bg-slate-200 p-5 rounded-lg space-y-3 text-xl font-bold ">
        <ul className="border-b border-black">
          {plans.map((item, index) => (
            <li key={index} className="flex justify-between py-5">
              <h2>{item.plans.name}</h2>
              <p>{item.plans.price}</p>
            </li>
          ))}
        </ul>

        <ul>
          {infos.map((item, index) => (
            <li key={index} className="space-y-3 py-5">
              {item.infos.onlineService ? (
                <div className="flex justify-between">
                  <h2>Online Service:</h2>
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
        <ul>
          {summarys.map((item, index) => (
            <li key={index}>
              <h2>Name: {item.summary.name}</h2>
              <p>Email: {item.summary.email}</p>
              <p>Phone Number: {item.summary.number}</p>
            </li>
          ))}
        </ul>
      </div>

      <Button type="submit" butName="Confirm" link="/Congratulation" />
    </div>
  );
}
