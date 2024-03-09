import imgs from "../../../../public/assets/logo/contact.svg";

function ContactFragment() {
  return (
    <main className="bg-gray-800 pt-16">
      {/* <Maps /> */}

      <section className="flex flex-col p-9 min-h-screen gap-10 sm:flex-row">
        <div className="sm:w-1/2">
          <div className="sm:m-auto sm:h-full">
            <div className="w-full h-72 sm:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8221.36432965681!2d106.8099104164235!3d-6.293126568881959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a8b7dcfbd9%3A0xfe981ddde10b71e5!2sharisenin.com!5e0!3m2!1sid!2sid!4v1706290087695!5m2!1sid!2sid"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

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
