import SectionTitle from "@/components/ui/SectionTitle";

import {
    Phone,
    MessageCircle,
    Mail,
    Camera,
} from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="section-padding"
        >
            <div className="container-custom">

                <SectionTitle
                    eyebrow="Contacto"
                    title="Estamos aquí para ayudarte"
                    description="Si tienes cualquier duda o quieres pedir cita para tu mascota, estaremos encantados de atenderte."
                />

                <div className="contact-grid">

                    <div className="contact-map">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.5192095001526!2d1.8695326766814182!3d41.536354086740964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a48bad5e1f01cd%3A0xee4a11bdabde7a77!2sCarrer%20Barcelona%2C%2027%2C%2008292%20Esparreguera%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1786018254493!5m2!1ses!2ses"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                    </div>

                    <div className="contact-cards">

                        <a
                            href="https://wa.me/34686625671"
                            className="contact-card"
                        >
                            <MessageCircle className="contact-icon" />

                            <div>
                                <h3>WhatsApp</h3>
                                <p>Escríbenos directamente y resolveremos cualquier duda.</p>
                            </div>
                        </a>

                        <a
                            href="tel:+34686625671"
                            className="contact-card"
                        >
                            <Phone className="contact-icon" />

                            <div>
                                <h3>Teléfono</h3>
                                <strong>+34 686 62 56 71</strong>
                                <p>Llámanos para consultar disponibilidad</p>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <Camera className="contact-icon" />

                            <div>
                                <h3>Instagram</h3>
                                <p>Síguenos y descubre nuestro trabajo</p>
                            </div>
                        </a>

                        <a
                            href="mailto:info@brasiliandogs.es"
                            className="contact-card"
                        >
                            <Mail className="contact-icon" />

                            <div>
                                <h3>Email</h3>
                                <strong>info@brasiliandogs.es</strong>
                                <p>Para consultas generales o colaboraciones.</p>
                            </div>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}