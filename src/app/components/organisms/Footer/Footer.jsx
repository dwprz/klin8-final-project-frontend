import { Link } from "react-router-dom";
import logoFooter from "/assets/logo/klin8-high-resolution-logo-transparent.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-gray-700 py-14 px-10 lg:px-10 2xl:px-24 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-[40rem] 2xl:w-[60rem]">
            <figure className="bg-neutral-100 px-7 py-4 rounded-full w-64 lg:w-40 xl:w-64">
              <img src={logoFooter} alt="klin8 logo" className="w-full" />
            </figure>
            <p className="text-neutral-300 mt-5 lg:pe-7 2xl:pe-24 text-base lg:text-sm xl:text-base">
              Kebersihan sepatu terjamin. Percayakan pada layanan laundry sepatu
              kami. pengalaman maksimal untuk sepatu anda. Untuk info lebih
              lanjut, silahkan ikuti akun sosial media kami dibawah ini.
            </p>

            <div className="text-4xl lg:text-xl xl:text-4xl text-gray-700 flex gap-5 mt-5">
              <Link to={"https://www.instagram.com/accounts/emailsignup/"}>
                <i className="fa-brands fa-instagram p-2 bg-neutral-300 rounded-full"></i>
              </Link>

              <Link to={"https://mail.google.com"}>
                <i className="fa-regular fa-envelope p-2 bg-neutral-300 rounded-full"></i>
              </Link>

              <Link to={"https://www.whatsapp.com/download/"}>
                <i className="fa-brands fa-whatsapp p-2 bg-neutral-300 rounded-full"></i>
              </Link>
            </div>
          </div>

          <section className="flex flex-col sm:flex-row gap-5 sm:gap-20 lg:gap-7 xl:gap-20 xl:w-[40rem]">
            <div>
              <h1 className="text-primary text-xl lg:text-base xl:text-xl font-semibold">Company</h1>
              <ul className="text-neutral-300 text-base lg:text-sm xl:text-base mt-2 lg:mt-5 flex flex-col gap-2 sm:gap-5">
                <li>
                  <Link to="/#whyKlin8">Why Klin8</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Mobile</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary text-xl lg:text-base xl:text-xl font-semibold">About</h1>
              <ul className="text-neutral-300 text-base lg:text-sm xl:text-base mt-2 lg:mt-5 flex flex-col gap-2 sm:gap-5 sm:whitespace-nowrap">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="#">Partner With Us</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary text-xl lg:text-base xl:text-xl font-semibold">Meet Us</h1>
              <ul className="text-neutral-300 text-base lg:text-sm xl:text-base mt-2 lg:mt-5 w-3/4 flex flex-col gap-2 sm:gap-5">
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
