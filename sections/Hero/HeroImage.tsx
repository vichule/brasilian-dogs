import Image from "next/image";

export default function HeroImage() {

    return (

        <div className="hero-image-wrapper">

            <div className="hero-blob" />
            <div className="hero-image-main">

                <Image
                    src="/images/perro4.jpg"
                    alt="Brasilian Dogs"
                    width={900}
                    height={1200}
                    priority
                />

            </div>

            <div className="hero-image-floating">

                <Image
                    src="/dogs.png"
                    alt=""
                    width={150}
                    height={150}
                />

            </div>

        </div>

    );

}