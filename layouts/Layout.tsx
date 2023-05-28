import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Fragment, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
