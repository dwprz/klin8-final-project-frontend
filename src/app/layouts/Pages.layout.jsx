/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Footer from "../components/organisms/Footer/Footer.organism.jsx";
import Navbar from "../components/organisms/Navbar/Navbar.organism.jsx";
import { useEffect } from "react";

function PagesLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PagesLayout;
