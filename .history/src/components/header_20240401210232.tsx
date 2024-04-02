import Logo from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div>
      <img src={Logo} alt="logo" />

      <nav>
        <a href="https">Eventos</a>
        <a href="https://">Participantes</a>
      </nav>
    </div>
  );
}
