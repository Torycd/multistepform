// Step4.js
import { useContext } from "react";
import { ActionContext } from "../Store";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step4() {
  const { summarys, plans } = useContext(ActionContext);
  console.log(summarys)
  console.log(plans)

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep heading="Finishing up" subHeading="Double-check everything looks before confirming"/>
      <ul>
        {summarys.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.numbers}</p>
          </li>
        ))}
      </ul>
      <Button type="submit"  butName="Confirm" link="/Congratulation"/>
    </div>
  );
}
