import { Outlet } from "react-router-dom";
import Indicator from "./Components/Indicator";
import SvgBack from "./Components/Steps/Svgback";

export default function HomePage() {
  return (
    <div className="bg-slate-600 flex align-center w-dvh h-dvh font-Ubuntu p-10">
      <div className="w-[1080px] bg-white rounded-lg mx-auto p-10">
        <div className="grid grid-cols-5 gap-20 h-full relative">
          {/* SvgBack as background */}
          <div className="col-span-2 z-10 relative">
            {/* SvgBack as background */}
            <div className="absolute inset-0">
              <SvgBack />
            </div>
            {/* Indicator component */}
            <div className="relative z-10">
              <Indicator />
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
