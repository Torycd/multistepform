import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActionProvider from "./Components/Store";
import HomePage from "./HomePage";
import { StepNavigator } from "./Components/stepNavgator"
import CongratulationCompo from "./Components/CongratulationCompo";
import LoadingIndicator from "./Components/UI/LoadingIndicator";
import { Suspense } from "react";

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
            <Suspense fallback={<LoadingIndicator />}>
              <StepNavigator /> {/* Render StepNavigator here */}
            </Suspense>
          ),
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
