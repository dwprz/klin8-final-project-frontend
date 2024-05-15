/* eslint-disable react/prop-types */
import AdminNavbar from "../components/organisms/AdminOrganisms/Navbar/AdminNavbar.organism";

function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}

export default AdminLayout;
