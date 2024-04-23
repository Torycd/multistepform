import { Outlet } from "react-router-dom";
import Indicator from "./Components/Indicator";
// import useProvider from "./Components/Store";

export default function HomePage() {
  return (
    
    <div className="bg-slate-600 flex align-center w-dvh h-dvh font-Ubuntu p-10">
      <div className="w-[1080px] bg-white rounded-lg mx-auto p-10">
        <div className="grid grid-cols-5 gap-20 h-full">
          <div className="col-span-2">
            <Indicator />
          </div>
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
