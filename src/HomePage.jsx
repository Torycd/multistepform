import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect, useContext } from "react";
import Indicator from "./Components/Indicator";
import { ActionContext } from "./Components/Store";
import LoadingIndicator from "./Components/UI/LoadingIndicator";
import SvgBack from "./Components/Steps/Svgback";

export default function HomePage() {
  const { currentStep } = useContext(ActionContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed (in milliseconds)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-600 flex align-center w-dvh h-dvh font-Ubuntu p-10">
      <div className="w-[1080px] bg-white rounded-lg mx-auto p-10">
        <div className="grid grid-cols-5 gap-20 h-full relative">
          <div className="col-span-2 z-10 relative">
            <div className="absolute inset-0">
              <SvgBack />
            </div>
            <div className="relative z-10">
              <Indicator currentStep={currentStep}  />
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-3">
            <Suspense fallback={<LoadingIndicator />}>
              {loading ? (
                <LoadingIndicator /> // Display loading indicator while waiting
              ) : (
                <Outlet />
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
