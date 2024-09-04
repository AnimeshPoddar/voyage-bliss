import React from "react";

import { Pages } from "../../pages";
import { Navbar } from "./navbar.component";
import { Footer } from "./footer";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
};
