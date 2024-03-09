/* eslint-disable react/prop-types */
import Footer from "../components/organisms/Footer/Footer";
import Navbar from "../components/organisms/Navbar/Navbar";

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
