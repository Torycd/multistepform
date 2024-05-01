import { Outlet } from "react-router-dom";
import { Suspense, useContext } from "react";
import Indicator from "./Components/Indicator";
import { ActionContext } from "./Components/Store";
import LoadingIndicator from "./Components/UI/LoadingIndicator";
import SvgBack from "./Components/Steps/Svgback";

export default function HomePage() {
  const { currentStep } = useContext(ActionContext);
  
  return (
    <div className="bg-slate-600 flex align-center w-dvh h-[100%] sm:h-dvh font-Ubuntu md:p-10">
      <div className="w-full h-full md:w-[1080px] sm:bg-white rounded-lg sm:mx-auto md:p-10">
        <div className="w-dvh flex flex-col md:flex-row md:gap-10 h-full relative">
          {/* side and top display */}
          <div className="w-full sm:w-[40%] sm:relative">
            <div className="sm:absolute sm:inset-0">
              <SvgBack className="sm:absolute sm:inset-0" />
            </div>
            <div className="absolute inset-0 my-10 sm:my-0 sm:relative">
              <Indicator currentStep={currentStep} />
            </div>
          </div>

          {/* Main content */}
          <div className="w-dvh h-full -translate-y-[10%] mt-6 sm:mt-0 sm:-translate-y-0 rounded-lg mx-6 md:w-[60%] z-10  bg-white px-10">
            <Suspense fallback={<LoadingIndicator />}>
                <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
