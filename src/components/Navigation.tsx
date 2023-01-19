import { useEffect, useState } from "react";
import NavMenu from "../pieces/NavMenu";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const stylesNav = scrolled
    ? "h-littleNavHeight shadow-dark-light shadow-xl"
    : "h-navHeight";

  const navOpenProps = "";

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
      className={`fixed bg-light z-20 flex flex-row justify-between transition-all w-full px-wrapper lg:px-bigWrapper ${stylesNav}`}
    >
      <div className="flex place-items-center">
        <Image src="/logo.svg" width={167} height={47} alt="logo da loja" />
      </div>
      <div className="flex place-items-center lg:hidden">
        <Image src="/openMenu.svg" width={47} height={47} alt="Abrir menu" />
      </div>
      <NavMenu />
    </nav>
  );
}
