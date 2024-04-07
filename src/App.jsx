import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
// import Form from "./Components/Form";
import Step1 from "./Components/Steps/Step1";
import Step2 from "./Components/Steps/Step2";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <Step1 />,
        },
        {
          path: "/steptwo",
          element: <Step2/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
