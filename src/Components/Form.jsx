import Indicator from "./Indicator";
// import Step1 from "./Steps/Steps1";
import { Outlet } from "react-router-dom";

export default function Form() {
  return (
    <div className="grid grid-cols-5 gap-20 h-full">
      <div className="col-span-2">
        <Indicator />
      </div>
      <div className="col-span-3">
        <Outlet/>
      </div>
    </div>
  );
}
