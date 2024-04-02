import Logo from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={Logo} alt="logo" />

      <nav>
        <a href="">Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  );
}
