export default function HeroContent() {
    return (
        <div className="max-w-2xl">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
                Brasilian Dogs
            </p>

            <h1 className="text-4xl font-black leading-tight text-[color:var(--primary)] sm:text-5xl lg:text-[3.4rem]">
                El cuidado que tu perro merece.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--text-muted)] sm:text-xl">
                Baño, corte e higiene profesional con un trato cercano, paciente y
                personalizado para que cada visita sea una buena experiencia.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 font-semibold text-[color:var(--primary)] shadow-[0_10px_30px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5"
                >
                    Reservar
                </a>
                <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-[color:var(--primary)]/15 bg-white px-6 py-3 font-semibold text-[color:var(--primary)] transition hover:-translate-y-0.5 hover:bg-[color:var(--surface)]"
                >
                    Servicios
                </a>
            </div>
        </div>
    );
}