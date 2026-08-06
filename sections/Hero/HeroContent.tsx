export default function HeroContent() {
    return (
        <div className="max-w-2xl">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
                Brasilian Dogs
            </p>

            <h1 className="text-4xl font-black leading-tight text-[color:var(--primary)] sm:text-5xl lg:text-[3.4rem]">
                Donde cada perro recibe un cuidado tan especial como en casa.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--text-muted)] sm:text-xl">
                Baño, corte e higiene profesional con un trato cercano, paciente y
                personalizado para que cada visita sea una buena experiencia.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-accent">
                    Contactar
                </a>

                <a href="#services" className="btn-secondary">
                    Ver servicios
                </a>
            </div>
        </div>
    );
}