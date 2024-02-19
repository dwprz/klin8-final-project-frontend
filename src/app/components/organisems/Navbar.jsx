import { Link, useLocation } from "react-router-dom";
import logo from "/assets/logo/klin8-high-resolution-logo-transparent.svg";
import { useState } from "react";

function Navbar() {
  const { pathname } = useLocation();
  
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="fixed w-full z-40 py-5 bg-black bg-opacity-80">
      <section className="flex justify-between w-3/4 mx-auto">
        <figure>
          <img src={logo} alt="klin8 logo" className="w-40" />
        </figure>

        <ul className="hidden xl:flex gap-16 text-lg text-neutral-100">
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
              className={pathname === "/about" ? "font-bold text-primary" : ""}
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

        <div className="font-semibold flex">
          <button type="button" onClick={() => setHidden(!hidden)}>
            <i
              className={`${
                hidden ? "fa-solid fa-bars" : "fa-solid fa-xmark"
              } xl:hidden text-neutral-100 text-3xl`}
            ></i>
          </button>
          <a
            href="/auth/login"
            className="hidden xl:block text-neutral-100 text-lg"
          >
            Sign In
          </a>
        </div>
      </section>

      <section
        id="navMobile"
        className={`${
          hidden ? "hidden" : "block"
        } xl:hidden mt-7 pb-5 border-t`}
      >
        <ul className="flex flex-col gap-5 text-neutral-100 text-lg text-center py-7">
          <li className="font-bold text-primary">
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
              className={pathname === "/about" ? "font-bold text-primary" : ""}
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

        <div className="flex justify-between text-lg text-neutral-100 border-t px-7 sm:px-32 pt-7">
          <a
            href="./pages/auth/login/index.html"
            className="bg-primary hover:bg-secondary px-3 py-1"
          >
            Sign In
          </a>
          <a
            href="./pages//auth/register/"
            className="border hover:text-primary px-3 py-1"
          >
            Sign Up
          </a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
