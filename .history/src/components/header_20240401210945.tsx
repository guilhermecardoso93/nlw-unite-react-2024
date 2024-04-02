import Logo from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={Logo} alt="logo" />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm">Eventos</a>
        <a href="" className="font-medium text-sm">Participantes</a>
      </nav>
    </div>
  );
}