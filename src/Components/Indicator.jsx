import StepNav from "./Steps/StepNav";

export default function Indicator() {
  return (
    <div className=" w-full h-full rounded-lg text-white p-10 z-40">
      <div className="flex flex-col space-y-8">
        <StepNav stage="1" info="Your info" navlink="" />
        <StepNav stage="2" info="Select plan" navlink="steptwo" />
        <StepNav stage="3" info="Add-ons" navlink="stepthree" />
        <StepNav stage="4" info="Summary" navlink="stepfour" />
      </div>
    </div>
  );
}
