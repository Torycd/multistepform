import HeadStep from "../UI/HeadStep";

export default function Step2() {
  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Select your plan"
        subHeading="You have the option of monthly or yearly billing."
      />
      <form className="flex flex-col justify-between gap-10">
        {/*  */}
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        {/*  */}
      </form>
    </div>
  );
}
