import React, { useState } from "react";
import Navbar from "../Menu/navbar";
import Footer from "../Menu/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
