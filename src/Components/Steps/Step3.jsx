import HeadStep from "../UI/HeadStep";

export default function Step3() {
  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Personal Info"
        subHeading="Add-ons help enhance your gaming experience."
      />
      <div>
        <div className="">
          <input type="checkbox" />
          <div>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
          </div>
        </div>
        {/*  */}
        <div>
        <input type="checkbox" />
          <div>
            <h2>Layer Storage</h2>
            <p>Access to multiplayer games</p>
          </div> 
        </div>
        {/*  */}
        <div>
        <input type="checkbox" />
          <div>
            <h2>Costomible profile.</h2>
            <p>Access to multiplayer games</p>
          </div>
        </div>
      </div>
    </div>
  );
}
