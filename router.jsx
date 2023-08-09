import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default Router;
