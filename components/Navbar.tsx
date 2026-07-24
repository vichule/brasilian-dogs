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
                        
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-8">
                    <li className="nav-link">Inicio</li>
                    <li className="nav-link">Servicios</li>
                    <li className="nav-link">Galería</li>
                    <li className="nav-link">Contacto</li>


                </ul>

                <a href="#contact" className="btn-accent">
                    Reservar
                </a>
            </div>
        </nav>
    );
}