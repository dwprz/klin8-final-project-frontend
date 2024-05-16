function Priority() {
    return (
        <>
            <section className="relative mt-14 lg:mt-24">
                <article className="flex flex-col absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <header>
                        <h1 className="uppercase font-extrabold text-neutral-100 text-3xl sm:text-4xl lg:text-8xl border-b-2 border-primary px-1 w-max mx-auto">
                            Our Priority
                        </h1>
                    </header>

                    <div className="flex justify-center text-neutral-300 gap-5 lg:gap-14 mt-5 lg:mt-20 sm:mt-10">
                        <h2 className="border px-3 py-1 rounded-xl sm:text-2xl lg:text-5xl">
                            Quality
                        </h2>
                        <h2 className="border px-3 py-1 rounded-xl sm:text-2xl lg:text-5xl">
                            Pleasure
                        </h2>
                        <h2 className="border px-3 py-1 rounded-xl sm:text-2xl lg:text-5xl">
                            simplicity
                        </h2>
                    </div>

                    <div className="mt-3 sm:mt-7 lg:mt-10 text-neutral-300 sm:text-xl lg:text-3xl">
                        <p>
                            Your satisfaction and enjoyment is something that is meaningful to
                            us
                        </p>
                    </div>
                </article>
                <img
                    src="./assets/hero/rak-sepatu.jpg"
                    alt="klin8"
                    className="w-full z-0 brightness-50 xl:min-h-screen object-cover"
                />
            </section>
        </>
    );
}

export default Priority;