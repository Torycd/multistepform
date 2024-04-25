// Step4.js
import { useContext } from "react";
import { ActionContext } from "../Store";

export default function Step4() {
  const { summarys, plans } = useContext(ActionContext);
  console.log(summarys)
  console.log(plans)

  return (
    <div>
      <h2>Summary</h2>
      <ul>
        {summarys.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.numbers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
