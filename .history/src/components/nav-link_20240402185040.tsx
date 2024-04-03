interface NavLinkProps {
  children: string;
  href:string;
}

export function NavLink({children, href} : NavLinkProps) {
  return (
    <a href={href} className="font-medium text-sm text-zinc-300">
      {children}
    </a>
  );
}
