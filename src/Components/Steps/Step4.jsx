import { useContext } from "react";
import { ActionContext } from "../Store";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step4() {
  const { summarys, plans, infos } = useContext(ActionContext);
  
  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep heading="Finishing up" subHeading="Double-check everything looks before confirming"/>
      {/* Rendering plans */}
      <ul>
        {plans.map((item, index) => (
          <li key={index}>
            <h2>{item.plans.name}</h2>
            <p>{item.plans.price}</p>
          </li>
        ))}
      </ul>
      {/* Rendering infos */}
      <ul>
        {infos.map((item, index) => (
          <li key={index}>
            <h2>Online Service: {item.infos.onlineService ? "Yes" : "No"}</h2>
            <h2>Larger Storage: {item.infos.largerStorage ? "Yes" : "No"}</h2>
            <h2>Customizable Profile: {item.infos.customizableProfile ? "Yes" : "No"}</h2>
          </li>
        ))}
      </ul>
      {/* Rendering summarys */}
      <ul>
        {summarys.map((item, index) => (
          <li key={index}>
            <h2>Name: {item.summary.name}</h2>
            <p>Email: {item.summary.email}</p>
            <p>Phone Number: {item.summary.number}</p>
          </li>
        ))}
      </ul>
      <Button type="submit"  butName="Confirm" link="/Congratulation"/>
    </div>
  );
}
