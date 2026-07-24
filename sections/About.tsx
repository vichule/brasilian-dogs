import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { HandHeart } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="section-padding"
        >
            <div className="container-custom">

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    <div className="about-image">
                        <Image
                            src="/images/perro3.jpg"
                            alt="Brasilian Dogs"
                            width={900}
                            height={1200}
                        />
                    </div>

                    <div>

                        <SectionTitle
                            eyebrow="Sobre nosotros"
                            title="Más de una década cuidando mascotas con pasión"
                            align="left"
                        />

                        <div className="about-content">

                            <p>
                                Brasilian Dogs nace de una pasión por el bienestar animal
                                y de la experiencia adquirida durante años trabajando
                                junto a propietarios que buscan lo mejor para sus compañeros.
                            </p>

                            <p>
                                Lo que comenzó como un servicio complementario dentro de
                                una clínica veterinaria terminó convirtiéndose en un proyecto
                                especializado, centrado exclusivamente en la peluquería,
                                la higiene y el cuidado estético canino.
                            </p>

                            <p>
                                Tras más de diez años dedicados al sector, seguimos apostando
                                por un trato cercano, profesional y personalizado para que
                                cada mascota disfrute de una experiencia tranquila y agradable.
                            </p>

                            <p>
                                Desde nuestra peluquería en la zona de Manresa, Barcelona,
                                atendemos a familias que buscan confianza, calidad y un
                                servicio adaptado a las necesidades de cada perro.
                            </p>

                        </div>

                        <div className="about-highlights">

                            <div className="about-highlight">
                                <strong>10+</strong>
                                <span>Años de experiencia</span>
                            </div>

                            <div className="about-highlight">
                                <strong>100%</strong>
                                <span>Atención personalizada</span>
                            </div>

                            <div className="about-highlight">
                                <HandHeart size={24} className="about-highlight-icon" />

                                <span>Pasión por los animales</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}