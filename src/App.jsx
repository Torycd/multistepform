import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActionProvider from "./Components/Store";
import HomePage from "./HomePage";
import Step1 from "./Components/Steps/Step1";
// import Step2 from "./Components/Steps/Step2";
// import Step3 from "./Components/Steps/Step3";
// import Step4 from "./Components/Steps/Step4";
import CongratulationCompo from "./Components/CongratulationCompo";
import LoadingIndicator from "./Components/UI/LoadingIndicator";
import { Suspense, lazy } from "react";

// const Step1 = lazy(() => import("./Components/Steps/Step1"));
const Step2 = lazy(() => import("./Components/Steps/Step2"));
const Step3 = lazy(() => import("./Components/Steps/Step3"));
const Step4 = lazy(() => import("./Components/Steps/Step4"));
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ActionProvider>
          <Suspense fallback={<LoadingIndicator />}>
            <HomePage />
          </Suspense>
        </ActionProvider>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Step1 fallback={<LoadingIndicator />} />
            </Suspense>
          ),
        },
        {
          path: "/steptwo",
          element: (
            <Suspense fallback={<LoadingIndicator />}>
              <Step2 />
            </Suspense>
          ),
        },
        {
          path: "/stepthree",
          element: <Step3 />,
        },
        {
          path: "/stepfour",
          element: <Step4 />,
        },
        {
          path: "/Congratulation",
          element: <CongratulationCompo />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
