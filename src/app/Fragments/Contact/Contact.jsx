import Maps from "../../components/molecules/Maps";

function ContactFragment() {
  return (
    <>
      <section className="flex flex-col p-9 min-h-screen gap-10 sm:flex-row">
        <Maps/>

        <div className="sm:w-1/2 flex flex-col sm:gap-5 min-h-screen">
          <div className="hidden sm:block w-full m-auto">
            <img src="../../assets/logo/contact.svg" />
          </div>

          <div
            className="w-full flex flex-col justify-center text-xs gap-6 sm:rounded-2xl sm:border sm:item sm:p-7 sm:m-auto sm:bg-cyan">
            <h1 className="font-bold sm:text-lg">Contact us</h1>

            <form action="" className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute top-0.5 p-2 left-1">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input type="text" required placeholder="Enter your name" className="border rounded-2xl py-2 w-full ps-8" />
              </div>
              <div className="relative">
                <div className="absolute top-0.5 p-2 left-1">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <input type="email" required placeholder="Enter your email" className="border rounded-2xl py-2 w-full ps-8" />
              </div>
              <div>
                <textarea name="message" id="message" className="border rounded-xl py-2 w-full ps-2 h-20"
                  placeholder="Message"></textarea>
              </div>
            </form>

            <div className="flex flex-col gap-3">
              <button className="flex justify-center items-center py-2 w-full bg-dark_blue text-white rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactFragment;
