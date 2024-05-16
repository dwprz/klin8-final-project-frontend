/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import AdminNavbar from "../components/organisms/AdminOrganisms/Navbar/AdminNavbar.organism";
import { useEffect } from "react";

function AdminLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}

export default AdminLayout;
