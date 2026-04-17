import Banner from "@/components/Banner";
import React from "react";

const layout = ({ children }) => {
  return (
    <section>
      <Banner />
      <main>{children}</main>
    </section>
  );
};

export default layout;
