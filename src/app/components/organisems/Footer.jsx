import logoFooter from "/assets/logo/klin8-high-resolution-logo-transparent.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-gray-700 py-14 px-10 lg:px-24 flex flex-col lg:flex-row gap-10">
          <div>
            <figure className="bg-neutral-100 px-7 py-4 rounded-full w-64">
              <img src={logoFooter} alt="klin8 logo" className="w-full" />
            </figure>
            <p className="text-neutral-300 mt-5 lg:pe-24">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores iste aspernatur autem quaerat odit esse est provident
              molestias? Molestias id, ad cum obcaecati sed officia.
            </p>

            <div className="text-4xl text-gray-700 flex gap-5 mt-5">
              <i className="fa-brands fa-instagram p-2 bg-neutral-300 rounded-full"></i>
              <i className="fa-regular fa-envelope p-2 bg-neutral-300 rounded-full"></i>
              <i className="fa-brands fa-whatsapp p-2 bg-neutral-300 rounded-full"></i>
            </div>
          </div>

          <section className="flex flex-col sm:flex-row gap-5 sm:gap-20">
            <div>
              <h1 className="text-primary text-xl font-semibold">Company</h1>
              <ul className="text-neutral-300 mt-2 lg:mt-5 flex flex-col gap-2 sm:gap-5">
                <li>
                  <a href="#">Why Klin8</a>
                </li>
                <li>
                  <a href="#"></a>Blog
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary text-xl font-semibold">About</h1>
              <ul className="text-neutral-300 mt-2 lg:mt-5 flex flex-col gap-2 sm:gap-5">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Partner With Us</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary text-xl font-semibold">Meet Us</h1>
              <ul className="text-neutral-300 mt-2 lg:mt-5 w-3/4 flex flex-col gap-2 sm:gap-5">
                <li>
                  <i className="fa-brands fa-whatsapp pe-1"></i> +62 812345678
                </li>
                <li>
                  <i className="fa-regular fa-envelope pe-1"></i> info@klin8.com
                </li>
                <li>
                  <i className="fa-solid fa-location-dot pe-1"></i> Goatan
                  Street, Northen District, Pantura States
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
