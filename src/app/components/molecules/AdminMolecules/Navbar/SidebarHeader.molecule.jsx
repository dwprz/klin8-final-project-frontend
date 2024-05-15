import { useDispatch, useSelector } from "react-redux";
import {
  setOpenNavbar,
  setOpenSidebar,
} from "../../../../../lib/redux/admin/admin-navbar.reducer";

function SidebarHeader() {
  const { openSidebar, openNavbar } = useSelector((state) => state.adminNavbar);
  const dispatch = useDispatch();

  return (
    <header className="p-5 border-b">
      <img
        className="w-[8rem]"
        src="/assets//logo/klin8-high-resolution-logo-transparent.svg"
        alt="klin8"
      />
      <i
        onClick={() => {
          dispatch(setOpenNavbar(!openNavbar));
          dispatch(setOpenSidebar(!openSidebar));
        }}
        className="fa-solid fa-xmark text-2xl absolute top-4 right-7 text-white hover:text-primary xl:hidden"
      ></i>
    </header>
  );
}

export default SidebarHeader;
