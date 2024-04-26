import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActionProvider from "./Components/Store";
import HomePage from "./HomePage";
import Step1 from "./Components/Steps/Step1";
import Step2 from "./Components/Steps/Step2";
import Step3 from "./Components/Steps/Step3";
import Step4 from "./Components/Steps/Step4";
import CongratulationCompo from "./Components/CongratulationCompo";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ActionProvider>
          <HomePage />
        </ActionProvider>
      ),
      children: [
        {
          path: "/",
          element: <Step1 />,
        },
        {
          path: "/steptwo",
          element: <Step2 />,
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
