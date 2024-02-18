import logo from "/assets/logo/klin8-high-resolution-logo-transparent.svg";

function Navbar() {
  const handleButtonNav = () => {
    const navMobile = document.getElementById("navMobile");
    if (navMobile) {
      // Mengganti ikon tombol navigasi antara menu hamburger dan
      const buttonIcon = document.querySelector(".fa-solid");
      if (buttonIcon) {
        buttonIcon.classList.toggle("fa-xmark");
        buttonIcon.classList.toggle("fa-bars");
      }

      // Mengalihkan antara kelas "hidden" dan "block" pada elemen dengan ID "navMobile"
      navMobile.classList.toggle("hidden");
      navMobile.classList.toggle("block");
    }
  };

  return (
    <nav className="fixed w-full z-40 py-5 bg-black bg-opacity-80">
      <section className="flex justify-between w-3/4 mx-auto">
        <figure>
          <img src={logo} alt="klin8 logo" className="w-40" />
        </figure>

        <ul className="hidden lg:flex gap-16 text-lg text-neutral-100">
          <li>
            <a href="./index.html" className="font-bold text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="./pages/service/index.html">Service</a>
          </li>
          <li>
            <a href="./pages/about/index.html">About</a>
          </li>
          <li>
            <a href="./pages/contact/index.html">Contact</a>
          </li>
        </ul>

        <div className="font-semibold">
          <button type="button" className="lg:hidden" onClick={handleButtonNav}>
            <i className="fa-solid fa-bars sm:hidden text-neutral-100 text-3xl"></i>
          </button>
          <a
            href="./pages/auth/login/index.html"
            className="hidden lg:block text-neutral-100 text-lg"
          >
            Sign In
          </a>
        </div>
      </section>

      <section id="navMobile" className="hidden lg:hidden mt-7 pb-5 border-t">
        <ul className="flex flex-col gap-5 text-neutral-100 text-lg text-center py-7">
          <li className="font-bold text-primary">
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./pages/service/index.html">Service</a>
          </li>
          <li>
            <a href="./pages/about/index.html">About</a>
          </li>
          <li>
            <a href="./pages/contact/index.html">Contact</a>
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
