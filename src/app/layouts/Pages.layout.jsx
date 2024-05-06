/* eslint-disable react/prop-types */
import Footer from "../components/organisms/Footer.organism.jsx";
import Navbar from "../components/organisms/Navbar.organism.jsx";

function PagesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PagesLayout;
