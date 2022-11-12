import { useEffect, useState } from "react";
import NavMenu from "../pieces/NavMenu";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  const bgNav = scrolled ? "bg-orange" : "bg-light";
  const stylesMovedButton = scrolled ? "bg-custom-black text-white" : "";

  function getScroll() {
    if (window.scrollY > 0) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => getScroll());

    return () => window.removeEventListener("scroll", () => getScroll());
  }, []);

  return (
    <nav
      className={`fixed  flex flex-row justify-between h-navHeight w-full px-wrapper lg:px-bigWrapper ${bgNav}`}
    >
      <div className="flex place-items-center">
        <img src="logo.svg" width={167} height={47} alt="logo da loja" />
      </div>
      <div className="flex place-items-center lg:hidden">
        <img src="/openMenu.svg" alt="Abrir menu" />
      </div>
      <NavMenu colorButton={stylesMovedButton} />
    </nav>
  );
}
