import StepNav from "./Steps/StepNav";

export default function Indicator() {
  return (
    <div className="bg-[#644ae5] w-full h-full rounded-lg text-white p-10">
      <div className="flex flex-col space-y-8">
        <StepNav stage="1" info="Your info" />
        <StepNav stage="2" info="Select plan" />
        <StepNav stage="3" info="Add-ons" />
        <StepNav stage="4" info="Summary" />
      </div>
      <div>
        
      </div>
    </div>
  );
}
