// Step4.js
import { useContext } from "react";
import { ActionContext } from "../Store";

export default function Step4() {
  const { summary } = useContext(ActionContext);

  return (
    <div>
      <h2>Summary:</h2>
      <ul>
        {summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
