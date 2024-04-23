// Step4.js
import { useContext } from "react";
import { ActionContext } from "../Store";

export default function Step4() {
  const { summary } = useContext(ActionContext);

  return (
    <div>
      <h2>Summary</h2>
      <ul className="m">
        {summary.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.numbers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
