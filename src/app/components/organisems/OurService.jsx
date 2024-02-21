import Button from "../../components/atoms/Button";
import Card from "../../components/molecules/Card";

function OurService() {
    return (
        <>
            <section className="mt-14 lg:mt-24 px-10">
                <header className="text-center">
                    <h1 className="uppercase text-3xl">Our Service</h1>
                    <hr className="border-primary border-[1.5px] w-1/3 mx-auto mt-3" />
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </header>

                <section className="flex flex-col lg:flex-row gap-5 sm:gap-7 mt-10 sm:px-14 lg:px-24">
                    <Card
                        type={"SERVICE_HOME"}
                        image={"./assets/icons/brush-svgrepo-com.svg"}
                        title={"Cleaning"}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
                        quibusdam!
                    </Card>

                    <Card
                        type={"SERVICE_HOME"}
                        image={"./assets/icons/paint-brush-svgrepo-com.svg"}
                        title={"Repainting"}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
                        quibusdam!
                    </Card>

                    <Card
                        type={"SERVICE_HOME"}
                        image={"./assets/icons/service-desk-svgrepo-com.svg"}
                        title={"Consultasy"}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
                        quibusdam!
                    </Card>
                </section>

                <div className="flex justify-center lg:mt-14 lg:text-2xl">
                    <Button to={"/service"}>Selengkapnya</Button>
                </div>
            </section>
        </>
    );
}

export default OurService;