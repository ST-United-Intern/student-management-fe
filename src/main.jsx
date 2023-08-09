import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "../router.jsx";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const BASE_URL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
  </QueryClientProvider>
);
