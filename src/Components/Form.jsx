import Indicator from "./Indicator";
import Step1 from "./Steps/Steps1";

export default function Form() {
  return (
    <div className="flex gap-10">
      <div>
        <Indicator />
      </div>
      <div>
        <Step1 />
      </div>
    </div>
  );
}
