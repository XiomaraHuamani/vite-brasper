import React, { useState } from "react";
import Navbar from "../Menu/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
