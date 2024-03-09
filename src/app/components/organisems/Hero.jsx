import Button from "../atoms/Button";
import hero from "/assets/hero/hero1.jpg";

function Hero() {
    return (
        <>
            <section className="relative h-screen">
                <div className="absolute z-20 flex flex-col w-full gap-24 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <header className="text-neutral-100 text-center px-5">
                        <h1 className="text-2xl sm:text-4xl xl:text-8xl font-bold">
                            Selamat datang di loundry Klin8
                        </h1>
                        <p className="text-lg sm:text-xl xl:text-3xl mt-2 sm:mt-5 sm:px-14 xl:px-40">
                            Kami senang Anda memilih kami untuk merawat sepatu kesayangan
                            Anda. Kami siap memberikan layanan terbaik untuk sepatu Anda!
                        </p>
                    </header>
                    <div className="mx-auto lg:text-4xl">
                        <Button to={"/service"}>Selengkapnya</Button>
                    </div>
                </div>
                <img
                    src={hero}
                    alt="klin8"
                    className="absolute z-10 w-full h-full object-cover brightness-50"
                />
            </section>
        </>
    );
}

export default Hero;