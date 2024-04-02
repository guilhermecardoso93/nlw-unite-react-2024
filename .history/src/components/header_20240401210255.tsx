import Logo from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div>
      <img src={Logo} alt="logo" />

      <nav>
        <a href="">Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  );
}
