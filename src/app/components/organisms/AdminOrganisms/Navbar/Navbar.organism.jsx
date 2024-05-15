import { useDispatch, useSelector } from "react-redux";
import {
  setOpenNavbar,
  setOpenSidebar,
} from "../../../../../lib/redux/admin/admin-navbar.reducer";

function Navbar() {
  const { openNavbar, openSidebar } = useSelector((state) => state.adminNavbar);
  const dispatch = useDispatch();

  return (
    <nav
      id="navbar"
      className={`${
        openNavbar ? "flex" : "hidden"
      } fixed w-full bg-black bg-opacity-90 px-7 py-5 justify-between`}
    >
      <img
        className="w-[8rem]"
        src="/assets/logo/klin8-high-resolution-logo-transparent.svg"
        alt="klin8"
      />
      <i
        onClick={() => {
          dispatch(setOpenNavbar(!openNavbar));
          dispatch(setOpenSidebar(!openSidebar));
        }}
        className="fa-solid fa-bars text-2xl text-white xl:hidden"
      ></i>
    </nav>
  );
}

export default Navbar;
