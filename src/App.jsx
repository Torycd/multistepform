import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Form from "./Components/Form";
import Step1 from "./Components/Steps/Steps1";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <Form />,
          children: [
            {
              path: "/stepone",
              element: <Step1 />,
            },
            {}
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
