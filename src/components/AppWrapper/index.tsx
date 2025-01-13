import React, { ReactNode } from "react";

import Header from "../Header";
import Footer from "../Footer";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#07061b] relative h-screen">
      <Header />
      <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default AppWrapper;
