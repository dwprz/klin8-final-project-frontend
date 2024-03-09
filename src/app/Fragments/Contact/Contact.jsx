import Maps from "../../components/molecules/Maps";

import imgs from "../../../../public/assets/logo/contact.svg";

function ContactFragment() {
  return (
    <main className="bg-gray-800 pt-16">
      {/* <Maps /> */}

      <section className="flex flex-col p-9 min-h-screen gap-10 sm:flex-row">
        <Maps />

        {/* Side */}
        <div className="sm:w-1/2 flex flex-col sm:gap-5">
          <div className="hidden sm:block w-full m-auto">
            <img src={imgs} className="object-cover" />
          </div>
          <div className="w-full flex flex-col justify-center text-xs gap-6 sm:rounded-2xl sm:item sm:p-7 sm:m-auto sm:bg-gray-700">
            <h1 className="font-bold text-neutral-100 sm:text-lg">
              Contact us
            </h1>
            <form action="" className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute top-0.5 p-2 left-1">
                  <i className="fa-solid fa-envelope" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="border rounded-2xl py-2 w-full ps-8"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0.5 p-2 left-1">
                  <i className="fa-solid fa-user" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="border rounded-2xl py-2 w-full ps-8"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="border rounded-xl py-2 w-full ps-2 h-20"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
            {/* button */}
            <div className="flex flex-col gap-3">
              <button className="flex justify-center items-center py-2 w-full bg-primary text-white rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ContactFragment;
