import Login from "../pages/Login";

const routes = [
  {
    element: <PublicLayout />,
    children: [{ path: "signin", element: <Login /> }],
  },
];
export default routes;
