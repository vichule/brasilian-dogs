import SectionTitle from "@/components/ui/SectionTitle";
import {
    Bath,
    Scissors,
    PawPrint,
    Sparkles,
    Droplets,
    HeartHandshake,
} from "lucide-react";

const services = [
    {
        icon: Bath,
        title: "Baño Profesional",
        description:
            "Limpieza profunda con productos adaptados al tipo de pelo y piel.",
    },
    {
        icon: Scissors,
        title: "Corte y Arreglo",
        description:
            "Cortes personalizados para cada raza y estilo.",
    },
    {
        icon: PawPrint,
        title: "Corte de Uñas",
        description:
            "Cuidado seguro para mantener la comodidad y salud de sus patas.",
    },
    {
        icon: Sparkles,
        title: "Cepillado y Desenredado",
        description:
            "Eliminación de nudos y mantenimiento del pelaje.",
    },
    {
        icon: Droplets,
        title: "Tratamientos Especiales",
        description:
            "Hidratación y cuidados específicos para cada necesidad.",
    },
    {
        icon: HeartHandshake,
        title: "Atención Personalizada",
        description:
            "Cada mascota recibe tiempo, paciencia y un trato cercano.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="section-padding"
        >
            <div className="container-custom">

                <SectionTitle
                    eyebrow="Servicios"
                    title="Todo lo que tu mascota necesita para verse y sentirse mejor"
                    description="Trabajamos con productos profesionales y un trato personalizado para que cada visita sea cómoda, segura y agradable."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (

                            <article
                                key={service.title}
                                className="service-card"
                            >

                                <div className="icon-card">

                                    <Icon size={28} />

                                </div>

                                <h3 className="service-title">
                                    {service.title}
                                </h3>

                                <p className="service-description">
                                    {service.description}
                                </p>

                            </article>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}