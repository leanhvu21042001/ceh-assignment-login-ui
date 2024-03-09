import { Fragment } from "react";

import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import Footer from "~layouts/RootDashboard/Footer";
// import Header from "~layouts/RootDashboard/Header";

const RootDashboard = () => {
  return (
    <Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </Fragment>
  );
};

export default RootDashboard;
