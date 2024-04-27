import { useContext } from "react";
import { ActionContext } from "../Store";
import HeadStep from "../UI/HeadStep";
import Button from "../UI/Button";

export default function Step4() {
  const { summarys, plans } = useContext(ActionContext);
  console.log(plans)
  console.log(summarys) // Destructure summarys and plans from the context

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep heading="Finishing up" subHeading="Double-check everything looks before confirming"/>
      <ul>
        {summarys.map((item, index) => (
          <li key={index}>
            <h2>{item.summary.name}</h2> {/* Corrected access to summary item properties */}
            <p>{item.summary.price}</p>
            {/* You may need to adjust the property names according to your data structure */}
            {/* Make sure to use item.plans or item.infos similarly if needed */}
          </li>
        ))}
      </ul>
      <Button type="submit"  butName="Confirm" link="/Congratulation"/>
    </div>
  );
}
