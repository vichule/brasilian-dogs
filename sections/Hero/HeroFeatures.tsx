const features = [
    {
        icon: "🐾",
        title: "Trato cercano",
        description: "Cada mascota es única y la cuidamos con paciencia y cariño.",
    },
    {
        icon: "🛁",
        title: "Productos",
        description: "Champús y tratamientos profesionales para una higiene de calidad.",
    },
    {
        icon: "✂️",
        title: "Especialistas",
        description: "Experiencia, precisión y un resultado impecable en cada visita.",
    },
];

export default function HeroFeatures() {
    return (
        <div className="mt-8 flex flex-col gap-4 sm:mt-10">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="flex items-start gap-4 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 shadow-sm sm:px-6 sm:py-5"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white text-2xl shadow-sm">
                        <span>{feature.icon}</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-[color:var(--primary)]">{feature.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[color:var(--text-muted)]">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}