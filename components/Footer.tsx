import {
    MapPin,
    Phone,
    Mail,
    PawPrint
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-[color:var(--surface)]">
            <div className="container-custom py-14">

                <div className="max-w-xl">

                    <div className="flex items-center gap-3">
                        <PawPrint
                            size={28}
                            className="text-[color:var(--accent)]"
                        />

                        <h3 className="text-2xl font-bold text-[color:var(--primary)]">
                            Brasilian Dogs
                        </h3>
                    </div>

                    <p className="mt-4 text-[color:var(--text-muted)] leading-7">
                        Cuidamos de cada mascota con paciencia, cariño y profesionalidad,
                        para que disfrute de una experiencia relajada y salga tan feliz
                        como guapo.
                    </p>

                </div>

                <div className="mt-10 grid gap-5 text-sm">

                    <div className="flex items-center gap-3">
                        <MapPin
                            size={18}
                            className="text-[color:var(--accent)]"
                        />

                        <a
                            href="https://maps.google.com/?q=Carrer+Barcelona+27+Esparreguera"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Carrer Barcelona, 27 · 08292 Esparreguera, Barcelona
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone
                            size={18}
                            className="text-[color:var(--accent)]"
                        />

                        <a href="tel:+34686625671">
                            +34 686 62 56 71
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail
                            size={18}
                            className="text-[color:var(--accent)]"
                        />

                        <a href="mailto:info@brasiliandogs.es">
                            info@brasiliandogs.es
                        </a>
                    </div>

                </div>

                <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-[color:var(--text-muted)]">
                    © 2026 Brasilian Dogs · Todos los derechos reservados
                </div>

            </div>
        </footer>
    );
}