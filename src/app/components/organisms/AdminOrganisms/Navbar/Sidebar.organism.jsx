import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userThunk } from "../../../../../lib/redux/user/user.action";
import SidebarHeader from "../../../molecules/AdminMolecules/Navbar/SidebarHeader.molecule";
import SidebarList from "../../../molecules/AdminMolecules/Navbar/SidebarList.molecule";
import SidebarOrdersList from "../../../molecules/AdminMolecules/Navbar/SidebarOrdersList.molecule";
import SidebarUsersList from "../../../molecules/AdminMolecules/Navbar/SidebarUsersList.molecule";

function Sidebar() {
  const { openSidebar } = useSelector((state) => state.adminNavbar);
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  return (
    <section
      id="sidebar"
      className={`${
        openSidebar ? "block" : "hidden xl:block"
      } min-h-screen fixed w-3/4 xl:w-1/5 bg-black bg-opacity-90 z-20`}
    >
      <SidebarHeader />

      <div className="text-white px-2 mt-5 flex flex-col justify-between">
        <SidebarList
          title={"Home"}
          icon={"fa-solid fa-house"}
          path={"/"}
        />

        <SidebarList
          title={"Dashboard"}
          icon={"fa-solid fa-table-columns"}
          path={"/admins/dashboard"}
        />

        <SidebarOrdersList />

        <SidebarUsersList />

        <SidebarList
          title={"Settings"}
          icon={"fa-solid fa-gear"}
          path={"/settings"}
        />

        <SidebarList
          title={isLogin ? "Sign out" : "Sign in"}
          icon={"fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"}
        />
      </div>
    </section>
  );
}

export default Sidebar;
