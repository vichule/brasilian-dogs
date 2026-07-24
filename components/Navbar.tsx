import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
            <div className="container-custom flex h-20 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        src="/dogs.png"
                        alt="Brasilian Dogs"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                    <div>

                        <p className="font-bold text-[color:var(--primary)]">
                            Brasilian Dogs
                        </p>

                        <p className="text-xs tracking-wide text-[color:var(--text-muted)]">
                            Peluquería Canina
                        </p>

                    </div>
                </div>

                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <a href="#home" className="nav-link">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#services" className="nav-link">
                            Servicios
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" className="nav-link">
                            Galería
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="nav-link">
                            Contacto
                        </a>
                    </li>
                </ul>


            </div>
        </nav>
    );
}