import Image from "next/image";

const images = [
    { src: "/images/perro4.jpg", alt: "Perro en una peluquería canina" },
    { src: "/images/perro2.jpg", alt: "Perro recibiendo cuidado profesional" },
    { src: "/images/perro3.jpg", alt: "Perro en una sesión de peluquería" },
];

export default function HeroImage() {
    return (
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {images.map((image, index) => (
                <div key={image.src} className="overflow-hidden rounded-[36px]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={1200}
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="h-[28rem] w-full object-cover sm:h-[32rem] lg:h-[24rem]"
                    />
                </div>
            ))}
        </div>
    );
}