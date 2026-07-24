import {
    HeartHandshake,
    Sparkles,
    Scissors,
} from "lucide-react";

const features = [
    {
        icon: HeartHandshake,
        title: "Trato cercano",
        description:
            "Cada mascota recibe un cuidado paciente, tranquilo y personalizado.",
    },
    {
        icon: Sparkles,
        title: "Productos premium",
        description:
            "Trabajamos con champús y tratamientos profesionales de máxima calidad.",
    },
    {
        icon: Scissors,
        title: "Acabado profesional",
        description:
            "Cortes adaptados a cada raza para conseguir el mejor resultado.",
    },
];

export default function HeroFeatures() {
    return (
        <div className="mt-8 flex flex-col gap-4 sm:mt-10">
            {features.map((feature) => {

                const Icon = feature.icon;

                return (

                    <div
                        key={feature.title}
                        className="feature-card"
                    >

                        <div className="icon-card">
                            <Icon size={24} />
                        </div>

                        <div>

                            <h3 className="feature-title">
                                {feature.title}
                            </h3>

                            <p className="feature-description">
                                {feature.description}
                            </p>

                        </div>

                    </div>

                );

            })}
        </div>
    );
}