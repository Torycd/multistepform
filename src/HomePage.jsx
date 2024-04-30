import { Outlet } from "react-router-dom";
import { Suspense, useContext } from "react";
import Indicator from "./Components/Indicator";
import { ActionContext } from "./Components/Store";
import LoadingIndicator from "./Components/UI/LoadingIndicator";
import SvgBack from "./Components/Steps/Svgback";

export default function HomePage() {
  const { currentStep } = useContext(ActionContext);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Adjust the delay time as needed (in milliseconds)

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="bg-slate-600 flex align-center w-dvh h-dvh font-Ubuntu md:p-10">
      <div className="max-w-[1080px] sm:bg-white rounded-lg sm:mx-auto md:p-10">
        <div className="flex flex-col md:flex-row md:gap-10 h-full relative">
          {/* side and top display */}
          <div className="w-full sm:w-[40%] ">
            <div className="sm:absolute sm:inset-0">
              <SvgBack className="sm:absolute sm:inset-0" />
            </div>
            <div className="sm:relative">
              <Indicator currentStep={currentStep} />
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-[60%] z-10 bg-white p-4 mx-10 md:mx-0">
            <Suspense fallback={<LoadingIndicator />}>
                <Outlet />
             
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
