import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import theme from "./theme";
import ErrorPage from "~pages/ErrorPage";
import RootDashboard from "~layouts/RootDashboard";
import Login from "~pages/Login";
import Register from "~pages/Register";
import Dashboard from "~pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootDashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
