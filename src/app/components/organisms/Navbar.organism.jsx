import { Link, useLocation } from "react-router-dom";
import logo from "/assets/logo/klin8-high-resolution-logo-transparent.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunk } from "../../../lib/redux/user/user.action";

function Navbar() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const { user, isLogin } = useSelector((state) => state.user);
  const { email, fullName, photoProfile } = user;

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  return (
    <>
      {/* Navbar dekstop */}
      <nav>
        <div className="hidden xl:block fixed w-full z-40 py-5 bg-black bg-opacity-80">
          <div className="hidden xl:flex items-center justify-between w-3/4 mx-auto">
            <figure>
              <img src={logo} alt="klin8 logo" className="w-40" />
            </figure>

            <ul className="flex gap-16 text-lg text-neutral-100">
              <li>
                <Link
                  to="/"
                  className={pathname === "/" ? "font-bold text-primary" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className={
                    pathname === "/service" ? "font-bold text-primary" : ""
                  }
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    pathname === "/about" ? "font-bold text-primary" : ""
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={
                    pathname === "/contact" ? "font-bold text-primary" : ""
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="w-max">
              {isLogin ? (
                <div className="flex items-center gap-10">
                  <div className="text-primary">
                    <Link to={"/users/orders"}>
                      <i className="fa-solid fa-cart-shopping text-xl"></i>
                    </Link>
                  </div>
                  <button
                    className="relative"
                    onClick={() => setHidden(!hidden)}
                  >
                    {photoProfile ? (
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    ) : (
                      <i className="fa-solid fa-user text-primary bg-neutral-100 p-4 rounded-full"></i>
                    )}
                    {/* Navbar menu */}
                    <div
                      className={`${
                        !hidden && isLogin ? "xl:block" : "xl:hidden"
                      } hidden w-[15rem] bg-gray-800 bg-opacity-80 absolute z-50 top-16 -right-7 text-left text-neutral-100 text-sm rounded-lg border border-gray-600`}
                    >
                      <div className="px-5 py-3 overflow-hidden whitespace-nowrap">
                        <h1>{fullName}</h1>
                        <p>{email ? email : "-"}</p>
                      </div>
                      <hr />
                      <ul className="px-5 py-3 flex flex-col gap-2">
                        {user.role === "ADMIN" && (
                          <li>
                            <Link to={"/admins/dashboard"}>Dashboard</Link>
                          </li>
                        )}
                        <li>
                          <Link to={"/settings"}>Setting</Link>
                        </li>
                        <li>
                          <button onClick={() => dispatch(userThunk.logout())}>
                            Sign out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </button>
                </div>
              ) : (
                <Link
                  to="/users/login"
                  className="hidden xl:block text-neutral-100 text-lg"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar mobile */}
      <nav className="xl:hidden">
        <div
          className={`${
            hidden ? "w-full h-max" : "w-3/4 sm:w-1/2 h-full"
          } fixed top-0 bg-black bg-opacity-80 z-40`}
        >
          <div className="flex justify-between px-7 sm:px-14">
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo/klin8-high-resolution-logo-transparent.svg"
                alt="klin8"
                className="w-24 sm:w-36 h-20"
              />
            </div>
            <button type="button" onClick={() => setHidden(!hidden)}>
              <i
                className={`${
                  hidden ? "fa-solid fa-bars" : "fa-solid fa-xmark"
                } xl:hidden text-neutral-100 text-2xl`}
              ></i>
            </button>
          </div>

          <div
            className={`${
              hidden ? "hidden" : "block"
            } xl:hidden pb-5 border-t h-full`}
          >
            <figure className="flex items-center gap-3 px-5 py-5">
              {isLogin && photoProfile ? (
                <img
                  src={photoProfile}
                  alt="profile"
                  className="w-10 h-10 object-cover rounded-full"
                />
              ) : (
                <i className="fa-solid fa-user text-primary bg-neutral-100 p-4 rounded-full"></i>
              )}
              {isLogin ? (
                <figcaption className="text-neutral-100 w-[12rem] overflow-hidden whitespace-nowrap">
                  <p className="text-sm">{fullName}</p>
                  <p className="text-xs">{email ? email : "-"}</p>
                </figcaption>
              ) : (
                ""
              )}
            </figure>

            <div className="text-neutral-100 text-lg px-7 mt-7 flex flex-col h-[37rem] sm:h-[55rem] lg:h-[70rem]">
              <ul className="flex flex-col gap-5">
                <li className="font-bold">
                  <Link
                    to="/"
                    className={
                      pathname === "/"
                        ? "font-bold text-primary flex items-center"
                        : ""
                    }
                  >
                    <i className="fa-solid fa-house me-2"></i>
                    Home
                  </Link>
                </li>
                {isLogin ? (
                  <li className="font-bold">
                    <Link
                      to="/users/orders"
                      className={
                        pathname === "/users/orders"
                          ? "font-bold text-primary flex items-center"
                          : ""
                      }
                    >
                      <i className="fa-solid fa-cart-shopping me-2"></i>
                      Orders
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <Link
                    to="/service"
                    className={
                      pathname === "/service"
                        ? "font-bold text-primary flex items-center"
                        : ""
                    }
                  >
                    <i className="fa-solid fa-store me-2"></i>
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={
                      pathname === "/about"
                        ? "font-bold text-primary flex items-center"
                        : ""
                    }
                  >
                    <i className="fa-solid fa-building-user me-2"></i>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={
                      pathname === "/contact"
                        ? "font-bold text-primary flex items-center"
                        : ""
                    }
                  >
                    <i className="fa-solid fa-envelope me-2"></i>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className={
                      pathname === "/settings"
                        ? "font-bold text-primary flex items-center"
                        : ""
                    }
                  >
                    <i className="fa-solid fa-gear me-2"></i>
                    Setting
                  </Link>
                </li>
              </ul>

              <div className="mt-auto border-t">
                {isLogin ? (
                  <button
                    onClick={() => dispatch(userThunk.logout())}
                    className="mt-3"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal me-2"></i>
                    Sign out
                  </button>
                ) : (
                  <div className="mt-3">
                    <Link to={"/users/login"}>
                      <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                      Sign in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
