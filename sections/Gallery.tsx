import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const galleryImages = [
    "/images/perro1.jpg",
    "/images/perro2.jpg",
    "/images/perro3.jpg",
    "/images/perro4.jpg",
    "/images/perro5.jpg",
    "/images/perro6.jpg",
    "/images/perro7.jpg",
];

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="section-padding"
        >
            <div className="container-custom">

                <SectionTitle
                    eyebrow="Galería"
                    title="Un espacio pensado para ellos"
                    description="Descubre algunas imágenes de nuestro trabajo, nuestras instalaciones y los momentos especiales que compartimos con cada mascota."
                />

                <div className="gallery-grid">

                    {galleryImages.map((image, index) => (
                        <div
                            key={image}
                            className={`gallery-item gallery-item-${(index % 4) + 1}`}
                        >
                            <Image
                                src={image}
                                alt="Brasilian Dogs"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}