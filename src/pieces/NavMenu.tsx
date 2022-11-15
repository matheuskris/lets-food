// type NavProps = {
//   colorButton: string;
// };

export default function NavMenu() {
  return (
    <>
      <div className="hidden xxg:flex">
        <div className="flex flex-row gap-6 h-full items-center">
          <h3 className="text-[22px] font-medium">Home</h3>
          <h3 className="text-[22px] font-medium">Menu</h3>
          <h3 className="text-[22px] font-medium">How it works</h3>
          <h3 className="text-[22px] font-medium">About</h3>
          <h3 className="text-[22px] font-medium">Contact</h3>
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-8 h-full items-center">
        <div>
          <img src="/search-icon.svg" alt="lupa pesquisar" />
        </div>
        <div>
          <img src="/cart-icon.svg" alt="ícone carrinho" />
        </div>
        <button className={` btn flex flex-row gap-2`}>
          <img src="/sign-in-icon.svg" alt="icone entrar" />
          Sign in
        </button>
      </div>
    </>
  );
}
