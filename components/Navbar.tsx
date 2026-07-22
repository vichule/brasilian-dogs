export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container-custom h-20 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">
            Brasilian Dogs
          </h1>
        </div>

        <ul className="hidden md:flex gap-8">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Galería</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>

        <button className="px-4 py-2 rounded-lg">
          Reservar
        </button>
      </div>
    </nav>
  );
}