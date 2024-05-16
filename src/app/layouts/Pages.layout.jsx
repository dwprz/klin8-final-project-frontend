/* eslint-disable react/prop-types */
import Footer from "../components/organisms/Footer/Footer.organism.jsx";
import Navbar from "../components/organisms/Navbar/Navbar.organism.jsx";

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
