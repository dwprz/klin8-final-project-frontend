import Navbar from "./Navbar.organism";
import Sidebar from "./Sidebar.organism";

function AdminNavbar() {
  return (
    <div className="print:hidden">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default AdminNavbar;
