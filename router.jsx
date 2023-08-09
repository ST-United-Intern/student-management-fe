import { createBrowserRouter } from "react-router-dom";
import SignUp from "./src/pages/SignUpTeacher";
import SignUpStudent from "./src/pages/SignUpStudent";
// import Login from "./src/pages/Login";
const Router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  {
    path: "/sign-up-teacher",
    element: <SignUp />,
  },
  {
    path: "/sign-up-student",
    element: <SignUpStudent />,
  },
]);

export default Router;
